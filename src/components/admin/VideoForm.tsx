"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function VideoForm({ category }: { category: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch(`/api/admin/videos/${category}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: data.get("url"), title: data.get("title") }),
    });
    setLoading(false);
    if (res.ok) {
      form.reset();
      router.refresh();
    } else {
      const body = await res.json().catch(() => ({}));
      setError(body.error || "שגיאה בשמירה");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="url" className="mb-1 block text-sm font-medium">
          קישור יוטיוב
        </label>
        <input
          id="url"
          name="url"
          type="text"
          required
          placeholder="https://www.youtube.com/watch?v=..."
          dir="ltr"
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand-cyan"
        />
      </div>
      <div>
        <label htmlFor="title" className="mb-1 block text-sm font-medium">
          כותרת (אופציונלי)
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand-cyan"
        />
      </div>
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-brand-cyan px-6 py-2.5 font-semibold text-black transition hover:brightness-110 disabled:opacity-60"
      >
        {loading ? "שומר..." : "הוספה"}
      </button>
    </form>
  );
}
