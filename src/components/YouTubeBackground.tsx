"use client";

import { useEffect, useState } from "react";

export default function YouTubeBackground({ videoId }: { videoId: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setEnabled(!mq.matches);
    const handler = (e: MediaQueryListEvent) => setEnabled(!e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!enabled) return null;

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0`;

  return (
    <iframe
      src={src}
      title=""
      aria-hidden="true"
      tabIndex={-1}
      allow="autoplay; encrypted-media"
      className="pointer-events-none absolute left-1/2 top-1/2 h-[150vh] min-h-[56.25vw] w-[266.67vh] min-w-[100vw] -translate-x-1/2 -translate-y-1/2 border-0"
    />
  );
}
