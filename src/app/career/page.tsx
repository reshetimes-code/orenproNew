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
    summary: "פלטפורמה לניהול אירועים והזמנות דיגיטליות, עם ממשקי משתמש וממשק ניהול.",
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
    points: ["ניהול ואישור משתמשים ותהליכי התחברות", "אוטומציות וניטור", "יכולות AI"],
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
  { title: "Frontend", text: "React, JavaScript, UX/UI, רספונסיביות ונגישות." },
  {
    title: "Backend & Data",
    text: "Node.js, Python, REST APIs, מסדי נתונים, הרשאות והזדהות (לפי פרויקטים קיימים).",
  },
  { title: "Cloud & Operations", text: "Docker, Google Cloud Run, פריסה, ניטור ותפעול." },
  { title: "AI & Automation", text: "שילוב Gemini / Vertex AI, workflows ואוטומציות." },
];

const techGroups = [
  { name: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "jQuery / AJAX"] },
  { name: "Backend", items: ["Node.js", "Python", "REST APIs"] },
  { name: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Neon", "Supabase"] },
  { name: "Cloud & Ops", items: ["Docker", "Google Cloud Run", "VPS", "cPanel / WHM"] },
  { name: "AI", items: ["Gemini", "Vertex AI"] },
];

const stats = [
  { value: "2008", label: "בפיתוח ווב ודיגיטל" },
  { value: "5", label: "מוצרים ופרויקטים נבחרים" },
  { value: "710", label: "שעות הכשרה Full Stack" },
  { value: "iOS", label: "אפליקציה ב-App Store" },
];

const anchors = [
  { href: "#projects", label: "פרויקטים" },
  { href: "#capabilities", label: "יכולות" },
  { href: "#process", label: "תהליך עבודה" },
  { href: "#experience", label: "ניסיון" },
  { href: "#education", label: "הכשרה" },
  { href: "#contact", label: "קשר" },
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
const linkedin = "https://www.linkedin.com/in/oren-shpaizer-52047880/";

function SectionTitle({ id, kicker, children }: { id: string; kicker: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <p dir="ltr" className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
        {kicker}
      </p>
      <h2 id={id} className="mt-2 text-3xl font-extrabold sm:text-4xl">
        {children}
      </h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-l from-brand-orange to-brand-cyan" />
    </div>
  );
}

export default function CareerPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden="true" className="career-grid-bg absolute inset-0" />
        <div
          aria-hidden="true"
          className="career-glow pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-brand-orange/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="career-glow pointer-events-none absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-brand-cyan/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p
            dir="ltr"
            className="career-reveal inline-block rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange"
          >
            Oren Shpaizer · Full Stack Developer
          </p>
          <h1
            className="career-reveal mt-6 text-4xl font-extrabold leading-[1.15] sm:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-gradient">מפתח מערכות.</span>
            <br />
            בונה מוצרים.
            <br />
            מביא רעיונות לפרודקשן.
          </h1>
          <p
            dir="ltr"
            className="career-reveal mt-6 text-base text-muted sm:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Full Stack Development · SaaS Platforms · Cloud · AI Integration
          </p>
          <div
            className="career-reveal mt-9 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#projects"
              className="rounded-full bg-brand-orange px-7 py-3.5 font-bold text-black shadow-lg shadow-brand-orange/30 transition hover:-translate-y-0.5 hover:opacity-95"
            >
              לצפייה בפרויקטים
            </a>
            <a
              href={`mailto:${email}`}
              className="rounded-full border border-border bg-surface/60 px-7 py-3.5 font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-orange"
            >
              יצירת קשר
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-surface/60 px-7 py-3.5 font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-cyan"
            >
              LinkedIn
            </a>
          </div>

          <dl
            className="career-reveal mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
            style={{ animationDelay: "0.4s" }}
          >
            {stats.map((st) => (
              <div key={st.label} className="bg-surface/90 px-3 py-5 backdrop-blur">
                <dt dir="ltr" className="text-gradient text-3xl font-extrabold">
                  {st.value}
                </dt>
                <dd className="mt-1 text-xs text-muted sm:text-sm">{st.label}</dd>
              </div>
            ))}
          </dl>

          <nav aria-label="ניווט בעמוד" className="mt-10 flex flex-wrap justify-center gap-2">
            {anchors.map((an) => (
              <a
                key={an.href}
                href={an.href}
                className="rounded-full px-4 py-1.5 text-sm text-muted transition hover:bg-white/5 hover:text-brand-cyan"
              >
                {an.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <section aria-labelledby="about-h">
          <SectionTitle id="about-h" kicker="About">
            מי אני
          </SectionTitle>
          <p className="max-w-3xl text-lg leading-relaxed text-muted">
            אני מפתח Full Stack שבונה ומוביל מוצרים דיגיטליים מרעיון ועד מערכת פעילה: אפיון, חוויית משתמש, React,
            Node.js, Python, מסדי נתונים, REST APIs, אוטומציות ופריסה בענן. לאורך השנים פיתחתי מערכות לעסקים,
            פלטפורמות SaaS ואפליקציות עם ממשקי ניהול ותהליכי משתמש מורכבים. עוסק בפיתוח ווב ודיגיטל משנת 2008.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { t: "Product Engineering", d: "מרעיון ואפיון ועד מוצר עובד" },
              { t: "Full Stack Development", d: "ממשק משתמש, שרת ומסד נתונים" },
              { t: "Production & Cloud", d: "פריסה, תפעול וניטור" },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-border bg-surface p-5 transition hover:border-brand-orange/60"
              >
                <h3 dir="ltr" className="text-lg font-bold">
                  {x.t}
                </h3>
                <p className="mt-1 text-sm text-muted">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-h" className="mt-24 scroll-mt-24">
          <SectionTitle id="projects-h" kicker="Selected Work">
            פרויקטים נבחרים
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-orange/60 hover:shadow-xl hover:shadow-brand-orange/10"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-brand-orange to-brand-cyan opacity-60 transition group-hover:opacity-100"
                />
                <div className="flex items-start justify-between gap-3">
                  <span dir="ltr" className="text-sm font-bold text-muted/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p.url || p.appStoreUrl ? (
                    <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      {p.tag === "Demo" ? "Demo" : "Live"}
                    </span>
                  ) : null}
                </div>
                <h3 dir="ltr" className="mt-3 text-2xl font-extrabold">
                  {p.name}
                </h3>
                <p className="text-sm font-semibold text-brand-orange">{p.tag}</p>
                <p className="mt-3 text-muted">{p.summary}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-muted">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6">
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
                    <a href={p.appStoreUrl} className="text-sm font-semibold text-brand-cyan hover:underline">
                      App Store ←
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="capabilities" aria-labelledby="cap-h" className="mt-24 scroll-mt-24">
          <SectionTitle id="cap-h" kicker="Engineering Capabilities">
            יכולות הנדסיות
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-surface p-6 transition hover:border-brand-cyan/50"
              >
                <h3 dir="ltr" className="text-lg font-bold">
                  {c.title}
                </h3>
                <p className="mt-2 text-muted">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-4 rounded-2xl border border-border bg-surface/60 p-6">
            {techGroups.map((g) => (
              <div key={g.name} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span dir="ltr" className="w-28 shrink-0 text-sm font-semibold text-brand-orange">
                  {g.name}
                </span>
                <ul dir="ltr" className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li key={it} className="rounded-md border border-border bg-background px-3 py-1 text-sm">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="process" aria-labelledby="proc-h" className="mt-24 scroll-mt-24">
          <SectionTitle id="proc-h" kicker="How I Work">
            איך אני עובד
          </SectionTitle>
          <ol className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {process.map((st, i) => (
              <li key={st} className="rounded-2xl border border-border bg-surface p-4 text-center">
                <span
                  dir="ltr"
                  className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-cyan text-sm font-extrabold text-black"
                >
                  {i + 1}
                </span>
                <p className="mt-3 text-sm font-semibold">{st}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="experience" aria-labelledby="exp-h" className="mt-24 scroll-mt-24">
          <SectionTitle id="exp-h" kicker="Experience">
            ניסיון והכשרה
          </SectionTitle>
          <ul className="relative space-y-6 border-r-2 border-border pr-6">
            {timeline.map((t) => (
              <li key={t.years} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -right-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-brand-orange bg-background"
                />
                <p dir="ltr" className="text-sm font-bold text-brand-orange">
                  {t.years}
                </p>
                <p className="mt-1 text-lg text-muted">{t.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="education" aria-labelledby="cert-h" className="mt-24 scroll-mt-24">
          <SectionTitle id="cert-h" kicker="Education & Certification">
            תעודות והסמכות
          </SectionTitle>
          <p className="max-w-3xl text-muted">
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
                className="relative block aspect-[1000/1414] overflow-hidden rounded-xl border border-border bg-white transition hover:border-brand-orange"
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

        <section
          id="contact"
          aria-labelledby="contact-h"
          className="relative mt-24 scroll-mt-24 overflow-hidden rounded-3xl border border-brand-orange/40 bg-surface p-10 text-center"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.18),transparent_65%)]"
          />
          <div className="relative">
            <h2 id="contact-h" className="text-3xl font-extrabold sm:text-4xl">
              בואו נדבר
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-muted">
              מחפש את האתגר הבא בפיתוח מערכות ומוצרים מורכבים.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${email}`}
                className="rounded-full bg-brand-orange px-7 py-3.5 font-bold text-black shadow-lg shadow-brand-orange/30 transition hover:-translate-y-0.5"
              >
                {email}
              </a>
              <a
                href={`tel:${phone.replace(/-/g, "")}`}
                className="rounded-full border border-border px-7 py-3.5 font-semibold transition hover:border-brand-orange"
              >
                {phone}
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-7 py-3.5 font-semibold transition hover:border-brand-cyan"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
