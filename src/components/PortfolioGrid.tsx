import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@/content";
import RibbonBadge from "./RibbonBadge";

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <a
          key={item.slug}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-video overflow-hidden rounded-lg border border-border bg-surface"
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-75"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100">
            <span className="flex items-center gap-1.5 p-3 text-sm font-medium text-white">
              {item.name}
              <ExternalLink size={14} />
            </span>
          </div>
          {item.tag ? <RibbonBadge label={item.tag} color={item.tagColor} /> : null}
        </a>
      ))}
    </div>
  );
}
