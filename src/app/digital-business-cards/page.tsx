import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import { digitalCardItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "כרטיסי ביקור דיגיטליים",
  description:
    "כרטיסי ביקור דיגיטליים חכמים - שליחת הודעת וואטסאפ, שיחת טלפון ומיקום העסק בלחיצה אחת, בלי צורך לשמור איש קשר.",
  alternates: { canonical: "/digital-business-cards" },
};

export default function DigitalBusinessCardsPage() {
  return (
    <>
      <ServiceHero title="כרטיסי ביקור דיגיטליים" image="/images/services/digital-card.jpg" videoId="UvpcBqbLlcw" />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            כרטיס ביקור דיגיטלי חכם הוא הדרך המהירה והנוחה ביותר לתקשר עם הלקוחות שלכם. לקוח שנכנס לכרטיס מתרשם
            מהעסק שלכם, ומקבל גישה מיידית לכל מה שהוא צריך - שליחת הודעת וואטסאפ ללא שמירת איש קשר, שיחת טלפון
            בלחיצה אחת, מיקום העסק בניווט וכל פרטי העסק הרלוונטיים.
          </p>
          <p>זו הדרך הקלה והנגישה ביותר להנגיש את העסק שלכם ולהגדיל את כמות הפניות מלקוחות פוטנציאליים.</p>
        </div>
      </div>

      <div className="border-t border-border bg-surface/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">דוגמאות לכרטיסים שבנינו</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {digitalCardItems.map((item) => (
              <a
                key={item.slug}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[9/16] overflow-hidden rounded-xl border border-border"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 16vw, 33vw"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
