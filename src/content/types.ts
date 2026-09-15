export type PortfolioItem = {
  slug: string;
  name: string;
  url: string;
  image: string;
  tag?: string;
  tagColor?: string;
};

export type VideoItem = {
  id: string;
  title?: string;
};

export type DigitalCardItem = {
  slug: string;
  name: string;
  url: string;
  image: string;
};

export type TourItem = {
  slug: string;
  name: string;
  embedUrl: string;
};

export type SiteContent = {
  portfolio: PortfolioItem[];
  bannerVideos: VideoItem[];
  videoEditingVideos: VideoItem[];
  aerialVideos: VideoItem[];
  digitalCards: DigitalCardItem[];
  tours: TourItem[];
};
