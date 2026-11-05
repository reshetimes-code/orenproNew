import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

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
          אתר WEBS - אורן שפייזר פועל להנגשת האתר לאנשים עם מוגבלות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות ולתקנות הנגישות לשירות (תקנה 35), ובהתאם לתקן הישראלי (ת&quot;י) 5568 המבוסס על הנחיות WCAG 2.0 ברמה AA. האתר נגיש באופן חלקי, ואנו ממשיכים לשפר אותו.
        </p>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">התאמות הנגישות שבוצעו באתר</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>מבנה סמנטי תקין (כותרות, אזורי ניווט וקישור &quot;דלג לתוכן הראשי&quot;)</li>
            <li>אפשרות ניווט מלאה באמצעות המקלדת, כולל אינדיקציית פוקוס ברורה</li>
            <li>טקסט חלופי (alt) לתמונות באתר</li>
            <li>ניגודיות צבעים גבוהה, ומצב ניגודיות גבוהה לבחירה</li>
            <li>תפריט נגישות צף המאפשר הגדלת טקסט, מצב ניגודיות גבוהה, הוספת קו תחתון לקישורים ועצירת אנימציות וסרטוני רקע</li>
            <li>כיבוד העדפת המשתמש להפחתת תנועה, וסרטוני רקע ללא קול</li>
            <li>תמיכה מלאה בכיוון כתיבה מימין לשמאל (RTL)</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">מגבלות ידועות</h2>
          <p>
            חלק מהתכנים באתר, כגון סרטוני יוטיוב מוטמעים וסיורים וירטואליים ב-360 מעלות המוצגים באמצעות אתרים
            חיצוניים, נטענים מצדדים שלישיים ועל כן רמת הנגישות שלהם אינה בשליטתנו המלאה. כמו כן, סרטוני הפרסום באתר
            עדיין ללא כתוביות. אנו פועלים להשלמת התאמות אלה.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">פנייה בנושא נגישות</h2>
          <p>
            רכז הנגישות: {siteConfig.owner}, טלפון {siteConfig.phoneDisplay}. נתקלתם בבעיית נגישות באתר? נשמח שתפנו אלינו דרך{" "}
            <a href="/contact" className="underline">
              טופס יצירת הקשר
            </a>{" "}
            או בוואטסאפ/טלפון, ונפעל לתקן את הבעיה בהקדם האפשרי.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">פרטי רכז הנגישות</h2>
          <ul className="space-y-1">
            <li>שם: {siteConfig.owner}</li>
            <li>
              טלפון:{" "}
              <a href={siteConfig.telHref} className="underline">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              דואר אלקטרוני:{" "}
              <a href="mailto:orenshp77@gmail.com" className="underline">
                orenshp77@gmail.com
              </a>
            </li>
          </ul>
          <p className="mt-2">נשתדל להשיב לפניות נגישות בתוך 14 ימי עבודה.</p>
        </div>

        <p className="text-sm">הצהרת הנגישות עודכנה לאחרונה ב-5 בנובמבר 2026.</p>
      </div>
    </div>
  );
}
