import { NextResponse } from "next/server";
import { commitFiles, getFileContent } from "@/lib/github";
import { extFromMime, slugify } from "@/lib/slugify";
import type { SiteContent } from "@/content/types";

const CONTENT_PATH = "src/content/site-content.json";

export async function POST(request: Request) {
  const form = await request.formData();
  const name = String(form.get("name") || "").trim();
  const url = String(form.get("url") || "").trim();
  const tag = String(form.get("tag") || "").trim();
  const tagColor = String(form.get("tagColor") || "").trim();
  const file = form.get("logo") as File | null;

  if (!name || !url || !file) {
    return NextResponse.json({ error: "חובה למלא שם, קישור ותמונה" }, { status: 400 });
  }

  const raw = await getFileContent(CONTENT_PATH);
  const content: SiteContent = JSON.parse(raw);

  const slug = slugify(name);
  const ext = extFromMime(file.type);
  const imagePath = `public/images/portfolio/${slug}.${ext}`;
  const arrayBuffer = await file.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString("base64");

  content.portfolio.push({
    slug,
    name,
    url,
    image: `/images/portfolio/${slug}.${ext}`,
    ...(tag ? { tag } : {}),
    ...(tagColor ? { tagColor } : {}),
  });

  await commitFiles(
    [
      { path: imagePath, content: base64, encoding: "base64" },
      { path: CONTENT_PATH, content: JSON.stringify(content, null, 2) + "\n", encoding: "utf-8" },
    ],
    `admin: add portfolio project "${name}"`
  );

  return NextResponse.json({ ok: true, slug });
}

export async function DELETE(request: Request) {
  const { slug } = await request.json();
  const raw = await getFileContent(CONTENT_PATH);
  const content: SiteContent = JSON.parse(raw);

  content.portfolio = content.portfolio.filter((p) => p.slug !== slug);

  await commitFiles(
    [{ path: CONTENT_PATH, content: JSON.stringify(content, null, 2) + "\n", encoding: "utf-8" }],
    `admin: remove portfolio project "${slug}"`
  );

  return NextResponse.json({ ok: true });
}
