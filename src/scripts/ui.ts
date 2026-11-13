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

// ---- Swipe-to-dismiss for side sheets (touch) -------------------------------------------------
// Track phase: the sheet follows the finger 1:1 (direct transform, no transition).
// Release phase: dismiss on distance (40% of width) OR a flick (> 0.11 px/ms), else snap back fast.
// Sheets enter from the inline end, so they leave the same way: right in FR/EN, left in Arabic.
document.querySelectorAll<HTMLDialogElement>("dialog.sheet").forEach((sheet) => {
  let startX = 0;
  let startY = 0;
  let lastX = 0;
  let lastT = 0;
  let velocity = 0;
  let pointerId: number | null = null;
  let dragging = false;
  let direction = 1;

  const reset = () => {
    pointerId = null;
    dragging = false;
  };

  sheet.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "touch" || !sheet.open || pointerId !== null) return; // one finger only
    pointerId = e.pointerId;
    startX = lastX = e.clientX;
    startY = e.clientY;
    lastT = e.timeStamp;
    velocity = 0;
    direction = getComputedStyle(sheet).direction === "rtl" ? -1 : 1;
  });

  sheet.addEventListener("pointermove", (e) => {
    if (e.pointerId !== pointerId) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (!dragging) {
      if (Math.abs(dy) > 8 && Math.abs(dy) > Math.abs(dx)) return reset(); // vertical: let it scroll
      if (Math.abs(dx) < 8) return;
      dragging = true;
      try {
        sheet.setPointerCapture(e.pointerId);
      } catch {
        /* capture is an enhancement; the drag still works without it */
      }
      sheet.style.transition = "none";
    }
    const dt = Math.max(1, e.timeStamp - lastT);
    velocity = (e.clientX - lastX) / dt;
    lastX = e.clientX;
    lastT = e.timeStamp;
    const toward = dx * direction; // > 0 = toward the dismiss edge
    // Wrong way: progressive resistance (Apple's rubber-band), never a hard stop.
    const offset = toward > 0 ? toward : -rubberband(-toward, sheet.offsetWidth);
    sheet.style.transform = `translateX(${offset * direction}px)`;
  });

  const release = (e: PointerEvent) => {
    if (e.pointerId !== pointerId) return;
    const wasDragging = dragging;
    reset();
    if (!wasDragging) return;
    const toward = (e.clientX - startX) * direction;
    const flick = velocity * direction > 0.11;
    // A drag must never also "click" whatever was under the finger. Browsers usually don't fire one
    // after a pan, so the blocker expires quickly instead of eating the user's next real tap.
    const block = (c: Event) => {
      c.stopPropagation();
      c.preventDefault();
    };
    sheet.addEventListener("click", block, { capture: true, once: true });
    setTimeout(() => sheet.removeEventListener("click", block, { capture: true }), 350);
    if (toward > sheet.offsetWidth * 0.4 || (flick && toward > 0)) {
      // Velocity handoff: leave at the speed the finger threw it (clamped 120–300ms), from where it is now.
      const remaining = Math.max(0, sheet.offsetWidth - toward);
      const speed = Math.max(velocity * direction, 0.6); // px/ms; slow releases still close briskly
      const ms = Math.round(Math.min(300, Math.max(120, remaining / speed)));
      sheet.style.transition = `transform ${ms}ms cubic-bezier(0.23, 1, 0.32, 1), overlay ${ms}ms allow-discrete, display ${ms}ms allow-discrete`;
      sheet.style.transform = "";
      sheet.close();
      setTimeout(() => (sheet.style.transition = ""), ms + 50);
    } else {
      sheet.style.transition = "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)";
      sheet.style.transform = "";
      sheet.addEventListener("transitionend", () => (sheet.style.transition = ""), { once: true });
    }
  };
  sheet.addEventListener("pointerup", release);
  sheet.addEventListener("pointercancel", release);
});

/** Apple's rubber-band: the further past the edge, the less the element follows. */
function rubberband(overshoot: number, dimension: number, constant = 0.55) {
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
}

// iOS Safari only applies :active on touch when the page listens for touchstart.
// Without this, the scale(0.97) press feedback never shows on iPhones.
document.addEventListener("touchstart", () => {}, { passive: true });
