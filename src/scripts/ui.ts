/**
 * Site-wide UI behaviour. Tiny on purpose: native <dialog>, IntersectionObserver, no framework.
 */

// ---- Dialogs (menu, search, cart) ---------------------------------------------------------
export function openDialog(id: string) {
  const dialog = document.getElementById(id) as HTMLDialogElement | null;
  if (!dialog || dialog.open) return;
  document.querySelectorAll<HTMLDialogElement>("dialog[open]").forEach((d) => d.close());
  dialog.showModal();
  dialog.querySelector<HTMLInputElement>("input[type=search]")?.focus();
}

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const opener = target.closest<HTMLElement>("[data-open]");
  if (opener) {
    e.preventDefault();
    openDialog(opener.dataset.open!);
    return;
  }
  if (target.closest("[data-close]")) {
    target.closest("dialog")?.close();
    return;
  }
  // Click on the backdrop (the dialog element itself, outside its content) closes it.
  if (target instanceof HTMLDialogElement && target.open) {
    const r = target.getBoundingClientRect();
    const { clientX: x, clientY: y } = e as MouseEvent;
    if (x < r.left || x > r.right || y < r.top || y > r.bottom) target.close();
  }
});

// Close the mobile menu when following an in-page link from it.
document.getElementById("menu-drawer")?.addEventListener("click", (e) => {
  if ((e.target as HTMLElement).closest("a")) (e.currentTarget as HTMLDialogElement).close();
});

// ---- Header border once the page scrolls ---------------------------------------------------
const header = document.querySelector<HTMLElement>("[data-header]");
if (header) {
  const sentinel = document.createElement("div");
  sentinel.style.cssText = "position:absolute;top:0;height:1px;width:1px;pointer-events:none";
  document.body.prepend(sentinel);
  new IntersectionObserver(([entry]) => header.toggleAttribute("data-scrolled", !entry.isIntersecting)).observe(
    sentinel,
  );
}

// ---- Scroll reveal (once, staggered via --i) -----------------------------------------------
const revealables = document.querySelectorAll<HTMLElement>("[data-reveal]");
if (revealables.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    },
    // Huge side margins: items off-screen *horizontally* (inside swipe rails) count as visible,
    // so swiping never waits on a fade. Only vertical scrolling reveals.
    { rootMargin: "0px 1000% -8% 1000%" },
  );
  revealables.forEach((el) => io.observe(el));
}

// ---- Rails: prev/next buttons scroll by one "page" -----------------------------------------
document.querySelectorAll<HTMLElement>("[data-rail]").forEach((wrap) => {
  const rail = wrap.querySelector<HTMLElement>(".rail");
  const prev = wrap.querySelector<HTMLButtonElement>("[data-rail-prev]");
  const next = wrap.querySelector<HTMLButtonElement>("[data-rail-next]");
  if (!rail || !prev || !next) return;
  // In right-to-left pages scrollLeft runs from 0 towards negative values.
  const sign = getComputedStyle(rail).direction === "rtl" ? -1 : 1;
  const update = () => {
    const pos = Math.abs(rail.scrollLeft);
    prev.disabled = pos < 8;
    next.disabled = pos + rail.clientWidth > rail.scrollWidth - 8;
  };
  const by = (dir: number) => rail.scrollBy({ left: dir * sign * rail.clientWidth * 0.9, behavior: "smooth" });
  prev.addEventListener("click", () => by(-1));
  next.addEventListener("click", () => by(1));
  rail.addEventListener("scroll", update, { passive: true });
  update();
});

// ---- Dropdowns (language menu) --------------------------------------------------------------
document.querySelectorAll<HTMLElement>("[data-dropdown]").forEach((dropdown) => {
  const trigger = dropdown.querySelector<HTMLButtonElement>("[data-dropdown-trigger]")!;
  const setOpen = (open: boolean) => {
    dropdown.toggleAttribute("data-expanded", open);
    trigger.setAttribute("aria-expanded", String(open));
  };
  trigger.addEventListener("click", () => setOpen(!dropdown.hasAttribute("data-expanded")));
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target as Node)) setOpen(false);
  });
  dropdown.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && dropdown.hasAttribute("data-expanded")) {
      setOpen(false);
      trigger.focus();
    }
  });
  dropdown.addEventListener("focusout", (e) => {
    if (!dropdown.contains(e.relatedTarget as Node)) setOpen(false);
  });
});
