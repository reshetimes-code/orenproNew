import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@/content";
import RibbonBadge from "./RibbonBadge";

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <a
          key={item.slug}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-[4/3] overflow-hidden sm:aspect-video rounded-lg border border-border"
          style={{ backgroundColor: item.bgColor || "#d4d4d4" }}
        >
          <div className="absolute inset-0 p-1.5 sm:p-6">
            <div
              className="relative h-full w-full"
              style={item.logoScale ? { transform: `scale(${item.logoScale})` } : undefined}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain transition duration-500 group-hover:scale-105"
                style={
                  item.emphasize
                    ? {
                        filter:
                          "saturate(1.4) contrast(1.2) drop-shadow(1px 0 0 #3a2a00) drop-shadow(-1px 0 0 #3a2a00) drop-shadow(0 1px 0 #3a2a00) drop-shadow(0 -1px 0 #3a2a00) drop-shadow(0 2px 4px rgba(0,0,0,0.8))",
                      }
                    : item.outline
                      ? {
                          filter: ["0.5px 0", "-0.5px 0", "0 0.5px", "0 -0.5px"]
                            .map((o) => `drop-shadow(${o} 0 ${item.outline})`)
                            .join(" "),
                        }
                      : undefined
                }
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              />
            </div>
          </div>
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
