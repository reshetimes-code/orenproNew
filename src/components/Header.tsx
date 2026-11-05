"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site-config";

const topLinks = navItems.filter((i) => i.href === "/" || i.href === "/about");
const accountLink = navItems.find((i) => i.href.startsWith("http"));
// everything between "about" and the external account link goes under one dropdown
const serviceLinks: { label: string; href: string }[] = navItems
  .filter((i) => i.href !== "/" && i.href !== "/about" && !i.href.startsWith("http"))
  .flatMap((i) => [{ label: i.label, href: i.href }, ...("children" in i && i.children ? [...i.children] : [])]);

export default function Header() {
  const [openServices, setOpenServices] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={185}
            height={61}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav aria-label="ניווט ראשי" className="hidden flex-nowrap items-center gap-1 xl:flex">
          {topLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="whitespace-nowrap rounded-md px-3 py-2.5 text-base font-semibold text-foreground/85 transition-colors hover:bg-white/5 hover:text-brand-cyan"
            >
              {item.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setOpenServices(true)}
            onMouseLeave={() => setOpenServices(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setOpenServices(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpenServices(false);
            }}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={openServices}
              onClick={() => setOpenServices((v) => !v)}
              className="flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2.5 text-base font-semibold text-foreground/85 transition-colors hover:bg-white/5 hover:text-brand-cyan"
            >
              השירותים שלנו
              <ChevronDown size={16} className={`opacity-60 transition ${openServices ? "rotate-180" : ""}`} />
            </button>
            {openServices ? (
              <div className="absolute right-0 top-full z-10 min-w-[260px] rounded-lg border border-border bg-surface p-1 shadow-xl">
                {serviceLinks.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpenServices(false)}
                    className="block rounded-md px-3 py-2.5 text-base text-foreground/85 hover:bg-white/5 hover:text-brand-cyan"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {accountLink ? (
            <Link
              href={accountLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-md px-3 py-2.5 text-base font-semibold text-foreground/85 transition-colors hover:bg-white/5 hover:text-brand-cyan"
            >
              {accountLink.label}
            </Link>
          ) : null}
        </nav>

        <a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-green-500/90 px-5 py-2.5 text-base font-semibold text-white transition hover:bg-green-500 xl:inline-flex"
        >
          <MessageCircle size={16} />
          וואטסאפ
        </a>

        <button
          type="button"
          aria-label="פתח תפריט"
          className="rounded-md p-2 text-foreground xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-4 pb-4 xl:hidden">
          {navItems.map((item) => (
            <div key={item.href}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="block flex-1 py-3 text-base font-medium text-foreground/90"
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
                      className="block py-2 text-base text-foreground/70"
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
