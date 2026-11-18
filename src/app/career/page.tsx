import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Oren Shpaizer | Full Stack Developer — Projects & Experience",
  description:
    "אורן שפייזר - מפתח Full Stack ומפתח מוצרי SaaS. React, Node.js, Python, מסדי נתונים, REST APIs, אוטומציות ופריסה בענן. פרויקטים חיים וניסיון מקצועי.",
  alternates: { canonical: "/career" },
};

type Project = {
  name: string;
  tag: string;
  url?: string;
  summary: string;
  points: string[];
  appStoreUrl?: string;
};

const projects: Project[] = [
  {
    name: "FIESTA",
    tag: "מערכת SaaS לענף האירועים",
    url: "https://fiestaa.co.il/",
    summary:
      "פלטפורמה לניהול אירועים והזמנות דיגיטליות, עם ממשקי משתמש וממשק ניהול.",
    points: [
      "הזמנות דיגיטליות ואישורי הגעה",
      "מיני-סייט ממותג, לידים ומעקב צפיות",
      "יומן אירועים, הסכמים וחתימה דיגיטלית",
      "אוטומציות הודעות",
    ],
  },
  {
    name: "STANNEL CLUB",
    tag: "פלטפורמה ואפליקציה",
    url: "https://stannelclub.co.il/",
    summary: "מוצר הכולל אתר, מערכת ואפליקציה הזמינה להורדה ב-App Store.",
    points: ["אתר ומערכת ניהול", "אפליקציה ל-iOS"],
    appStoreUrl: "/stannel-app",
  },
  {
    name: "SONGO",
    tag: "Web App לאירועים",
    url: "https://www.songo.co.il/",
    summary: "אפליקציית ווב Mobile-first לחוויית אירוע אינטראקטיבית.",
    points: [
      "בקשות שירים מהאורחים ל-DJ",
      "הרשמת משתמשים",
      "עמוד אירוע עם ספירה לאחור, ניווט ב-Waze והוספה ליומן",
    ],
  },
  {
    name: "STANNEL",
    tag: "מערכת Web / Cloud",
    summary: "מערכת עם ממשק ניהול ו-API נפרד, שרצה על Google Cloud Run.",
    points: [
      "ניהול ואישור משתמשים ותהליכי התחברות",
      "אוטומציות וניטור",
      "יכולות AI",
    ],
  },
  {
    name: "AIRO",
    tag: "Demo",
    url: "https://airo-demo.vercel.app/",
    summary: "דמו Web עם ממשק מותאם ומסכי התחברות, פרוס ב-Vercel.",
    points: ["Frontend", "מסכי התחברות"],
  },
];

const capabilities = [
  {
    title: "Frontend",
    text: "React, JavaScript, HTML5, CSS3, UX/UI, רספונסיביות ונגישות.",
  },
  {
    title: "Backend & Data",
    text: "Node.js, Python, REST APIs, PostgreSQL, MySQL, MongoDB, Neon, Supabase.",
  },
  {
    title: "Cloud & Operations",
    text: "Docker, Google Cloud Run, VPS, cPanel/WHM, פריסה ותפעול.",
  },
  {
    title: "AI & Automation",
    text: "שילוב Gemini / Vertex AI, workflows ואוטומציות.",
  },
];

const process = ["אפיון", "ארכיטקטורה", "פיתוח", "בדיקות", "פריסה", "ניטור ושיפור"];

const timeline = [
  { years: "2020–היום", text: "עצמאי, מייסד ומפתח מוצרי SaaS" },
  { years: "2016–היום", text: "פיתוח ווב עבור רשת טיימס, מערכת עיתונות דיגיטלית" },
  { years: "2008–היום", text: "פיתוח ועיצוב אתרים ומערכות ללקוחות עסקיים" },
  {
    years: "2025–2026",
    text: "הכשרה: Full Stack Web Development / Python Specialization, ג'ון ברייס, 710 שעות",
  },
];

const email = "orenshp77@gmail.com";
const phone = "052-371-5599";

export default function CareerPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.15),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="text-sm font-semibold tracking-wide text-brand-orange">
            אורן שפייזר · Oren Shpaizer
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            <span className="text-gradient">מפתח מערכות. בונה מוצרים. מביא רעיונות לפרודקשן.</span>
          </h1>
          <p dir="ltr" className="mt-5 text-base text-muted sm:text-lg">
            Full Stack Development · SaaS Platforms · Cloud · AI Integration
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-brand-orange px-6 py-3 font-semibold text-black transition hover:opacity-90"
            >
              לצפייה בפרויקטים
            </a>
            <a
              href={`mailto:${email}`}
              className="rounded-full border border-border px-6 py-3 font-semibold transition hover:border-brand-orange"
            >
              יצירת קשר
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <section aria-labelledby="about-h">
          <h2 id="about-h" className="text-2xl font-bold sm:text-3xl">
            מי אני
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            אני מפתח Full Stack שבונה ומוביל מוצרים דיגיטליים מרעיון ועד מערכת פעילה: אפיון, חוויית משתמש, React,
            Node.js, Python, מסדי נתונים, REST APIs, אוטומציות ופריסה בענן. לאורך השנים פיתחתי מערכות לעסקים,
            פלטפורמות SaaS ואפליקציות עם ממשקי ניהול ותהליכי משתמש מורכבים. עוסק בפיתוח ווב ודיגיטל משנת 2008.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {["Product Engineering", "Full Stack Development", "Production & Cloud"].map((t) => (
              <div key={t} dir="ltr" className="rounded-xl border border-border bg-surface p-4 text-center font-semibold">
                {t}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-h" className="mt-20 scroll-mt-24">
          <h2 id="projects-h" className="text-2xl font-bold sm:text-3xl">
            פרויקטים נבחרים
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.name} className="flex flex-col rounded-2xl border border-border bg-surface p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 dir="ltr" className="text-xl font-bold">
                    {p.name}
                  </h3>
                  <span className="text-sm text-brand-orange">{p.tag}</span>
                </div>
                <p className="mt-3 text-muted">{p.summary}</p>
                <ul className="mt-4 list-disc space-y-1 pr-5 text-sm text-muted">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-brand-cyan hover:underline"
                    >
                      {p.tag === "Demo" ? "לדמו" : "לאתר"} ←
                    </a>
                  ) : null}
                  {p.appStoreUrl ? (
                    <a
                      href={p.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-brand-cyan hover:underline"
                    >
                      App Store ←
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="cap-h" className="mt-20">
          <h2 id="cap-h" className="text-2xl font-bold sm:text-3xl">
            Engineering capabilities
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-surface p-5">
                <h3 dir="ltr" className="text-lg font-bold">
                  {c.title}
                </h3>
                <p className="mt-2 text-muted">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="proc-h" className="mt-20">
          <h2 id="proc-h" className="text-2xl font-bold sm:text-3xl">
            איך אני עובד
          </h2>
          <ol className="mt-8 flex flex-wrap gap-3">
            {process.map((s, i) => (
              <li key={s} className="rounded-full border border-border bg-surface px-5 py-2 text-sm font-semibold">
                <span className="text-brand-orange">{i + 1}.</span> {s}
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="exp-h" className="mt-20">
          <h2 id="exp-h" className="text-2xl font-bold sm:text-3xl">
            ניסיון והשכלה
          </h2>
          <ul className="mt-8 space-y-4">
            {timeline.map((t) => (
              <li key={t.years} className="flex flex-col gap-1 border-r-2 border-brand-orange pr-4 sm:flex-row sm:gap-6">
                <span className="w-32 shrink-0 font-semibold text-brand-orange">{t.years}</span>
                <span className="text-muted">{t.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="cert-h" className="mt-20">
          <h2 id="cert-h" className="text-2xl font-bold sm:text-3xl">
            תעודות והסמכות
          </h2>
          <p className="mt-4 max-w-3xl text-muted">
            Full Stack Web Development - Python Specialization, ג&apos;ון ברייס הדרכה. 710 שעות לימוד, 18.05.2025
            עד 22.03.2026. במהלך הקורס נבחנתי בפרויקטים ב-JavaScript, jQuery/AJAX, React, Node.js, MySQL, MongoDB
            ו-Python, בציונים 80–100.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { n: 1, alt: "תעודת סיום קורס Python Specialization - Full Stack Web Development" },
              { n: 2, alt: "אישור סיום לימודים וגיליון ציונים - ג'ון ברייס" },
            ].map(({ n, alt }) => (
              <a
                key={n}
                href={`/images/about/cert-${n}.jpg`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[1000/1414] overflow-hidden rounded-xl border border-border bg-white"
              >
                <Image
                  src={`/images/about/cert-${n}.jpg`}
                  alt={alt}
                  fill
                  sizes="(min-width: 768px) 360px, 100vw"
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="contact-h" className="mt-20 rounded-2xl border border-border bg-surface p-8 text-center">
          <h2 id="contact-h" className="text-2xl font-bold sm:text-3xl">
            יצירת קשר
          </h2>
          <p className="mt-3 text-muted">מחפש את האתגר הבא בפיתוח מערכות ומוצרים מורכבים.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${email}`}
              className="rounded-full bg-brand-orange px-6 py-3 font-semibold text-black transition hover:opacity-90"
            >
              {email}
            </a>
            <a
              href={`tel:${phone.replace(/-/g, "")}`}
              className="rounded-full border border-border px-6 py-3 font-semibold transition hover:border-brand-orange"
            >
              {phone}
            </a>
            <a
              href="https://www.linkedin.com/in/oren-shpaizer-52047880/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 font-semibold transition hover:border-brand-orange"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
