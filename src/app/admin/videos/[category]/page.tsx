import { getFileContent } from "@/lib/github";
import type { SiteContent } from "@/content/types";
import VideoForm from "@/components/admin/VideoForm";
import DeleteItemButton from "@/components/admin/DeleteItemButton";

export const dynamic = "force-dynamic";

const LABELS: Record<string, string> = {
  bannerVideos: "וידאו - באנרים ואנימציה",
  videoEditingVideos: "וידאו - עריכת סרטים",
  aerialVideos: "וידאו - צילומי אוויר",
};

export default async function AdminVideosPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const label = LABELS[category];

  if (!label) {
    return <p>קטגוריה לא נמצאה</p>;
  }

  const raw = await getFileContent("src/content/site-content.json");
  const content: SiteContent = JSON.parse(raw);
  const items = content[category as keyof SiteContent] as { id: string; title?: string }[];

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">{label}</h1>

      <div className="mb-10 rounded-xl border border-border bg-surface p-5">
        <h2 className="mb-4 text-lg font-semibold">הוספת סרטון</h2>
        <VideoForm category={category} />
      </div>

      <h2 className="mb-4 text-lg font-semibold">קיימים ({items.length})</h2>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={`${item.id}-${i}`}
            className="flex items-center justify-between gap-4 rounded-lg border border-border bg-surface px-4 py-3 text-sm"
          >
            <div className="flex items-center gap-3">
              <span className="font-medium">{item.title || item.id}</span>
              <a
                href={`https://youtu.be/${item.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted underline"
                dir="ltr"
              >
                youtu.be/{item.id}
              </a>
            </div>
            <DeleteItemButton apiPath={`/api/admin/videos/${category}`} body={{ index: i }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
