"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/content/profile";
import { Container, Wordmark } from "./ui";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [open]);
  return (
    <header
      ref={header}
      className="relative z-30 border-b border-line/70 bg-paper"
    >
      <Container className="flex min-h-24 items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Wordmark />
          <span className="eyebrow hidden text-muted xl:block">
            PEOPLE, DATA & STORIES
          </span>
        </div>
        <nav
          aria-label="メインナビゲーション"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-link gap-3 rounded-full border border-ink px-5"
          >
            Contact <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
        <button
          ref={menuButton}
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
          className="flex size-12 items-center justify-center rounded-full border border-line md:hidden"
        >
          {open ? (
            <X aria-hidden="true" size={22} />
          ) : (
            <Menu aria-hidden="true" size={22} />
          )}
        </button>
      </Container>
      <nav
        id="mobile-navigation"
        aria-label="モバイルナビゲーション"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-paper px-6 py-5 shadow-lg md:hidden"
      >
        {[...navigation, { href: "#contact", label: "Contact" }].map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="flex min-h-14 items-center justify-between border-b border-line/60 py-3 font-display text-xl last:border-0"
          >
            {link.label}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  );
}
