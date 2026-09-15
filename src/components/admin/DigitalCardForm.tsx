"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function DigitalCardForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const res = await fetch("/api/admin/digital-cards", { method: "POST", body: new FormData(form) });
    setLoading(false);
    if (res.ok) {
      form.reset();
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
          שם
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
        <label htmlFor="image" className="mb-1 block text-sm font-medium">
          תמונת הכרטיס
        </label>
        <input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          required
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand-cyan"
        />
        <label htmlFor="url" className="mb-1 mt-3 block text-sm font-medium">
          קישור לדוגמת הכרטיס
        </label>
        <input
          id="url"
          name="url"
          type="url"
          required
          dir="ltr"
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
