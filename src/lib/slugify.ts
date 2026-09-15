export function slugify(input: string): string {
  const base = input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9֐-׿]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base || `item-${Date.now()}`;
}

export function extFromMime(mime: string): string {
  if (mime.includes("png")) return "png";
  if (mime.includes("webp")) return "webp";
  if (mime.includes("gif")) return "gif";
  return "jpg";
}

export function extractYouTubeId(input: string): string {
  const trimmed = input.trim();
  const patterns = [
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{6,})/,
  ];
  for (const re of patterns) {
    const match = trimmed.match(re);
    if (match) return match[1];
  }
  return trimmed;
}
