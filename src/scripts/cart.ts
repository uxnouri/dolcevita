/**
 * Lightweight cart stored in localStorage. Checkout hands the order to WhatsApp,
 * so there is no server, no payment form and nothing to maintain.
 */
import { openDialog } from "./ui";
import { formatMoney } from "../lib/money";

/** `slug` is "product-slug" or "product-slug:colourIndex" for a colour variant. `price` null = on request. */
type Item = { slug: string; name: string; price: number | null; image: string; qty: number };
type Config = {
  lang: "fr" | "en" | "ar";
  currency: string;
  whatsapp: string;
  productBase: string;
  strings: Record<"remove" | "increase" | "decrease" | "message" | "total" | "quote" | "priceOnRequest", string>;
};

// Bump the suffix whenever stored items would become stale (currency change, new catalogue).
const KEY = "dv-cart:v3";
const drawer = document.getElementById("cart-drawer") as HTMLDialogElement | null;
const config: Config | null = drawer ? JSON.parse(drawer.dataset.cartConfig!) : null;

const read = (): Item[] => {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
  }
};
const write = (items: Item[]) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    /* private mode: cart lives for this page only */
  }
  render(items);
};

const money = (n: number) => formatMoney(n, config?.lang ?? "fr", config?.currency ?? "MAD");
const priceText = (p: number | null) => (p === null ? config!.strings.priceOnRequest : money(p));

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const icon = (d: string) =>
  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const MINUS = icon('<path d="M5 12h14"/>');
const PLUS = icon('<path d="M5 12h14"/><path d="M12 5v14"/>');

function render(items = read()) {
  const count = items.reduce((n, i) => n + i.qty, 0);
  document.querySelectorAll<HTMLElement>("[data-cart-count]").forEach((el) => {
    el.textContent = count > 99 ? "99+" : String(count);
    el.toggleAttribute("data-filled", count > 0);
  });
  if (!drawer || !config) return;

  const list = drawer.querySelector<HTMLElement>("[data-cart-items]")!;
  const empty = drawer.querySelector<HTMLElement>("[data-cart-empty]")!;
  const footer = drawer.querySelector<HTMLElement>("[data-cart-footer]")!;
  empty.classList.toggle("hidden", count > 0);
  list.classList.toggle("hidden", count === 0);
  footer.classList.toggle("hidden", count === 0);

  const s = config.strings;
  list.innerHTML = items
    .map((i) => {
      const href = config.productBase.replace("__slug__", i.slug.split(":")[0]);
      return `<li class="flex gap-4 py-4" data-slug="${escape(i.slug)}">
        <a href="${href}" class="size-20 shrink-0 overflow-hidden rounded-xl bg-sand">
          ${i.image ? `<img src="${escape(i.image)}" alt="" width="80" height="80" class="size-full object-contain mix-blend-multiply" loading="lazy">` : ""}
        </a>
        <div class="flex min-w-0 flex-1 flex-col">
          <a href="${href}" class="truncate font-semibold">${escape(i.name)}</a>
          <span class="text-sm text-muted tabular-nums">${escape(priceText(i.price))}</span>
          <div class="mt-auto flex items-center justify-between pt-2">
            <div class="flex items-center rounded-full border border-ink/15">
              <button type="button" class="pressable grid size-9 place-items-center rounded-full" data-qty="-1" aria-label="${escape(s.decrease)}">${MINUS}</button>
              <span class="min-w-6 px-1 text-center text-sm font-semibold tabular-nums">${i.qty}</span>
              <button type="button" class="pressable grid size-9 place-items-center rounded-full" data-qty="1" aria-label="${escape(s.increase)}">${PLUS}</button>
            </div>
            <button type="button" class="text-sm text-muted underline-offset-4 hover:text-ink hover:underline" data-remove>${escape(s.remove)}</button>
          </div>
        </div>
      </li>`;
    })
    .join("");

  // Any item priced on request turns the whole order into a quote.
  const onRequest = items.some((i) => i.price === null);
  const total = items.reduce((n, i) => n + (i.price ?? 0) * i.qty, 0);
  const totalText = onRequest ? s.quote : money(total);
  drawer.querySelector("[data-cart-total]")!.textContent = totalText;

  const lines = items.map((i) => `• ${i.qty} × ${i.name}${i.price === null ? "" : ` (${money(i.price)})`}`);
  const text = [s.message, "", ...lines, "", `${s.total}: ${totalText}`].join("\n");
  drawer.querySelector<HTMLAnchorElement>("[data-cart-checkout]")!.href =
    `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(text)}`;
}

function add(item: Omit<Item, "qty">, qty = 1) {
  const items = read();
  const existing = items.find((i) => i.slug === item.slug);
  if (existing) existing.qty += qty;
  else items.push({ ...item, qty });
  write(items);
}

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  const addBtn = target.closest<HTMLButtonElement>("[data-add-to-cart]");
  if (addBtn) {
    e.preventDefault();
    const d = addBtn.dataset;
    add({ slug: d.slug!, name: d.name!, price: d.price ? Number(d.price) : null, image: d.image ?? "" });
    openDialog("cart-drawer");
    return;
  }

  const row = target.closest<HTMLElement>("#cart-drawer li[data-slug]");
  if (!row) return;
  const slug = row.dataset.slug!;
  const qtyBtn = target.closest<HTMLElement>("[data-qty]");
  if (qtyBtn) {
    const items = read();
    const item = items.find((i) => i.slug === slug);
    if (!item) return;
    item.qty += Number(qtyBtn.dataset.qty);
    if (item.qty > 0) write(items);
    else removeRow(row, () => write(items.filter((i) => i !== item)));
  } else if (target.closest("[data-remove]")) {
    removeRow(row, () => write(read().filter((i) => i.slug !== slug)));
  }
});

/** Fade a cart line out (150ms, opacity + slight scale) before re-rendering, so it doesn't just vanish. */
function removeRow(row: HTMLElement, commit: () => void) {
  if (row.dataset.removing) return;
  row.dataset.removing = "true";
  row.style.pointerEvents = "none";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const anim = row.animate(
    [{ opacity: 1, transform: "none" }, { opacity: 0, transform: reduce ? "none" : "scale(0.98)" }],
    { duration: 150, easing: "cubic-bezier(0.23, 1, 0.32, 1)", fill: "forwards" },
  );
  anim.finished.then(commit, commit);
}

// Keep several open tabs in sync.
window.addEventListener("storage", (e) => e.key === KEY && render());

render();
