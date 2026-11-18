"use client";

import { useEffect, useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/il/app/stannel-business-club/id6824633206";
const PAGE_URL = "https://orenpro.co.il/stannel-app";

type Device = "checking" | "ios" | "other";

export default function AppRedirect() {
  const [device, setDevice] = useState<Device>("checking");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const isIOS =
      /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1);
    if (isIOS) {
      setDevice("ios");
      window.location.replace(APP_STORE_URL);
    } else {
      setDevice("other");
    }
  }, []);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(PAGE_URL);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-3xl font-extrabold sm:text-4xl">
        <span className="text-gradient">STANNEL BUSINESS CLUB</span>
      </h1>

      {device === "checking" && <p className="mt-6 text-muted">רק רגע...</p>}

      {device === "ios" && (
        <>
          <p className="mt-6 text-lg text-muted">מעביר אותך להורדת האפליקציה ב-App Store...</p>
          <a
            href={APP_STORE_URL}
            className="mt-6 rounded-full bg-brand-orange px-6 py-3 font-semibold text-black transition hover:opacity-90"
          >
            להורדה ב-App Store
          </a>
        </>
      )}

      {device === "other" && (
        <>
          <p className="mt-6 text-lg text-muted">
            האפליקציה זמינה להורדה באייפון בלבד. כדי להוריד אותה, יש להיכנס לדף הזה מהאייפון.
          </p>
          <div dir="ltr" className="mt-6 w-full rounded-xl border border-border bg-surface p-4 text-sm">
            {PAGE_URL}
          </div>
          <button
            type="button"
            onClick={copyLink}
            className="mt-4 rounded-full border border-border px-6 py-3 font-semibold transition hover:border-brand-orange"
          >
            {copied ? "הקישור הועתק" : "העתקת הקישור"}
          </button>
        </>
      )}
    </div>
  );
}
