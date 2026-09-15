import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת הנגישות של אתר WEBS - אורן שפייזר, בהתאם לתקן הישראלי 5568 ולהנחיות WCAG 2.0 בדרגה AA.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-extrabold sm:text-5xl">
        <span className="text-gradient">הצהרת נגישות</span>
      </h1>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-muted">
        <p>
          אנו רואים חשיבות רבה במתן שירות שוויוני ונגיש לכלל הגולשים והגולשות, כולל אנשים עם מוגבלות. האתר נבנה
          מתוך מטרה לעמוד בהנחיות הנגישות לתכנים באינטרנט (WCAG) 2.0 של ארגון ה-W3C בדרגת AA, ובהתאם לתקן הישראלי
          (ת&quot;י) 5568.
        </p>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">התאמות הנגישות שבוצעו באתר</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>מבנה סמנטי תקין (כותרות, אזורי ניווט וקישור &quot;דלג לתוכן הראשי&quot;)</li>
            <li>אפשרות ניווט מלאה באמצעות המקלדת, כולל אינדיקציית פוקוס ברורה</li>
            <li>טקסט חלופי (alt) לתמונות באתר</li>
            <li>ניגודיות צבעים העומדת ברמת AA</li>
            <li>תפריט נגישות צף המאפשר הגדלת טקסט, מצב ניגודיות גבוהה והוספת קו תחתון לקישורים</li>
            <li>תמיכה מלאה בכיוון כתיבה מימין לשמאל (RTL)</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">מגבלות ידועות</h2>
          <p>
            חלק מהתכנים באתר, כגון סרטוני יוטיוב מוטמעים וסיורים וירטואליים ב-360 מעלות המוצגים באמצעות אתרים
            חיצוניים, נטענים מצדדים שלישיים ועל כן רמת הנגישות שלהם אינה בשליטתנו המלאה.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">פנייה בנושא נגישות</h2>
          <p>
            נתקלתם בבעיית נגישות באתר? נשמח שתפנו אלינו דרך{" "}
            <a href="/contact" className="underline">
              טופס יצירת הקשר
            </a>{" "}
            או בוואטסאפ/טלפון, ונפעל לתקן את הבעיה בהקדם האפשרי.
          </p>
        </div>

        <p className="text-sm">הצהרת הנגישות עודכנה לאחרונה בשנת 2026.</p>
      </div>
    </div>
  );
}
