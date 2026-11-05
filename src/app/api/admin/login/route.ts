import { NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
  createSessionToken,
  passwordMatches,
} from "@/lib/admin-auth";

// Simple in-memory rate limit: 5 failed attempts / 15 minutes per IP (per server instance).
const WINDOW_MS = 15 * 60 * 1000;
const MAX_FAILS = 5;
const fails = new Map<string, { count: number; first: number }>();

function clientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  const now = Date.now();
  const entry = fails.get(ip);
  if (entry && now - entry.first > WINDOW_MS) fails.delete(ip);
  const current = fails.get(ip);
  if (current && current.count >= MAX_FAILS) {
    return NextResponse.json({ error: "יותר מדי ניסיונות. נסו שוב בעוד כמה דקות." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const password = typeof body?.password === "string" ? body.password : "";
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected || !(await passwordMatches(password, expected))) {
    fails.set(ip, { count: (current?.count ?? 0) + 1, first: current?.first ?? now });
    return NextResponse.json({ error: "סיסמה שגויה" }, { status: 401 });
  }

  fails.delete(ip);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, await createSessionToken(expected), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
  return response;
}
