import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import PromoVideoGrid from "@/components/PromoVideoGrid";
import { promoVideos } from "@/content";

export const metadata: Metadata = {
  title: "סרטוני פרסום",
  description: "סרטוני פרסום קצרים לרשתות החברתיות ולקידום עסקים - עריכה, אנימציה ותוכן שיווקי.",
  alternates: { canonical: "/promo-videos" },
};

export default function PromoVideosPage() {
  return (
    <>
      <ServiceHero
        title="סרטוני פרסום"
        subtitle="סרטונים קצרים לרשתות החברתיות ולקידום העסק"
        image="/images/services/video-editing.jpg"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">דוגמאות לסרטוני פרסומת לעסקים</h2>
        <PromoVideoGrid items={promoVideos} />
      </div>
    </>
  );
}
