import { getFileContent } from "@/lib/github";
import type { SiteContent } from "@/content/types";
import TourForm from "@/components/admin/TourForm";
import DeleteItemButton from "@/components/admin/DeleteItemButton";

export const dynamic = "force-dynamic";

export default async function AdminToursPage() {
  const raw = await getFileContent("src/content/site-content.json");
  const content: SiteContent = JSON.parse(raw);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">סיורים וירטואליים ב-360</h1>

      <div className="mb-10 rounded-xl border border-border bg-surface p-5">
        <h2 className="mb-4 text-lg font-semibold">הוספת סיור חדש</h2>
        <TourForm />
      </div>

      <h2 className="mb-4 text-lg font-semibold">קיימים ({content.tours.length})</h2>
      <ul className="space-y-2">
        {content.tours.map((item) => (
          <li
            key={item.slug}
            className="flex items-center justify-between gap-4 rounded-lg border border-border bg-surface px-4 py-3 text-sm"
          >
            <div className="flex items-center gap-3">
              <span className="font-medium">{item.name}</span>
              <a href={item.embedUrl} target="_blank" rel="noopener noreferrer" className="text-muted underline">
                {item.embedUrl}
              </a>
            </div>
            <DeleteItemButton apiPath="/api/admin/tours" slug={item.slug} />
          </li>
        ))}
      </ul>
    </div>
  );
}
