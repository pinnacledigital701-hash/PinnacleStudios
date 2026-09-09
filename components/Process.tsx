'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/data/siteData';

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 sm:py-32 bg-[#dde2ea] dark:bg-[#0a0c10] relative overflow-hidden transition-colors duration-300"
    >
      {/* Ghost Background Watermark (Direct Reference Element) */}
      <div
        className="absolute top-8 left-4 sm:left-12 pointer-events-none select-none -z-0"
        aria-hidden="true"
      >
        <span className="text-[14vw] font-black uppercase tracking-tighter text-white/60 dark:text-white/[0.03] leading-none block">
          PROCESS
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Accent Bar (Direct Reference: "| PROCESS") */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1 h-4 bg-[#ff4d26] inline-block rounded-full" />
            <span className="text-sm font-black uppercase tracking-wider text-neutral-900 dark:text-white">
              DELIBERATE PROCESS
            </span>
          </div>

          <span className="text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400">
            01 — 04 Milestones
          </span>
        </div>

        {/* Editorial 4-Stage Horizontal Grid with Hairline Dividers (No Generic Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-black/10 dark:divide-white/10">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className={`flex flex-col justify-between ${
                idx === 0 ? 'lg:pr-8' : idx === 3 ? 'lg:pl-8' : 'lg:px-8'
              }`}
            >
              <div>
                {/* Large Display Number */}
                <span className="text-5xl sm:text-6xl font-black tracking-tight text-neutral-300 dark:text-neutral-700 block mb-4">
                  {step.number}
                </span>

                {/* Step Title */}
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950 dark:text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs font-semibold text-[#ff4d26] uppercase tracking-wider mb-4">
                  {step.tagline}
                </p>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-4 border-t border-black/5 dark:border-white/5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                  Output:
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                  {step.deliverables.map((deliv) => (
                    <li key={deliv} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#ff4d26]" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
