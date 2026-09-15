import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import { portfolioItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "בניית אתרים ומערכות",
  description:
    "בניית אתרים ומערכות מקצועית ומעוצבת - אתרי תדמית, חנויות, מערכות ניהול ואפליקציות web. למעלה מ-30 פרויקטים חיים ללקוחות מרוצים.",
  alternates: { canonical: "/web-development" },
};

export default function WebDevelopmentPage() {
  return (
    <>
      <ServiceHero title="בניית אתרים ומערכות" image="/images/services/website.jpg" />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            אתר האינטרנט הוא חלק מרכזי מכל פעילות שיווקית ועסקית - בין אם אתם עסק, חברה, ארגון או נותני שירות
            עצמאיים. בניית אתר היא תהליך מקצועי שדורש מיומנות גם בצד הטכני-תפעולי וגם בצד העיצובי-חזותי.
          </p>
          <p>
            אתר מעוצב, מלוטש ומקצועי הוא לרוב מה שגורם ללקוח המשוטט ברשת להחליט לפנות דווקא אליכם. אתר טוב עובד
            בשבילכם גם כשאתם נחים, ומושך אליכם לקוחות חדשים 24 שעות ביום.
          </p>
          <p>אני בונה אתרי תדמית, חנויות אונליין, דפי נחיתה ומערכות מותאמות אישית - בקוד עצמאי או בוורדפרס, לפי הצורך של הפרויקט.</p>
        </div>
      </div>

      <div className="border-t border-border bg-surface/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-2 text-center text-2xl font-bold sm:text-3xl">מוזמנים להתרשם ממספר דוגמאות</h2>
          <p className="mb-8 text-center text-muted">30 פרויקטים חיים שבניתי ללקוחות מגוונים</p>
          <PortfolioGrid items={portfolioItems} />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-6 py-3 font-semibold text-black">
          רוצים אתר כזה? דברו איתי
          <ArrowLeft size={16} />
        </Link>
      </div>
    </>
  );
}
