import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  title: string;
  image: string;
};

export default function ServiceTile({ href, title, image }: Props) {
  return (
    <Link
      href={href}
      className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-xl border border-border"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-75"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <span className="relative z-10 w-full p-4 text-lg font-bold text-white">{title}</span>
    </Link>
  );
}
