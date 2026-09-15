import raw from "./site-content.json";
import type { SiteContent } from "./types";

const content = raw as SiteContent;

export const portfolioItems = content.portfolio;
export const bannerVideos = content.bannerVideos;
export const videoEditingVideos = content.videoEditingVideos;
export const aerialVideos = content.aerialVideos;
export const digitalCardItems = content.digitalCards;
export const tourItems = content.tours;

export * from "./types";
