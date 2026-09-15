import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import { portfolioItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "עבודות נבחרות",
  description: "אוסף פרויקטים נבחרים - אתרים, מערכות ואפליקציות web שנבנו על ידי WEBS - אורן שפייזר עבור לקוחות מגוונים.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-center text-4xl font-extrabold sm:text-5xl">
        <span className="text-gradient">עבודות נבחרות</span>
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
        {portfolioItems.length} פרויקטים חיים שבניתי ללקוחות בתחומים שונים - לחצו על כל פרויקט כדי לראות אותו באתר החי.
      </p>
      <div className="mt-12">
        <PortfolioGrid items={portfolioItems} />
      </div>
    </div>
  );
}
