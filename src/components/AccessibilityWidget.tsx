"use client";

import { useEffect, useState } from "react";
import { Accessibility, X, Plus, Minus, Contrast, Underline, RotateCcw } from "lucide-react";

const STORAGE_KEY = "a11y-prefs";

type Prefs = {
  fontStep: number;
  highContrast: boolean;
  underlineLinks: boolean;
};

const defaultPrefs: Prefs = { fontStep: 0, highContrast: false, underlineLinks: false };

function applyPrefs(prefs: Prefs) {
  const root = document.documentElement;
  root.style.fontSize = prefs.fontStep === 0 ? "" : `${100 + prefs.fontStep * 12.5}%`;
  root.classList.toggle("a11y-high-contrast", prefs.highContrast);
  root.classList.toggle("a11y-underline-links", prefs.underlineLinks);
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(defaultPrefs);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Prefs;
        setPrefs(parsed);
        applyPrefs(parsed);
      }
    } catch {
      // ignore unavailable storage
    }
  }, []);

  function update(next: Prefs) {
    setPrefs(next);
    applyPrefs(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore unavailable storage
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div
          role="dialog"
          aria-label="הגדרות נגישות"
          className="mb-3 w-64 rounded-xl border border-border bg-surface p-4 shadow-xl"
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold">הגדרות נגישות</h2>
            <button aria-label="סגור הגדרות נגישות" onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="mb-3 flex items-center justify-between text-sm">
            <span>גודל טקסט</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="הקטן טקסט"
                className="rounded-md border border-border p-1.5 hover:border-brand-cyan"
                onClick={() => update({ ...prefs, fontStep: Math.max(-2, prefs.fontStep - 1) })}
              >
                <Minus size={14} />
              </button>
              <button
                type="button"
                aria-label="הגדל טקסט"
                className="rounded-md border border-border p-1.5 hover:border-brand-cyan"
                onClick={() => update({ ...prefs, fontStep: Math.min(4, prefs.fontStep + 1) })}
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <button
            type="button"
            className="mb-2 flex w-full items-center justify-between rounded-md border border-border px-3 py-2 text-sm hover:border-brand-cyan"
            aria-pressed={prefs.highContrast}
            onClick={() => update({ ...prefs, highContrast: !prefs.highContrast })}
          >
            <span className="flex items-center gap-2">
              <Contrast size={16} />
              ניגודיות גבוהה
            </span>
            <span>{prefs.highContrast ? "פעיל" : "כבוי"}</span>
          </button>

          <button
            type="button"
            className="mb-2 flex w-full items-center justify-between rounded-md border border-border px-3 py-2 text-sm hover:border-brand-cyan"
            aria-pressed={prefs.underlineLinks}
            onClick={() => update({ ...prefs, underlineLinks: !prefs.underlineLinks })}
          >
            <span className="flex items-center gap-2">
              <Underline size={16} />
              קו תחתון לקישורים
            </span>
            <span>{prefs.underlineLinks ? "פעיל" : "כבוי"}</span>
          </button>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted hover:border-brand-orange hover:text-brand-orange"
            onClick={() => update(defaultPrefs)}
          >
            <RotateCcw size={14} />
            איפוס
          </button>

          <a href="/accessibility" className="mt-3 block text-center text-xs text-muted underline">
            הצהרת נגישות מלאה
          </a>
        </div>
      ) : null}

      <button
        type="button"
        aria-label="פתח תפריט נגישות"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/40 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
      >
        <Accessibility size={24} />
      </button>
    </div>
  );
}
