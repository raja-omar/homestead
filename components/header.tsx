"use client";

import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { Arrow } from "@/components/arrow";
import { Logo } from "@/components/logo";
import { SmartLink } from "@/components/smart-link";
import { button } from "@/components/styles";
import { cn } from "@/lib/cn";
import { clinic, directionsTarget, primaryNav } from "@/lib/clinic";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function scrolledSnapshot() {
  return window.scrollY > 12;
}

export function Header() {
  const menuId = useId();
  const menuButton = useRef<HTMLButtonElement>(null);
  const scrolled = useSyncExternalStore(subscribe, scrolledSnapshot, () => false);
  const [isOpen, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((value) => !value), []);
  const directions = directionsTarget();

  useEffect(() => {
    document.body.classList.toggle("menu-lock", isOpen);
    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
    if (main) main.inert = isOpen;
    if (footer instanceof HTMLElement) footer.inert = isOpen;

    return () => {
      document.body.classList.remove("menu-lock");
      if (main) main.inert = false;
      if (footer instanceof HTMLElement) footer.inert = false;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButton.current?.focus();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={cn(
        "site-header sticky top-0 z-50 border-b bg-ivory transition-colors duration-200",
        scrolled || isOpen ? "border-stone" : "border-transparent",
      )}
    >
      <div className="wrap relative flex min-h-[var(--header)] items-center gap-4">
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <SmartLink
          href="#top"
          onClick={close}
          className="inline-flex min-w-0 items-center gap-2.5 font-serif text-[clamp(1.2rem,1.6vw,1.4rem)] leading-none tracking-[-0.02em] text-charcoal no-underline transition-colors duration-200 hover:text-teal"
        >
          <Logo />
          <span className="truncate">{clinic.name}</span>
        </SmartLink>

        <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Primary">
          {primaryNav().map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
              className="text-[0.9375rem] font-medium text-charcoal no-underline transition-colors duration-200 hover:text-teal"
            >
              {item.label}
            </SmartLink>
          ))}
        </nav>

        <SmartLink
          href={directions.href}
          external={directions.external}
          className={cn(
            button.base,
            button.primary,
            button.small,
            "ml-8 whitespace-nowrap max-lg:hidden",
          )}
        >
          {clinic.actions.directions}
          {directions.external ? <Arrow external /> : null}
        </SmartLink>

        <button
          ref={menuButton}
          type="button"
          className="ml-auto inline-flex min-h-11 shrink-0 items-center px-1 text-[0.9375rem] font-medium text-charcoal transition-colors duration-200 hover:text-teal lg:hidden"
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={toggle}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id={menuId}
        hidden={!isOpen}
        className="fixed inset-x-0 bottom-0 top-[var(--header)] z-40 overflow-y-auto bg-ivory lg:hidden"
      >
        <div className="wrap flex flex-col pt-4 pb-12">
          <nav aria-label="Mobile">
            {primaryNav().map((item) => (
              <SmartLink
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex min-h-14 items-center font-serif text-[1.7rem] tracking-[-0.02em] text-charcoal no-underline transition-colors duration-200 hover:text-teal"
              >
                {item.label}
              </SmartLink>
            ))}
          </nav>
          <SmartLink
            href={directions.href}
            external={directions.external}
            onClick={close}
            className={cn(button.base, button.primary, "mt-8 w-full sm:w-fit")}
          >
            {clinic.actions.directions}
            {directions.external ? <Arrow external /> : null}
          </SmartLink>
        </div>
      </div>
    </header>
  );
}
