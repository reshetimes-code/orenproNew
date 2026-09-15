import type { Metadata } from "next";
import { ExternalLink, View } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import { tourItems } from "@/content";

export const metadata: Metadata = {
  title: "סיורים וירטואליים ב-360 מעלות",
  description:
    "סיורי 360 מעלות באיכות 4K - חוויה חזותית מלאה של המקום שלכם, מהכניסה ועד האולם. הדרך הטובה ביותר לשווק עסק, מסעדה, אולם או משרד.",
  alternates: { canonical: "/virtual-tours-360" },
};

export default function VirtualTours360Page() {
  return (
    <>
      <ServiceHero title="סיורים וירטואליים ב-360 מעלות" image="/images/services/tours-360.jpg" videoId="qTm3Jkg-B9g" />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            סיור וירטואלי ב-360° מאפשר לכם ולקוחותיכם להתרשם מהמקום בזמן אמת, כאילו אתם נמצאים בו ממש. באמצעות
            צילום 360 באיכות 4K אנחנו מציגים את הכניסה, המסדרון, האולם, המשרד או המסעדה - בדיוק ובפירוט מרשימים.
          </p>
          <p>
            הלקוחות שלכם יגלו שסיור וירטואלי איכותי מושך קהל, בונה אמון ומגדיל את כמות הפניות - זו אחת הדרכים
            הטובות ביותר לשווק את העסק שלכם עד הקצה.
          </p>
        </div>
      </div>

      <div className="border-t border-border bg-surface/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">מוזמנים להתרשם ממבחר סיורים וירטואליים</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tourItems.map((tour) => (
              <a
                key={tour.slug}
                href={tour.embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-surface p-5 transition hover:border-brand-cyan"
              >
                <span className="flex items-center gap-3 font-semibold">
                  <View size={20} className="text-brand-cyan" />
                  {tour.name}
                </span>
                <ExternalLink size={16} className="text-muted transition group-hover:text-brand-cyan" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
