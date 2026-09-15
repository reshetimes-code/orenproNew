import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "עריכת סרטים",
  description: "צילום ועריכת וידאו מקצועיים לקידום ומיתוג מוצרים, סרטי תדמית, שיווק ומכירות אונליין - כולל צילום אוויר מרחפן.",
  alternates: { canonical: "/video-editing" },
};

export default function VideoEditingPage() {
  return (
    <>
      <ServiceHero title="עריכת סרטים" image="/images/services/video-editing.jpg" videoId="2GHiDnCgHeY" />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            צילום וידאו וסאונד בצורה מקצועית לקידום ומיתוג מוצרים, להגברת החשיפה ולהגדלת המכירות אונליין. אני
            מספק שירותי צילום לצרכי שיווק ותדמית - מצילום והקלטה, עריכה ופרסום, ועד ביצוע מקצועי ויעיל מקצה
            לקצה.
          </p>
          <p>בין השירותים: עריכת וידאו וסטילס, וכן צילום אווירי מרחפן עם ניסיון רב - לפרטים נוספים על שירות הצילום האווירי.</p>
        </div>

        <Link
          href="/aerial-photography"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition hover:border-brand-cyan hover:text-brand-cyan"
        >
          צילומי אוויר ברחפן
          <ArrowLeft size={16} />
        </Link>
      </div>
    </>
  );
}
