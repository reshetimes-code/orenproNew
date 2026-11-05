import { NextResponse } from "next/server";
import { commitFiles, getFileContent } from "@/lib/github";
import { extFromMime, slugify } from "@/lib/slugify";
import { imageError, readJson, safeHttpUrl } from "@/lib/validate";
import type { SiteContent } from "@/content/types";

const CONTENT_PATH = "src/content/site-content.json";

export async function POST(request: Request) {
  const form = await request.formData();
  const name = String(form.get("name") || "").trim();
  const url = String(form.get("url") || "").trim();
  const file = form.get("image") as File | null;

  if (!name || !url || !file) {
    return NextResponse.json({ error: "חובה למלא שם, קישור ותמונה" }, { status: 400 });
  }
  const safeUrl = safeHttpUrl(url);
  if (!safeUrl) return NextResponse.json({ error: "קישור לא תקין" }, { status: 400 });
  const fileErr = imageError(file);
  if (fileErr) return NextResponse.json({ error: fileErr }, { status: 400 });

  const raw = await getFileContent(CONTENT_PATH);
  const content: SiteContent = JSON.parse(raw);

  const slug = slugify(name);
  const ext = extFromMime(file.type);
  const imagePath = `public/images/digital-card/${slug}.${ext}`;
  const base64 = Buffer.from(await file.arrayBuffer()).toString("base64");

  content.digitalCards.push({ slug, name, url: safeUrl, image: `/images/digital-card/${slug}.${ext}` });

  await commitFiles(
    [
      { path: imagePath, content: base64, encoding: "base64" },
      { path: CONTENT_PATH, content: JSON.stringify(content, null, 2) + "\n", encoding: "utf-8" },
    ],
    `admin: add digital card "${name}"`
  );

  return NextResponse.json({ ok: true, slug });
}

export async function DELETE(request: Request) {
  const body = await readJson<{ slug?: string }>(request);
  const slug = body?.slug;
  if (!slug) return NextResponse.json({ error: "בקשה לא תקינה" }, { status: 400 });
  const raw = await getFileContent(CONTENT_PATH);
  const content: SiteContent = JSON.parse(raw);

  content.digitalCards = content.digitalCards.filter((c) => c.slug !== slug);

  await commitFiles(
    [{ path: CONTENT_PATH, content: JSON.stringify(content, null, 2) + "\n", encoding: "utf-8" }],
    `admin: remove digital card "${slug}"`
  );

  return NextResponse.json({ ok: true });
}
