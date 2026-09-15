import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "צור קשר",
  description: "צרו קשר לקבלת הצעת מחיר לבניית אתר, כרטיס ביקור דיגיטלי, סיור וירטואלי, אנימציה או צילום אוויר.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-extrabold sm:text-5xl">
        <span className="text-gradient">צור קשר</span>
      </h1>
      <p className="mt-4 text-lg text-muted">
        נשמח לשמוע על הפרויקט שלכם. אפשר לשלוח הודעה בטופס, לכתוב בוואטסאפ או להתקשר ישירות.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={siteConfig.whatsappHrefWithText("היי, אני מעוניין לשמוע פרטים נוספים")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-400"
        >
          <MessageCircle size={18} />
          וואטסאפ - {siteConfig.phoneDisplay}
        </a>
        <a
          href={siteConfig.telHref}
          className="flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition hover:border-brand-cyan"
        >
          <Phone size={18} />
          חייגו עכשיו
        </a>
      </div>

      <div className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <ContactForm />
      </div>
    </div>
  );
}
