import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "נעים מאוד - אורן שפייזר",
  description:
    "אורן שפייזר - איש מדיה פרילנס עם ניסיון רב בבניית אתרים, עיצוב, אנימציה, עריכת סרטים וצילומי אוויר בדרון. עובד עם משרדי פרסום ולקוחות עצמאיים בכל הארץ.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-extrabold sm:text-5xl">
        <span className="text-gradient">נעים מאוד</span>
      </h1>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
        <p>
          אני אורן שפייזר, איש מדיה עם רקע רחב בעולמות הדיגיטל, שעובד כפרילנס ומשתף פעולה באופן שוטף עם שני משרדי
          פרסום בחיפה. סיימתי את לימודי העיצוב במכללה לעיצוב &quot;תלתן&quot; בחיפה, המשכתי בהתמחות בוובמאסטרינג
          ב&quot;האקריו&quot; בתל אביב, והעמקתי את הידע שלי בהמשך בחיפה.
        </p>
        <p>
          בשנים האחרונות ליוויתי מספר גדול של פרויקטים - מבניית אתרים ומערכות, עיצוב באנרים ואנימציה באפטר אפקט,
          עריכת סרטים, ועד להפעלת רחפן וצילומי אוויר. אני שולט בפוטושופ ובכל חבילת התוכנות של Adobe, יודע לתכנת
          HTML, CSS ו-JavaScript, ובונה אתרי וורדפרס וגם אתרים בקוד טהור, בלי תלות במערכות מוכנות.
        </p>
        <p>
          יש לי ניסיון מוכח בהקמת סיורים וירטואליים ב-360 מעלות, בתפעול רחפן ובצילומי אוויר איכותיים - שירותים
          שמשלימים את היכולת לבנות לעסק שלכם נוכחות דיגיטלית מלאה ומרשימה.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
          <Image src="/images/about/1.jpg" alt="אורן שפייזר בעבודה" fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
          <Image src="/images/about/2.jpg" alt="ציוד צילום מקצועי" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
