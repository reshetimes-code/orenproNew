"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";
import type { PromoVideo } from "@/content";

type FullscreenVideo = HTMLVideoElement & { webkitEnterFullscreen?: () => void };

function PromoVideoCard({ video, index }: { video: PromoVideo; index: number }) {
  const ref = useRef<FullscreenVideo>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setExpanded(false);
        ref.current?.pause();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [expanded]);

  async function openFullscreen() {
    const el = ref.current;
    if (!el) return;
    try {
      if (el.requestFullscreen) {
        await el.requestFullscreen();
      } else if (el.webkitEnterFullscreen) {
        el.webkitEnterFullscreen();
      } else {
        setExpanded(true);
      }
    } catch {
      setExpanded(true);
    }
    el.play().catch(() => {});
  }

  function closeExpanded() {
    setExpanded(false);
    ref.current?.pause();
  }

  return (
    <div
      role={expanded ? "dialog" : undefined}
      aria-modal={expanded ? true : undefined}
      aria-label={expanded ? video.title : undefined}
      className={
        expanded
          ? "fixed inset-0 z-[100] flex flex-col bg-black"
          : "overflow-hidden rounded-xl border border-border bg-surface"
      }
    >
      {expanded ? (
        <button
          type="button"
          onClick={closeExpanded}
          aria-label="סגור"
          className="absolute left-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white"
        >
          <X size={22} />
        </button>
      ) : null}
      <video
        ref={ref}
        aria-label={video.title}
        controls
        playsInline
        preload="none"
        poster={video.poster}
        className={expanded ? "h-full w-full bg-black object-contain" : "aspect-[9/16] w-full bg-black object-contain"}
      >
        <source src={video.src} type="video/mp4" />
      </video>
      {expanded ? null : (
        <div className="flex items-center justify-between gap-2 px-3 py-2.5">
          <p className="text-sm font-medium text-foreground/85">דוגמא {index + 1}</p>
          <button
            type="button"
            onClick={openFullscreen}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-semibold transition hover:border-brand-cyan hover:text-brand-cyan"
          >
            <Maximize2 size={14} />
            מסך מלא
          </button>
        </div>
      )}
    </div>
  );
}

export default function PromoVideoGrid({ items }: { items: PromoVideo[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {items.map((video, i) => (
        <PromoVideoCard key={video.slug} video={video} index={i} />
      ))}
    </div>
  );
}
