import Link from "next/link";

const cards = [
  { href: "/admin/portfolio", label: "פרויקטים (בניית אתרים)", desc: "הוספת פרויקט חדש עם לוגו, קישור לאתר ותג" },
  { href: "/admin/digital-cards", label: "כרטיסי ביקור דיגיטליים", desc: "הוספת דוגמת כרטיס עם תמונה וקישור" },
  { href: "/admin/tours", label: "סיורים וירטואליים ב-360", desc: "הוספת סיור עם קישור להטמעה" },
  { href: "/admin/videos/bannerVideos", label: "וידאו - באנרים ואנימציה", desc: "הוספת קישור יוטיוב" },
  { href: "/admin/videos/videoEditingVideos", label: "וידאו - עריכת סרטים", desc: "הוספת קישור יוטיוב" },
  { href: "/admin/videos/aerialVideos", label: "וידאו - צילומי אוויר", desc: "הוספת קישור יוטיוב" },
];

export default function AdminHomePage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">בחר קטגוריה לעדכון</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="rounded-xl border border-border bg-surface p-5 transition hover:border-brand-cyan"
          >
            <p className="font-semibold">{c.label}</p>
            <p className="mt-1 text-sm text-muted">{c.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
