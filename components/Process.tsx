'use client';

import React, { useState } from 'react';
import { PROCESS_STEPS } from '@/data/siteData';
import { ArrowRight, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#fafaf8] dark:bg-[#0c0d12] border-y border-black/[0.06] dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
              / How We Work
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              A deliberate,{' '}
              <span className="font-serif-italic font-normal">transparent</span> process.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-md">
            Four disciplined phases engineered to eliminate guesswork, accelerate momentum, and guarantee uncompromised
            digital quality.
          </p>
        </div>

        {/* Process Cards with Connecting Visual Line */}
        <div className="relative">
          {/* Subtle Decorative Curved Connecting SVG Line (Visible on Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-12 pointer-events-none -z-0 opacity-40">
            <svg
              className="w-full h-16"
              viewBox="0 0 1000 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M 20 30 Q 250 5 480 30 T 980 30"
                stroke="#b8ee44"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between border ${
                    isActive
                      ? 'bg-white dark:bg-[#161822] shadow-lg border-black/20 dark:border-[#c8ff00]/40 ring-1 ring-black/5 dark:ring-[#c8ff00]/20 -translate-y-1'
                      : 'bg-white/80 dark:bg-[#13151b]/90 hover:bg-white dark:hover:bg-[#161822] border-black/[0.06] dark:border-white/10 hover:border-black/15 dark:hover:border-white/25 shadow-2xs'
                  }`}
                >
                  <div>
                    {/* Top Row: Number & Status Indicator */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-sm transition-colors ${
                          isActive
                            ? 'bg-[#c8ff00] text-black shadow-xs'
                            : 'bg-black/[0.04] dark:bg-white/10 text-neutral-600 dark:text-neutral-300 group-hover:bg-[#c8ff00]/40'
                        }`}
                      >
                        {step.number}
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                        Phase 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-3 italic font-serif">
                      {step.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-2 font-semibold">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-1.5 text-xs text-neutral-700 dark:text-neutral-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8bc300] dark:text-[#c8ff00] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Guarantee Footnote */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-[#13151b] border border-black/[0.06] dark:border-white/10 text-xs text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8bc300] dark:bg-[#c8ff00]" />
            <span className="font-semibold text-neutral-900 dark:text-white">Direct Founder Access:</span>
            <span>You communicate directly with Mateo and Omar throughout all 4 stages.</span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-[#c8ff00] hover:text-black dark:hover:text-[#c8ff00] dark:hover:underline transition-colors shrink-0"
          >
            <span>Discuss your project timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
