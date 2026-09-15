"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const TAG_PRESETS = [
  { label: "בלי תג", tag: "", color: "#e63946" },
  { label: "React", tag: "React", color: "#61dafb" },
  { label: "Node.js", tag: "Node.js", color: "#3c873a" },
  { label: "Python", tag: "Python", color: "#3776ab" },
  { label: "WordPress", tag: "WordPress", color: "#21759b" },
];

export default function PortfolioForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [tagPreset, setTagPreset] = useState(0);
  const [customTag, setCustomTag] = useState("");
  const [customColor, setCustomColor] = useState("#e63946");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setPreview(file ? URL.createObjectURL(file) : null);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const tag = customTag.trim() || TAG_PRESETS[tagPreset].tag;
    const color = customTag.trim() ? customColor : TAG_PRESETS[tagPreset].color;
    if (tag) {
      formData.set("tag", tag);
      formData.set("tagColor", color);
    }

    const res = await fetch("/api/admin/portfolio", { method: "POST", body: formData });
    setLoading(false);

    if (res.ok) {
      form.reset();
      setPreview(null);
      setCustomTag("");
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "שגיאה בשמירה");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          שם הפרויקט
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand-cyan"
        />
      </div>

      <div>
        <label htmlFor="logo" className="mb-1 block text-sm font-medium">
          לוגו / תמונת הפרויקט
        </label>
        <input
          id="logo"
          name="logo"
          type="file"
          accept="image/*"
          required
          onChange={handleFileChange}
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand-cyan"
        />
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={preview} alt="תצוגה מקדימה" className="mt-3 h-32 rounded-md border border-border object-contain" />
        ) : null}

        <label htmlFor="url" className="mb-1 mt-3 block text-sm font-medium">
          קישור לאתר שיוצג
        </label>
        <input
          id="url"
          name="url"
          type="url"
          required
          placeholder="https://example.co.il"
          dir="ltr"
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand-cyan"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">תג פינתי (אופציונלי)</label>
        <div className="flex flex-wrap gap-2">
          {TAG_PRESETS.map((preset, i) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => {
                setTagPreset(i);
                setCustomTag("");
              }}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                tagPreset === i && !customTag ? "border-brand-cyan text-brand-cyan" : "border-border text-muted"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <input
            type="text"
            value={customTag}
            onChange={(e) => setCustomTag(e.target.value)}
            placeholder="או תג משלך..."
            className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand-cyan"
          />
          <input
            type="color"
            value={customColor}
            onChange={(e) => setCustomColor(e.target.value)}
            className="h-9 w-12 rounded border border-border bg-background"
            title="צבע התג"
          />
        </div>
      </div>

      {error ? <p className="text-sm text-red-400">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-brand-cyan px-6 py-2.5 font-semibold text-black transition hover:brightness-110 disabled:opacity-60"
      >
        {loading ? "שומר ומעלה ל-GitHub..." : "הוספת פרויקט"}
      </button>
    </form>
  );
}
