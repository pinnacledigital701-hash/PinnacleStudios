'use client';

import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

export default function WhyPinnacle() {
  const comparisons = [
    {
      metric: 'Account Management',
      traditional: 'Layer of junior account reps and project managers',
      pinnacle: 'Direct access to founders Mateo & Omar at every step',
    },
    {
      metric: 'Design to Code Handoff',
      traditional: 'Figma files thrown over a wall to separate engineering queues',
      pinnacle: 'Zero handoff loss: visual direction and architecture are conceived together',
    },
    {
      metric: 'Turnaround & Velocity',
      traditional: 'Endless status meetings, review committees, and bureaucratic delay',
      pinnacle: 'Agile sprints with high-fidelity interactive milestones',
    },
    {
      metric: 'Code Longevity',
      traditional: 'Messy outsourced code that breaks after launch',
      pinnacle: 'Clean, type-safe Next.js code built to scale for years',
    },
  ];

  return (
    <section id="why-pinnacle" className="py-24 sm:py-32 bg-[#f8f8f6] dark:bg-[#090a0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
            / The Studio Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white mb-6">
            Why partner with a{' '}
            <span className="font-serif-italic font-normal">two-founder</span> studio?
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
            Most digital projects fail in the translation between creative dreamers and code builders. By pairing Mateo’s
            design direction with Omar’s technical systems under one standard, our clients skip the agency bloat and get
            uncompromising results.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="bg-white dark:bg-[#13151b] rounded-3xl p-6 sm:p-10 border border-black/[0.08] dark:border-white/10 shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-6 border-b border-black/[0.08] dark:border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold">
            <div className="md:col-span-4">Dimension</div>
            <div className="md:col-span-4 text-neutral-500 dark:text-neutral-400">Traditional Agency</div>
            <div className="md:col-span-4 text-neutral-900 dark:text-[#c8ff00] font-bold">Pinnacle Digital Studios</div>
          </div>

          <div className="divide-y divide-black/[0.06] dark:divide-white/10">
            {comparisons.map((item) => (
              <div
                key={item.metric}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 text-sm items-start"
              >
                <div className="md:col-span-4 font-bold text-neutral-900 dark:text-white">
                  {item.metric}
                </div>
                <div className="md:col-span-4 text-neutral-500 dark:text-neutral-400 flex items-start gap-2">
                  <X className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>
                <div className="md:col-span-4 text-neutral-950 dark:text-white font-medium flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#8bc300] dark:text-[#c8ff00] shrink-0 mt-0.5" />
                  <span>{item.pinnacle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-[#c8ff00]/20 dark:bg-[#c8ff00]/10 border border-[#b8ee44]/50 dark:border-[#c8ff00]/30">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#8bc300] dark:bg-[#c8ff00] animate-pulse" />
            <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Only 2 new client engagements accepted per quarter to protect craft focus.
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-[#c8ff00] hover:text-black dark:hover:text-[#c8ff00] dark:hover:underline uppercase tracking-wider underline underline-offset-4"
          >
            <span>Inquire for current availability</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
