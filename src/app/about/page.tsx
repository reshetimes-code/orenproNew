import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "נעים מאוד - אורן שפייזר",
  description:
    "אורן שפייזר - מפתח Full Stack ויזם טכנולוגי. פיתוח אתרים, מערכות Web ופלטפורמות SaaS, אפליקציות ושילוב AI, מהאפיון ועד פרודקשן בענן, משנת 2008.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <ServiceHero title="נעים מאוד" image="/images/about/stock-bg.jpg" videoId="_Sh5XxP9iSg" />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="space-y-5 text-lg leading-relaxed text-muted">
        <p>
          אני אורן שפייזר, מפתח Full Stack ויזם טכנולוגי, העוסק בפיתוח אתרים, מערכות תוכנה ופתרונות דיגיטליים מתקדמים משנת 2008. אני מתמחה בתכנון, פיתוח והקמה של מערכות Web מורכבות, פלטפורמות SaaS, אפליקציות ושילוב טכנולוגיות בינה מלאכותית (AI) בתהליכים עסקיים ובמוצרים דיגיטליים.
        </p>
        <p>
          בשנים האחרונות התמקדתי בפיתוח מערכות מקצה לקצה, משלב הרעיון והאפיון, דרך בניית ממשקי משתמש, פיתוח צד שרת (Backend), עבודה עם מסדי נתונים וממשקי API, ועד להעלאה לפרודקשן, ניהול תשתיות ענן ותחזוקה שוטפת. אני עובד עם טכנולוגיות כגון React, Node.js, JavaScript, Python, PostgreSQL, MongoDB, Docker ו־Google Cloud.
        </p>
        <p>
          תחום מרכזי נוסף בעבודתי הוא שילוב בינה מלאכותית במערכות תוכנה, לרבות עבודה עם Gemini ו־Vertex AI, פיתוח עוזרי AI, אוטומציות חכמות וחיבור מודלים למערכות קיימות באמצעות APIs.
        </p>
        <p>
          במהלך השנים יזמתי ופיתחתי מוצרים ומערכות פעילות, ביניהם FIESTA, STANNEL CLUB, SONGO ומערכות נוספות, המשלבות ניהול משתמשים, ממשקי ניהול, תהליכים אוטומטיים, שירותי ענן וחוויית משתמש מתקדמת. חלק מהמוצרים פועלים כמערכות מסחריות, ואחרים פותחו כאפליקציות המיועדות למשתמשי קצה.
        </p>
        <p>
          כחלק מההתפתחות המקצועית שלי, סיימתי בהצלחה בשנת 2026 הכשרה מקיפה בפיתוח Full Stack וב־Python במכללת ג&apos;ון ברייס, בהיקף של 710 שעות. ההכשרה חיזקה והרחיבה את הידע המעשי שצברתי לאורך השנים בפיתוח תוכנה, עבודה עם מסדי נתונים, תכנות וארכיטקטורת מערכות.
        </p>
        <p>
          אני משלב ניסיון רב שנים בעולם הדיגיטל עם יכולות פיתוח מודרניות, חשיבה מערכתית, למידה עצמאית ויכולת להוביל מוצר טכנולוגי משלב הרעיון ועד למערכת יציבה ופעילה בסביבת Production.
        </p>
        <p className="font-bold text-foreground">
          המיקוד המקצועי שלי כיום הוא פיתוח מערכות תוכנה מתקדמות, פתרונות Full Stack, תשתיות ענן ושילוב AI במוצרים ובתהליכים אמיתיים.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="relative aspect-square overflow-hidden rounded-xl border border-border">
            <Image src={`/images/about/new-${n}.jpg`} alt="אורן שפייזר" fill sizes="(min-width: 768px) 360px, 50vw" className="object-cover" />
          </div>
        ))}
      </div>

      <h2 className="mt-14 text-center text-2xl font-bold sm:text-3xl">תעודות והסמכות</h2>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          { n: 1, alt: "תעודת סיום קורס Python Specialization - Full Stack Web Development" },
          { n: 2, alt: "אישור סיום לימודים וגיליון ציונים - ג'ון בריים" },
        ].map(({ n, alt }) => (
          <a
            key={n}
            href={`/images/about/cert-${n}.jpg`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-[1000/1414] overflow-hidden rounded-xl border border-border bg-white"
          >
            <Image src={`/images/about/cert-${n}.jpg`} alt={alt} fill sizes="(min-width: 768px) 360px, 100vw" className="object-contain" />
          </a>
        ))}
      </div>
      </div>
    </>
  );
}
