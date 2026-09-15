import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import VideoGrid from "@/components/VideoGrid";
import { aerialVideos } from "@/content";

export const metadata: Metadata = {
  title: "צילומי אוויר ברחפן",
  description:
    "צילום אוויר מקצועי עם רחפן - למעלה מעשור ניסיון. סרטי הדרכה, סרטי תדמית, קליפים מוזיקליים, סרטים תיעודיים וצילום אירועים.",
  alternates: { canonical: "/aerial-photography" },
};

export default function AerialPhotographyPage() {
  return (
    <>
      <ServiceHero title="צילומי אוויר ברחפן" image="/images/services/aerial-hero.jpg" />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            צילום אוויר מקצועי עם רחפן, בשילוב מגוון פלטפורמות שמאפשרות מענה לכל זווית צילום נדרשת. אני פועל
            למעלה מעשור בצילום עם רחפנים, ומספק צילומי אוויר המתאימים לקשת רחבה של מטרות - סרטי הדרכה, סרטי
            תדמית, קליפים מוזיקליים לזמרים, סרטים תיעודיים וצילום אירועים והפקות מכל הסוגים.
          </p>
          <p>
            אני עובד עם מגוון לקוחות ומבצע צילומים המתאימים לכל בקשה - שירותי צילום אוויר באיכות גבוהה, בזמינות
            גבוהה, במחירים הוגנים ובשירות אמין. צילום אווירי מרחפנים כמעט בכל מקום ובכל זמן.
          </p>
        </div>
      </div>

      <div className="border-t border-border bg-surface/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">מוזמנים להתרשם ממספר דוגמאות</h2>
          <VideoGrid items={aerialVideos} />
        </div>
      </div>
    </>
  );
}
