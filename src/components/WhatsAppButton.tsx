import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappHrefWithText("היי, אני מעוניין לשמוע פרטים נוספים")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="פתח שיחת וואטסאפ"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition hover:scale-105 hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">דברו איתנו</span>
    </a>
  );
}
