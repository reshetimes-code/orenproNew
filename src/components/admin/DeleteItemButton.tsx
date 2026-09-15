"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteItemButton({
  apiPath,
  slug,
  body,
}: {
  apiPath: string;
  slug?: string;
  body?: Record<string, unknown>;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm("למחוק פריט זה? השינוי יישלח כקומיט ל-GitHub ויעודכן באתר החי בעוד כדקה.")) return;
    setLoading(true);
    const res = await fetch(apiPath, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body ?? { slug }),
    });
    setLoading(false);
    if (res.ok) {
      router.refresh();
    } else {
      alert("שגיאה במחיקה");
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="shrink-0 rounded-md border border-border px-3 py-1.5 text-xs text-muted hover:border-red-400 hover:text-red-400 disabled:opacity-50"
    >
      {loading ? "מוחק..." : "מחיקה"}
    </button>
  );
}
