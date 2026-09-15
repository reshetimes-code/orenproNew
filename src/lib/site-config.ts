export const siteConfig = {
  name: "WEBS - אורן שפייזר",
  shortName: "WEBS",
  owner: "אורן שפייזר",
  domain: "orenpro.co.il",
  url: "https://orenpro.co.il",
  description:
    "בניית אתרים ומערכות, כרטיסי ביקור דיגיטליים, סיורים וירטואליים ב-360 מעלות, באנרים ואנימציה, עריכת סרטים וצילומי אוויר ברחפנים. עבודה מקצועית ומהירה, מותאמת אישית לעסק שלך.",
  phoneDisplay: "052-371-5599",
  phoneIntl: "972523715599",
  get telHref() {
    return `tel:0523715599`;
  },
  get whatsappHref() {
    return `https://wa.me/${this.phoneIntl}`;
  },
  whatsappHrefWithText: (text: string) =>
    `https://wa.me/972523715599?text=${encodeURIComponent(text)}`,
  social: {
    facebook: "https://www.facebook.com/go3dV/",
    youtube: "https://www.youtube.com/channel/UCtgIryrUqtXOYDVT7dKB41w/videos",
  },
} as const;

export const navItems = [
  { label: "עמוד הבית", href: "/" },
  { label: "נעים מאוד", href: "/about" },
  { label: "בניית אתרים ומערכות", href: "/web-development" },
  { label: "כרטיסי ביקור דיגיטליים", href: "/digital-business-cards" },
  { label: "סיורים וירטואליים ב-360", href: "/virtual-tours-360" },
  { label: "באנרים ואנימציה", href: "/banners-animation" },
  {
    label: "עריכת סרטים",
    href: "/video-editing",
    children: [{ label: "צילומי אוויר ברחפן", href: "/aerial-photography" }],
  },
] as const;
