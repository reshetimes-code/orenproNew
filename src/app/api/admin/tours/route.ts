import { NextResponse } from "next/server";
import { commitFiles, getFileContent } from "@/lib/github";
import { slugify } from "@/lib/slugify";
import { readJson, safeHttpUrl } from "@/lib/validate";
import type { SiteContent } from "@/content/types";

const CONTENT_PATH = "src/content/site-content.json";

export async function POST(request: Request) {
  const body = await readJson<{ name?: string; embedUrl?: string }>(request);
  const name = body?.name;
  const embedUrl = body?.embedUrl;

  if (!name?.trim() || !embedUrl?.trim()) {
    return NextResponse.json({ error: "חובה למלא שם וקישור" }, { status: 400 });
  }
  const safeUrl = safeHttpUrl(embedUrl);
  if (!safeUrl) return NextResponse.json({ error: "קישור לא תקין" }, { status: 400 });

  const raw = await getFileContent(CONTENT_PATH);
  const content: SiteContent = JSON.parse(raw);

  const slug = slugify(name);
  content.tours.push({ slug, name: name.trim(), embedUrl: safeUrl });

  await commitFiles(
    [{ path: CONTENT_PATH, content: JSON.stringify(content, null, 2) + "\n", encoding: "utf-8" }],
    `admin: add tour "${name}"`
  );

  return NextResponse.json({ ok: true, slug });
}

export async function DELETE(request: Request) {
  const body = await readJson<{ slug?: string }>(request);
  const slug = body?.slug;
  if (!slug) return NextResponse.json({ error: "בקשה לא תקינה" }, { status: 400 });
  const raw = await getFileContent(CONTENT_PATH);
  const content: SiteContent = JSON.parse(raw);

  content.tours = content.tours.filter((t) => t.slug !== slug);

  await commitFiles(
    [{ path: CONTENT_PATH, content: JSON.stringify(content, null, 2) + "\n", encoding: "utf-8" }],
    `admin: remove tour "${slug}"`
  );

  return NextResponse.json({ ok: true });
}
