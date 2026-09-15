import Link from "next/link";
import LogoutButton from "@/components/admin/LogoutButton";

const categories = [
  { href: "/admin/portfolio", label: "פרויקטים (בניית אתרים)" },
  { href: "/admin/digital-cards", label: "כרטיסי ביקור דיגיטליים" },
  { href: "/admin/tours", label: "סיורים וירטואליים ב-360" },
  { href: "/admin/videos/bannerVideos", label: "וידאו - באנרים ואנימציה" },
  { href: "/admin/videos/videoEditingVideos", label: "וידאו - עריכת סרטים" },
  { href: "/admin/videos/aerialVideos", label: "וידאו - צילומי אוויר" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
        <Link href="/admin" className="text-xl font-bold">
          פאנל ניהול <span className="text-gradient">WEBS</span>
        </Link>
        <LogoutButton />
      </div>

      <div className="flex flex-col gap-8 sm:flex-row">
        <nav className="w-full shrink-0 sm:w-56">
          <ul className="space-y-1 text-sm">
            {categories.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="block rounded-md px-3 py-2 text-foreground/85 hover:bg-white/5 hover:text-brand-cyan"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
