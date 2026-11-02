import type { PromoVideo } from "@/content";

export default function PromoVideoGrid({ items }: { items: PromoVideo[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {items.map((video) => (
        <div key={video.slug} className="overflow-hidden rounded-xl border border-border bg-surface">
          <video
            controls
            playsInline
            preload="none"
            poster={video.poster}
            className="aspect-[9/16] w-full bg-black object-cover"
          >
            <source src={video.src} type="video/mp4" />
          </video>
          <p className="px-3 py-2.5 text-sm font-medium text-foreground/85">{video.title}</p>
        </div>
      ))}
    </div>
  );
}
