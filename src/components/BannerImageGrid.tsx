import Image from "next/image";
import type { BannerImage } from "@/content";

export default function BannerImageGrid({ items }: { items: BannerImage[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.slug}
          className="relative aspect-video overflow-hidden rounded-lg border border-border bg-white"
          title={item.name}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            unoptimized
            className="object-contain p-2"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
}
