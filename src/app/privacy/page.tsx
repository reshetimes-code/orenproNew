import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description: "מדיניות הפרטיות של אתר WEBS - אורן שפייזר, לגבי איסוף ושימוש במידע אישי הנשלח בטופס יצירת הקשר.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-extrabold sm:text-5xl">
        <span className="text-gradient">מדיניות פרטיות</span>
      </h1>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-muted">
        <p>אנחנו מכבדים את פרטיותכם. מדיניות זו מסבירה איזה מידע אנו אוספים באתר וכיצד הוא משמש אותנו.</p>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">איזה מידע נאסף</h2>
          <p>
            בטופס &quot;צור קשר&quot; אנו מבקשים שם מלא, מספר טלפון ותוכן הודעה. שליחת הטופס פותחת עבורכם הודעת
            מייל מוכנה בתוכנת המייל האישית שלכם, כך שהמידע נשלח ישירות מהמכשיר שלכם ואינו נשמר בשרת האתר.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">כיצד נעשה שימוש במידע</h2>
          <p>המידע שתמסרו משמש אותנו בלבד לצורך יצירת קשר ומענה לפנייתכם, ואינו מועבר, נמכר או משותף עם צדדים שלישיים.</p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">עוגיות ואחסון מקומי</h2>
          <p>
            האתר משתמש באחסון מקומי (Local Storage) בדפדפן בלבד לשמירת העדפות הנגישות שהגדרתם (כגון גודל טקסט
            או מצב ניגודיות), ואינו משתמש בעוגיות מעקב או פרסום.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">זכויותיכם</h2>
          <p>
            אתם זכאים לבקש פרטים על המידע שנמסר לנו, לבקש את מחיקתו או לבקש שלא נשתמש בו. לכל בקשה כזו, פנו אלינו
            דרך{" "}
            <a href="/contact" className="underline">
              טופס יצירת הקשר
            </a>{" "}
            או בוואטסאפ/טלפון.
          </p>
        </div>
      </div>
    </div>
  );
}
