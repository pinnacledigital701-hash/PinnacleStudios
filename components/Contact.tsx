'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

const PROJECT_TYPES = [
  'Website Design',
  'Web Development',
  'Full-Stack App',
  'Brand Identity',
  'Redesign',
];

const BUDGET_RANGES = [
  '$1,000–$2,500',
  '$2,500–$5,000',
  '$5,000–$10,000',
  '$10,000+',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Website Design',
    budgetRange: '$2,500–$5,000',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{ message: string; inquiryId?: string } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'pinnacledigital701@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('Please share a few sentences about your project (at least 10 characters).');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setSuccessInfo({
        message: data.message || 'Thank you! Mateo & Omar will review your inquiry within 24 hours.',
        inquiryId: data.inquiryId,
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'Website Design',
        budgetRange: '$2,500–$5,000',
        message: '',
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#dde2ea] dark:bg-[#0a0c10] relative overflow-hidden transition-colors duration-300"
    >
      {/* Ghost Background Watermark (Direct Reference Element) */}
      <div
        className="absolute top-10 right-4 sm:right-12 pointer-events-none select-none -z-0"
        aria-hidden="true"
      >
        <span className="text-[13vw] font-black uppercase tracking-tighter text-white/60 dark:text-white/[0.03] leading-none block">
          LET&apos;S TALK
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-10 sm:mb-14">
          <span className="w-1 h-4 bg-[#ff4d26] inline-block rounded-full" />
          <span className="text-sm font-black uppercase tracking-wider text-neutral-900 dark:text-white">
            START A PROJECT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Studio Invitation */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-[0.95] mb-6">
                Let&apos;s build
                <br />
                something
                <br />
                <span className="font-serif-italic font-normal lowercase tracking-normal text-neutral-800 dark:text-neutral-200 block">
                  unforgettable.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal mb-8 max-w-md">
                Have a new brand to launch, a web platform to build, or a redesign to execute? Tell us about your goals
                and you will hear directly from Mateo and Omar.
              </p>

              {/* Direct Email Card */}
              <div className="p-6 rounded-[2rem] bg-white dark:bg-[#131620] border border-black/5 dark:border-white/10 shadow-sm mb-6">
                <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-1 font-bold">
                  Direct Line
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${directEmail}`}
                    className="text-sm sm:text-base font-mono font-bold text-neutral-900 dark:text-white hover:text-[#ff4d26] transition-colors truncate"
                  >
                    {directEmail}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-300 transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Studio Commitments */}
              <div className="space-y-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d26]" />
                  <span>24-Hour Founder Response Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d26]" />
                  <span>Transparent Pricing &amp; Milestone Scopes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d26]" />
                  <span>No Junior Handoffs. Mateo &amp; Omar Direct.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Editorial Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[2.25rem] bg-white dark:bg-[#131620] p-7 sm:p-10 border border-black/5 dark:border-white/10 shadow-xl">
              {successInfo ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-neutral-950 dark:text-white mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto mb-6">
                    {successInfo.message}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccessInfo(null)}
                    className="text-xs font-bold uppercase tracking-wider text-[#ff4d26] underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Project Type Select */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-2 font-bold">
                      What are you looking to create?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                            formData.projectType === type
                              ? 'bg-black dark:bg-white text-white dark:text-black shadow-xs'
                              : 'bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Tier */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-2 font-bold">
                      Estimated Budget Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGET_RANGES.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetRange: b })}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                            formData.budgetRange === b
                              ? 'bg-[#ff4d26] text-white shadow-xs'
                              : 'bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1.5 font-bold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff4d26] transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1.5 font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff4d26] transition-all"
                      />
                    </div>
                  </div>

                  {/* Company / Website */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1.5 font-bold">
                      Company or Website (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="acme.com"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff4d26] transition-all"
                    />
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1.5 font-bold">
                      Project Goals &amp; Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your vision, timeline, or current challenge..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff4d26] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button (Custom High-End Agency Style) */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-black uppercase text-xs tracking-widest hover:bg-[#ff4d26] dark:hover:bg-[#ff4d26] dark:hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting to Founders...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
