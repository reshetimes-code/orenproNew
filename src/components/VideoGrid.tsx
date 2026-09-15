import type { VideoItem } from "@/content";

export default function VideoGrid({ items }: { items: VideoItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((video, i) => (
        <div key={`${video.id}-${i}`} className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="relative aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title ?? "סרטון"}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
          {video.title ? <p className="px-4 py-2.5 text-sm font-medium text-foreground/85">{video.title}</p> : null}
        </div>
      ))}
    </div>
  );
}
