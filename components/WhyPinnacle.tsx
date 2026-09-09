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
      pinnacle: 'Zero handoff loss: visual direction and architecture conceived together',
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
    <section
      id="why-pinnacle"
      className="py-24 sm:py-32 bg-[#dde2ea] dark:bg-[#0a0c10] relative transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1 h-4 bg-[#ff4d26] inline-block rounded-full" />
            <span className="text-sm font-black uppercase tracking-wider text-neutral-900 dark:text-white">
              THE STUDIO ADVANTAGE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-neutral-950 dark:text-white mb-6 leading-[1.05]">
            Why partner with a{' '}
            <span className="font-serif-italic font-normal lowercase tracking-normal text-neutral-800 dark:text-neutral-200">
              two-founder
            </span>{' '}
            studio?
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
            Most digital projects fail in translation between creative dreamers and engineering builders. By pairing
            Mateo’s design direction with Omar’s technical systems under one standard, our clients skip the agency
            bloat and get uncompromising results.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="bg-white dark:bg-[#131620] rounded-[2.25rem] p-6 sm:p-10 border border-black/5 dark:border-white/10 shadow-sm mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-6 border-b border-black/5 dark:border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold">
            <div className="md:col-span-4">Dimension</div>
            <div className="md:col-span-4 text-neutral-500 dark:text-neutral-400">Traditional Agency</div>
            <div className="md:col-span-4 text-neutral-950 dark:text-white font-black">
              Pinnacle Digital Studios
            </div>
          </div>

          <div className="divide-y divide-black/5 dark:divide-white/5">
            {comparisons.map((item) => (
              <div
                key={item.metric}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-5 items-center text-sm"
              >
                <div className="md:col-span-4 font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-100 text-xs">
                  {item.metric}
                </div>
                <div className="md:col-span-4 text-neutral-500 dark:text-neutral-400 text-xs flex items-center gap-2">
                  <X className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>{item.traditional}</span>
                </div>
                <div className="md:col-span-4 text-neutral-950 dark:text-white font-medium text-xs flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ff4d26] shrink-0" />
                  <span>{item.pinnacle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
