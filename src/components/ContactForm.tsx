"use client";

import { useState } from "react";
import { courses, locations } from "@/data/colleges";
import { site } from "@/data/site";

const field =
  "block h-12 w-full rounded-2xl border border-navy/10 bg-cream px-4 text-sm text-navy outline-none transition placeholder:text-navy/40 hover:border-navy/25 focus:border-orange focus:bg-white focus:ring-4 focus:ring-orange/15";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: "",
    location: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  function buildMessage() {
    return [
      `Hi Vidyakashi, I need help choosing a college.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.course && `Course: ${form.course}`,
      form.location && `Preferred location: ${form.location}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  function sendWhatsApp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(buildMessage())}`,
      "_blank",
      "noopener",
    );
  }

  function sendEmail(e: React.MouseEvent<HTMLButtonElement>) {
    const formEl = e.currentTarget.form;
    if (formEl && !formEl.reportValidity()) return;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "College enquiry from " + form.name,
    )}&body=${encodeURIComponent(buildMessage())}`;
  }

  return (
    <form
      onSubmit={sendWhatsApp}
      className="rounded-3xl bg-white p-6 shadow-[0_10px_40px_-15px_rgba(27,31,94,0.25)] ring-1 ring-navy/5 sm:p-8"
    >
      <h3 className="font-display text-xl font-semibold text-navy">
        Get free guidance
      </h3>
      <p className="mt-1 text-sm text-navy/60">
        Tell us what you want to study and we&rsquo;ll help you shortlist colleges.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-navy">Your name *</span>
          <input required value={form.name} onChange={update("name")} placeholder="Full name" className={`${field} mt-2`} />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-navy">Phone *</span>
          <input required type="tel" inputMode="tel" pattern="[0-9+\s-]{10,15}" value={form.phone} onChange={update("phone")} placeholder="10-digit mobile number" className={`${field} mt-2`} />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-navy">Course</span>
          <div className="relative mt-2">
            <select value={form.course} onChange={update("course")} className={`${field} cursor-pointer appearance-none pr-11`}>
              <option value="">Select a course</option>
              {courses.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <Chevron />
          </div>
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-navy">Preferred location</span>
          <div className="relative mt-2">
            <select value={form.location} onChange={update("location")} className={`${field} cursor-pointer appearance-none pr-11`}>
              <option value="">Anywhere in Karnataka</option>
              {locations.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
            <Chevron />
          </div>
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-navy">Message</span>
          <textarea
            rows={4}
            value={form.message}
            onChange={update("message")}
            placeholder="Marks, budget, questions…"
            className={`${field} mt-2 h-auto resize-none py-3`}
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-deep px-6 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-orange/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange/40"
        >
          <WhatsAppIcon />
          Send on WhatsApp
        </button>
        <button
          type="button"
          onClick={sendEmail}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-navy/15 px-6 py-3.5 font-display text-sm font-semibold text-navy transition hover:border-navy hover:bg-navy hover:text-white"
        >
          Send by email
        </button>
      </div>
    </form>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/60" fill="currentColor" aria-hidden="true">
      <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}
