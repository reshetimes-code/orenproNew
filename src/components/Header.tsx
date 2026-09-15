"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={140}
            height={46}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-white/5 hover:text-brand-cyan"
              >
                {item.label}
                {"children" in item && item.children ? (
                  <ChevronDown size={14} className="opacity-60" />
                ) : null}
              </Link>
              {"children" in item && item.children ? (
                <div className="invisible absolute right-0 top-full z-10 min-w-[220px] rounded-lg border border-border bg-surface p-1 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-foreground/85 hover:bg-white/5 hover:text-brand-cyan"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-green-500/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-500 lg:inline-flex"
        >
          <MessageCircle size={16} />
          וואטסאפ
        </a>

        <button
          type="button"
          aria-label="פתח תפריט"
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          {navItems.map((item) => (
            <div key={item.href}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className="block flex-1 py-3 text-sm font-medium text-foreground/90"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {"children" in item && item.children ? (
                  <button
                    type="button"
                    aria-label="הצג תת-תפריט"
                    className="p-3"
                    onClick={() => setOpenSub((v) => !v)}
                  >
                    <ChevronDown size={16} className={openSub ? "rotate-180" : ""} />
                  </button>
                ) : null}
              </div>
              {"children" in item && item.children && openSub ? (
                <div className="border-r border-border pr-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2 text-sm text-foreground/70"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle size={16} />
            שיחה בוואטסאפ
          </a>
        </nav>
      ) : null}
    </header>
  );
}
