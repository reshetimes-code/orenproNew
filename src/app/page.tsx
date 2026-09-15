import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowLeft } from "lucide-react";
import ServiceTile from "@/components/ServiceTile";
import PortfolioGrid from "@/components/PortfolioGrid";
import { portfolioItems } from "@/data/portfolio";
import { siteConfig } from "@/lib/site-config";

const services = [
  { href: "/web-development", title: "בניית אתרים ומערכות", image: "/images/services/website.jpg" },
  { href: "/digital-business-cards", title: "כרטיסי ביקור דיגיטליים", image: "/images/services/digital-card.jpg" },
  { href: "/virtual-tours-360", title: "סיורים וירטואליים ב-360", image: "/images/services/tours-360.jpg" },
  { href: "/banners-animation", title: "באנרים ואנימציה", image: "/images/services/banners.jpg" },
  { href: "/video-editing", title: "עריכת סרטים", image: "/images/services/video-editing.jpg" },
  { href: "/aerial-photography", title: "צילומי אוויר בדרון", image: "/images/services/aerial.jpg" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.15),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(249,115,22,0.12),transparent_50%)]" />
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={280}
            height={92}
            className="mx-auto mb-8 h-16 w-auto sm:h-20"
            priority
          />
          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            בניית אתרים <span className="text-gradient">ומערכות</span> לעסק שלך
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            אתרים, כרטיסי ביקור דיגיטליים, סיורים וירטואליים ב-360°, באנרים ואנימציה, עריכת סרטים וצילומי אוויר —
            הכל במקום אחד, בעבודה מקצועית ומהירה.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.whatsappHrefWithText("היי, אני מעוניין בבניית אתר")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-400"
            >
              <MessageCircle size={18} />
              דברו איתי בוואטסאפ
            </a>
            <Link
              href="/portfolio"
              className="flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-foreground transition hover:border-brand-cyan hover:text-brand-cyan"
            >
              עבודות נבחרות
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">השירותים שלנו</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceTile key={s.href} {...s} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface/50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold sm:text-3xl">עבודות נבחרות</h2>
            <Link href="/portfolio" className="flex items-center gap-1 text-sm font-medium text-brand-cyan">
              לכל הפרויקטים
              <ArrowLeft size={16} />
            </Link>
          </div>
          <PortfolioGrid items={portfolioItems.slice(0, 8)} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">רוצים לשמוע פרטים?</h2>
        <p className="mt-3 text-muted">נשמח לשמוע על הפרויקט שלכם ולהציע את הפתרון המתאים.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-brand-cyan px-6 py-3 font-semibold text-black transition hover:brightness-110"
          >
            צור קשר
          </Link>
          <a href={siteConfig.telHref} className="rounded-full border border-border px-6 py-3 font-semibold transition hover:border-brand-cyan">
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
