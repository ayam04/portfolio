"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { ArrowUpRight, Calendar } from "lucide-react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      const ui = {
        // Duration/medium are stated in the section header instead, so the
        // widget's own meta panel is redundant dead space.
        hideEventTypeDetails: true,
        layout: "month_view",
        theme: "light",
        // Repaint the embed in the site's paper/ink palette. Alpha borders are
        // pre-blended over --paper since these land inside a cross-origin frame.
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#2540ff",
            "cal-brand-emphasis": "#1c33d6",
            "cal-brand-text": "#ffffff",
            "cal-bg": "#f3eee3",
            "cal-bg-emphasis": "#e2dbcb",
            "cal-bg-subtle": "#e8e1d3",
            "cal-bg-muted": "#ece6da",
            "cal-bg-inverted": "#111014",
            "cal-text": "#111014",
            "cal-text-emphasis": "#111014",
            "cal-text-subtle": "#666462",
            "cal-text-muted": "#8d8a86",
            "cal-text-inverted": "#f3eee3",
            "cal-border": "#d3cfc6",
            "cal-border-emphasis": "#b4b0a9",
            "cal-border-subtle": "#dcd8ce",
            "cal-border-muted": "#e3ded4",
            "cal-border-booker": "#d3cfc6",
          },
        },
      };
      // The embed drops a ui config that lands before its iframe is ready, and
      // this call races that load. Re-apply once the booker reports ready.
      cal("ui", ui);
      cal("on", { action: "linkReady", callback: () => cal("ui", ui) });
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        setEmailSubmitted(true);
        e.target.reset();
      } else {
        console.error("Failed to send message:", result);
        setError("Failed to send message. Please try again or email me directly.");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to send. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-ink/25 focus:border-ink text-ink text-lg font-light py-4 px-0 focus:outline-none focus:ring-0 transition-colors placeholder-ink/40";

  return (
    <section id="contact" className="px-5 md:px-10 py-24 md:py-36">
      {/* Header */}
      <div className="mb-16 md:mb-24">
        <span className="eyebrow text-ink/45 block mb-8">05 — Contact</span>
        <h2 className="display-hero">
          Let&apos;s<span className="font-serif-italic normal-case tracking-normal text-signal"> talk.</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left — availability + links */}
        <div className="lg:col-span-5 space-y-10">
          <div className="flex items-start gap-3">
            <span className="mt-2 w-2.5 h-2.5 rounded-full bg-signal shrink-0" />
            <p className="text-lg md:text-xl font-light leading-relaxed text-ink/80">
              I&apos;m currently <span className="text-ink font-normal">open to full-stack and AI engineering roles</span>
              {" "}— full-time or high-impact contracts. I also take on a small number of{" "}
              <span className="text-ink font-normal">select freelance builds</span>.
            </p>
          </div>

          <div className="space-y-px bg-[var(--line)] border border-[var(--line)]">
            <a href="mailto:ayamullahkhan04@gmail.com" className="cursor-grow group flex items-center justify-between bg-paper px-5 py-5 hover:bg-paper-dim transition-colors">
              <span><span className="eyebrow text-ink/45 block mb-1">Email</span><span className="font-light">ayamullahkhan04@gmail.com</span></span>
              <ArrowUpRight className="w-4 h-4 text-ink/40 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform]" />
            </a>
            <Link href="https://linkedin.com/in/ayam04" target="_blank" rel="noopener noreferrer" className="cursor-grow group flex items-center justify-between bg-paper px-5 py-5 hover:bg-paper-dim transition-colors">
              <span><span className="eyebrow text-ink/45 block mb-1">LinkedIn</span><span className="font-light">/in/ayam04</span></span>
              <ArrowUpRight className="w-4 h-4 text-ink/40 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform]" />
            </Link>
            <Link href="https://github.com/ayam04" target="_blank" rel="noopener noreferrer" className="cursor-grow group flex items-center justify-between bg-paper px-5 py-5 hover:bg-paper-dim transition-colors">
              <span><span className="eyebrow text-ink/45 block mb-1">GitHub</span><span className="font-light">@ayam04</span></span>
              <ArrowUpRight className="w-4 h-4 text-ink/40 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform]" />
            </Link>
          </div>

          <p className="text-sm text-ink/45">
            Based in New Delhi, IN · IST (UTC+5:30)
          </p>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-7">
          {emailSubmitted ? (
            <div className="border border-ink/15 p-12 text-center">
              <div className="w-1 h-16 bg-ink mx-auto mb-6" />
              <h3 className="font-display text-3xl tracking-tight mb-3">Message sent</h3>
              <p className="text-ink/60 font-light">Thanks for reaching out — I&apos;ll reply within 24 hours.</p>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              {error && (
                <div className="p-4 border border-red-300 bg-red-50 text-red-700 text-sm">{error}</div>
              )}
              <input name="email" type="email" id="email" required placeholder="Your email address" className={inputClass} />
              <input name="subject" type="text" id="subject" required placeholder="Subject" className={inputClass} />
              <textarea name="message" id="message" required rows={4} placeholder="Tell me about the role or project…" className={`${inputClass} resize-none`} />
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-grow group inline-flex items-center gap-3 rounded-full bg-signal text-paper-pure px-8 py-4 text-sm uppercase tracking-[0.16em] hover:bg-signal-deep transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending…" : "Send message"}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Inline booking calendar */}
      <div className="mt-24 md:mt-32 border-t border-[var(--line)] pt-10 md:pt-12">
        {/* The booker has a fixed natural width, so the header shares its column
            to keep the block on the page's left rail instead of floating. */}
        <div className="max-w-[820px]">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 mb-10 md:mb-12">
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-ink/45 shrink-0" />
              <span className="eyebrow text-ink/45">Book a call</span>
            </div>
            <p className="text-sm font-light text-ink/55">
              30 minutes · Cal Video · your local timezone
            </p>
          </div>
          <Cal
            namespace="30min"
            calLink="ayam04/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
          />
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
