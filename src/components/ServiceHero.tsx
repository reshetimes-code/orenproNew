import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  image: string;
};

export default function ServiceHero({ title, subtitle, image }: Props) {
  return (
    <div className="relative flex min-h-[38vh] items-center justify-center overflow-hidden border-b border-border">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">
          <span className="text-gradient">{title}</span>
        </h1>
        {subtitle ? <p className="mt-4 text-lg text-muted">{subtitle}</p> : null}
      </div>
    </div>
  );
}
