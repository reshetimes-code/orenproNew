"use client";

import { useEffect, useState } from "react";
import YouTubeBackground from "./YouTubeBackground";

export default function HeroVideoSlider({ videoIds }: { videoIds: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % videoIds.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [videoIds.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {videoIds.map((id, i) => (
        <div
          key={id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <YouTubeBackground videoId={id} />
        </div>
      ))}
    </div>
  );
}
