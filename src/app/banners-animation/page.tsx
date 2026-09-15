import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import VideoGrid from "@/components/VideoGrid";
import { bannerVideos } from "@/data/videos";

export const metadata: Metadata = {
  title: "באנרים ואנימציה",
  description:
    "עיצוב והפקת באנרים אנימטיביים לאתרים ולמייל, סרטוני תדמית ואנימציה מותאמים אישית לאינטרנט ולמובייל.",
  alternates: { canonical: "/banners-animation" },
};

export default function BannersAnimationPage() {
  return (
    <>
      <ServiceHero title="באנרים ואנימציה" image="/images/services/banners-hero.jpg" videoId="UkgK8FOH7mI" />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            הסטודיו שלי מתמחה ביצירת אנימציות לפרסומות ובאנרים לאתרים ולשליחה במייל - בין אם זה GIF מונפש, וידאו
            קצר או קומפוזיציה מרובת פריימים. באנר מונפש מציג את התוכן בצורה דינמית ומושכת יותר, ומגדיל את שיעור
            ההיענות של הגולשים.
          </p>
          <p>
            אני מפיק סרטוני תדמית ואנימציה, ומעצב לאינטרנט ולמובייל בהתאמה אישית לכל לקוח. אני אוהב להכניס חיים
            לכל אתר ואפליקציה בעזרת הנפשת אלמנטים.
          </p>
        </div>
      </div>

      <div className="border-t border-border bg-surface/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
            מוזמנים להתרשם ממספר באנרים, אנימציות ואינטרו לסרטונים
          </h2>
          <VideoGrid items={bannerVideos} />
        </div>
      </div>
    </>
  );
}
