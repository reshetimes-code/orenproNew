import { NextResponse } from "next/server";
import { commitFiles, getFileContent } from "@/lib/github";
import { extractYouTubeId } from "@/lib/slugify";
import type { SiteContent } from "@/content/types";

const CONTENT_PATH = "src/content/site-content.json";
const VALID_CATEGORIES = ["bannerVideos", "videoEditingVideos", "aerialVideos"] as const;
type Category = (typeof VALID_CATEGORIES)[number];

function isValidCategory(value: string): value is Category {
  return (VALID_CATEGORIES as readonly string[]).includes(value);
}

export async function POST(request: Request, { params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!isValidCategory(category)) {
    return NextResponse.json({ error: "קטגוריה לא תקינה" }, { status: 400 });
  }

  const { url, title } = await request.json();
  if (!url?.trim()) {
    return NextResponse.json({ error: "חובה למלא קישור יוטיוב" }, { status: 400 });
  }

  const id = extractYouTubeId(url);

  const raw = await getFileContent(CONTENT_PATH);
  const content: SiteContent = JSON.parse(raw);

  content[category].push(title?.trim() ? { id, title: title.trim() } : { id });

  await commitFiles(
    [{ path: CONTENT_PATH, content: JSON.stringify(content, null, 2) + "\n", encoding: "utf-8" }],
    `admin: add video to ${category} (${id})`
  );

  return NextResponse.json({ ok: true, id });
}

export async function DELETE(request: Request, { params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!isValidCategory(category)) {
    return NextResponse.json({ error: "קטגוריה לא תקינה" }, { status: 400 });
  }

  const { index } = await request.json();

  const raw = await getFileContent(CONTENT_PATH);
  const content: SiteContent = JSON.parse(raw);

  content[category] = content[category].filter((_, i) => i !== index);

  await commitFiles(
    [{ path: CONTENT_PATH, content: JSON.stringify(content, null, 2) + "\n", encoding: "utf-8" }],
    `admin: remove video from ${category}`
  );

  return NextResponse.json({ ok: true });
}
