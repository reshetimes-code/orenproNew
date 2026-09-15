import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site-config";

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.95 8.44-9.94z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.19a2.97 2.97 0 0 0-2.09-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.41.59A2.97 2.97 0 0 0 .5 6.19 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.81 2.97 2.97 0 0 0 2.09 2.1c1.91.59 9.41.59 9.41.59s7.5 0 9.41-.59a2.97 2.97 0 0 0 2.09-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.81ZM9.6 15.6V8.4l6.4 3.6-6.4 3.6Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Image src="/images/logo.png" alt={siteConfig.name} width={140} height={46} className="h-10 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{siteConfig.description}</p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="פייסבוק"
              className="rounded-full border border-border p-2 text-muted transition hover:border-brand-cyan hover:text-brand-cyan"
            >
              <FacebookIcon />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="יוטיוב"
              className="rounded-full border border-border p-2 text-muted transition hover:border-brand-orange hover:text-brand-orange"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>

        <nav aria-label="ניווט בפוטר">
          <h2 className="mb-3 text-sm font-semibold text-foreground">ניווט מהיר</h2>
          <ul className="space-y-2 text-sm text-muted">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-brand-cyan">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-foreground">יצירת קשר</h2>
          <ul className="space-y-3 text-sm text-muted">
            <li>
              <a href={siteConfig.telHref} className="flex items-center gap-2 transition hover:text-brand-cyan">
                <Phone size={16} />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-green-400"
              >
                <MessageCircle size={16} />
                שיחה בוואטסאפ
              </a>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-brand-cyan">
                טופס יצירת קשר
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {siteConfig.name} — כל הזכויות שמורות</p>
          <div className="flex items-center gap-4">
            <Link href="/accessibility" className="transition hover:text-brand-cyan">
              הצהרת נגישות
            </Link>
            <Link href="/privacy" className="transition hover:text-brand-cyan">
              מדיניות פרטיות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
