'use client';

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Mail, Copy, Check, Sparkles } from 'lucide-react';

const PROJECT_TYPES = [
  'Website Design',
  'Website Development',
  'Redesign',
  'Brand Identity',
  'E-commerce',
  'Other',
];

const BUDGET_RANGES = [
  '$500–$1,000',
  '$1,000–$2,500',
  '$2,500–$5,000',
  '$5,000+',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Website Design',
    budgetRange: '$1,000–$2,500',
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

    // Client validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
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
        message: data.message,
        inquiryId: data.inquiryId,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'Website Design',
        budgetRange: '$1,000–$2,500',
        message: '',
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#f8f8f6] dark:bg-[#090a0d] relative overflow-hidden">
      {/* Subtle Lime Glow behind contact area */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full pointer-events-none -z-0 blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(circle, #c8ff00 0%, rgba(200, 255, 0, 0.1) 60%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Heading & Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#8bc300] dark:bg-[#c8ff00] animate-ping" />
                Let&apos;s Build Together
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.05] mb-6">
                Have something{' '}
                <span className="font-serif-italic font-normal">worth building?</span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8 font-normal">
                Tell us what you&apos;re working on, what you need and where you want to go. Mateo and Omar review every
                inquiry personally within 24 hours.
              </p>

              {/* Direct Email Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#13151b] border border-black/[0.08] dark:border-white/10 shadow-2xs mb-8">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-1 font-semibold">
                  Prefer direct email?
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${directEmail}`}
                    className="text-sm font-semibold text-neutral-900 dark:text-[#c8ff00] hover:text-black dark:hover:text-[#c8ff00] dark:hover:underline truncate"
                  >
                    {directEmail}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="shrink-0 p-2 rounded-lg bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 text-neutral-700 dark:text-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#c8ff00]"
                    title="Copy email to clipboard"
                    aria-label="Copy studio email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-[#c8ff00]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Studio Availability Stamp */}
            <div className="p-5 rounded-2xl bg-white/70 dark:bg-[#13151b]/70 border border-black/[0.06] dark:border-white/10 text-xs text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2 mb-1 font-semibold text-neutral-900 dark:text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#8bc300] dark:text-[#c8ff00]" />
                Direct Founder Commitment
              </div>
              <p>
                No sales reps. No pitch teams. When you submit this form, Mateo and Omar read your brief and draft your
                technical roadmap.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#13151b] rounded-3xl p-6 sm:p-10 border border-black/[0.08] dark:border-white/10 shadow-lg">
              {successInfo ? (
                <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#c8ff00]/30 border border-[#b8ee44] mx-auto mb-6 flex items-center justify-center text-neutral-950 dark:text-white">
                    <CheckCircle2 className="w-8 h-8 text-[#659100] dark:text-[#c8ff00]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white mb-3">
                    Inquiry Received
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-md mx-auto mb-6 leading-relaxed">
                    {successInfo.message}
                  </p>
                  {successInfo.inquiryId && (
                    <div className="inline-block px-3.5 py-1 rounded-md bg-neutral-100 dark:bg-white/10 font-mono text-xs text-neutral-600 dark:text-neutral-300 mb-8">
                      Reference ID: {successInfo.inquiryId}
                    </div>
                  )}
                  <div>
                    <button
                      type="button"
                      onClick={() => setSuccessInfo(null)}
                      className="px-6 py-2.5 rounded-full bg-black dark:bg-[#c8ff00] text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-[#b8ec00] text-xs font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-xs text-red-700 dark:text-red-300 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexandra Vance"
                        className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/15 bg-neutral-50/50 dark:bg-white/[0.04] text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:bg-white dark:focus:bg-[#1a1d26] focus:outline-none focus:ring-2 focus:ring-[#c8ff00] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/15 bg-neutral-50/50 dark:bg-white/[0.04] text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:bg-white dark:focus:bg-[#1a1d26] focus:outline-none focus:ring-2 focus:ring-[#c8ff00] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                      Company / Organization (Optional)
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Ventures"
                      className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/15 bg-neutral-50/50 dark:bg-white/[0.04] text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:bg-white dark:focus:bg-[#1a1d26] focus:outline-none focus:ring-2 focus:ring-[#c8ff00] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Project Type Radio / Pills */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                      What type of project are you looking to build? <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {PROJECT_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`py-2 px-3 rounded-xl text-xs font-medium text-center transition-all cursor-pointer ${
                            formData.projectType === type
                              ? 'bg-black dark:bg-[#c8ff00] text-white dark:text-black font-semibold shadow-xs'
                              : 'bg-neutral-100 dark:bg-white/[0.06] hover:bg-neutral-200/80 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Range Radio / Pills */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                      Estimated Project Budget Tier <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_RANGES.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetRange: budget })}
                          className={`py-2 px-3 rounded-xl text-xs font-mono font-medium text-center transition-all cursor-pointer ${
                            formData.budgetRange === budget
                              ? 'bg-[#c8ff00] text-black font-semibold ring-1 ring-black/20 dark:ring-[#c8ff00]/60'
                              : 'bg-neutral-100 dark:bg-white/[0.06] hover:bg-neutral-200/80 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Summary Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                      Project Details &amp; Goals <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your vision, target timeline, and any specific technical or design needs..."
                      className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/15 bg-neutral-50/50 dark:bg-white/[0.04] text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:bg-white dark:focus:bg-[#1a1d26] focus:outline-none focus:ring-2 focus:ring-[#c8ff00] focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-contact-button"
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-8 rounded-full bg-black dark:bg-[#c8ff00] text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-[#b8ec00] font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg disabled:opacity-60 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#c8ff00] dark:text-black" />
                        <span>Transmitting Brief to Mateo &amp; Omar...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <ArrowUpRight className="w-4 h-4 text-[#c8ff00] dark:text-black" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-neutral-400 dark:text-neutral-500 font-mono">
                    Protected by confidentiality. We never share or sell project proposals.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
