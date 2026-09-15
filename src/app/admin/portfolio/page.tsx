import { getFileContent } from "@/lib/github";
import type { SiteContent } from "@/content/types";
import PortfolioForm from "@/components/admin/PortfolioForm";
import DeleteItemButton from "@/components/admin/DeleteItemButton";

export const dynamic = "force-dynamic";

export default async function AdminPortfolioPage() {
  const raw = await getFileContent("src/content/site-content.json");
  const content: SiteContent = JSON.parse(raw);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">פרויקטים (בניית אתרים)</h1>

      <div className="mb-10 rounded-xl border border-border bg-surface p-5">
        <h2 className="mb-4 text-lg font-semibold">הוספת פרויקט חדש</h2>
        <PortfolioForm />
      </div>

      <h2 className="mb-4 text-lg font-semibold">פרויקטים קיימים ({content.portfolio.length})</h2>
      <ul className="space-y-2">
        {content.portfolio.map((item) => (
          <li
            key={item.slug}
            className="flex items-center justify-between gap-4 rounded-lg border border-border bg-surface px-4 py-3 text-sm"
          >
            <div className="flex items-center gap-3">
              <span className="font-medium">{item.name}</span>
              {item.tag ? (
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-semibold text-white"
                  style={{ backgroundColor: item.tagColor || "#e63946" }}
                >
                  {item.tag}
                </span>
              ) : null}
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-muted underline">
                {item.url}
              </a>
            </div>
            <DeleteItemButton apiPath="/api/admin/portfolio" slug={item.slug} />
          </li>
        ))}
      </ul>
    </div>
  );
}
