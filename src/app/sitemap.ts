import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = [
  "",
  "/about",
  "/web-development",
  "/portfolio",
  "/digital-business-cards",
  "/virtual-tours-360",
  "/banners-animation",
  "/video-editing",
  "/aerial-photography",
  "/contact",
  "/accessibility",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
