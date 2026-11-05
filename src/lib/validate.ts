const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ["image/png", "image/jpeg", "image/webp", "image/gif"];

/** Only absolute http(s) URLs – blocks javascript:, data:, etc. */
export function safeHttpUrl(input: string): string | null {
  try {
    const u = new URL(input.trim());
    return u.protocol === "https:" || u.protocol === "http:" ? u.toString() : null;
  } catch {
    return null;
  }
}

/** Returns an error message (Hebrew) or null when the upload is acceptable. */
export function imageError(file: File | null): string | null {
  if (!file || typeof file === "string" || file.size === 0) return "חובה לצרף תמונה";
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) return "סוג קובץ לא נתמך (PNG, JPG, WEBP, GIF בלבד)";
  if (file.size > MAX_IMAGE_BYTES) return "הקובץ גדול מדי (עד 5MB)";
  return null;
}

export async function readJson<T>(request: Request): Promise<T | null> {
  try {
    return (await request.json()) as T;
  } catch {
    return null;
  }
}
