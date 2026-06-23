"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

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
            <span className="mt-2 w-2.5 h-2.5 rounded-full bg-signal shrink-0 animate-pulse" />
            <p className="text-lg md:text-xl font-light leading-relaxed text-ink/80">
              I&apos;m currently <span className="text-ink font-normal">open to AI/ML engineering roles</span>
              {" "}— full-time or high-impact contracts. I also take on a small number of{" "}
              <span className="text-ink font-normal">select freelance builds</span>.
            </p>
          </div>

          <div className="space-y-px bg-[var(--line)] border border-[var(--line)]">
            <a href="mailto:ayamullahkhan04@gmail.com" className="cursor-grow group flex items-center justify-between bg-paper px-5 py-5 hover:bg-paper-dim transition-colors">
              <span><span className="eyebrow text-ink/45 block mb-1">Email</span><span className="font-light">ayamullahkhan04@gmail.com</span></span>
              <ArrowUpRight className="w-4 h-4 text-ink/40 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
            <Link href="https://linkedin.com/in/ayam04" target="_blank" rel="noopener noreferrer" className="cursor-grow group flex items-center justify-between bg-paper px-5 py-5 hover:bg-paper-dim transition-colors">
              <span><span className="eyebrow text-ink/45 block mb-1">LinkedIn</span><span className="font-light">/in/ayam04</span></span>
              <ArrowUpRight className="w-4 h-4 text-ink/40 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
            <Link href="https://github.com/ayam04" target="_blank" rel="noopener noreferrer" className="cursor-grow group flex items-center justify-between bg-paper px-5 py-5 hover:bg-paper-dim transition-colors">
              <span><span className="eyebrow text-ink/45 block mb-1">GitHub</span><span className="font-light">@ayam04</span></span>
              <ArrowUpRight className="w-4 h-4 text-ink/40 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </div>

          <p className="text-sm text-ink/45">
            Based in New Delhi, IN · Prefer a quick call?{" "}
            <Link href="https://calendly.com/ayamk/30min" target="_blank" rel="noopener noreferrer" className="link-underline text-ink/70">
              Book 30 min
            </Link>
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
    </section>
  );
};

export default EmailSection;
