import Image from "next/image";
import type { ClientLogo } from "@/content";

export default function ClientLogoGrid({ items }: { items: ClientLogo[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <a
          key={item.slug}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-border bg-neutral-300 p-4 transition hover:border-brand-cyan"
          title={item.name}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain p-3 transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          />
        </a>
      ))}
    </div>
  );
}
