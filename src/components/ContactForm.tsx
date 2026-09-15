"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

const CONTACT_EMAIL = "orenshp77@gmail.com";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`פנייה חדשה מהאתר - ${name}`);
    const body = encodeURIComponent(`שם: ${name}\nטלפון: ${phone}\n\nהודעה:\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          שם מלא
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-cyan"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium">
          טלפון
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-cyan"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          הודעה
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-cyan"
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-cyan px-6 py-3 font-semibold text-black transition hover:brightness-110"
      >
        <Send size={16} />
        שליחת הודעה
      </button>

      {sent ? (
        <p role="status" className="text-sm text-muted">
          נפתח עבורך חלון מייל עם ההודעה מוכנה לשליחה. אפשר גם לפנות ישירות בוואטסאפ.
        </p>
      ) : null}

      <p className="text-xs text-muted">
        לחיצה על שליחה תפתח את תוכנת המייל שלך עם ההודעה מוכנה. הפרטים שלך משמשים אותנו ליצירת קשר בלבד, בהתאם ל
        <a href="/privacy" className="mx-1 underline">
          מדיניות הפרטיות
        </a>
        שלנו.
      </p>
    </form>
  );
}
