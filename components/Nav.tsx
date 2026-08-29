"use client";

import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold text-accent">
          marcellino<span className="text-muted">.dev</span>
        </a>

        <ul className="hidden gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-fg">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-fg md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-4 text-sm text-muted md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
