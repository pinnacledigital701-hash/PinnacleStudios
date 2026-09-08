'use client';

import React from 'react';
import Image from 'next/image';
import { FOUNDERS } from '@/data/siteData';
import { ArrowUpRight, Check, Palette, Terminal, Sparkles, Quote } from 'lucide-react';

export default function Studio() {
  return (
    <section id="studio" className="py-24 sm:py-32 bg-[#f8f8f6] dark:bg-[#090a0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
            / Leadership &amp; Founders
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.1] mb-6">
            Two creators.{' '}
            <span className="font-serif-italic font-normal">One standard.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
            Pinnacle is intentionally compact. When you partner with us, you work directly with the two specialists
            building your product. No middle managers, no communication lag, no diluted vision.
          </p>
        </div>

        {/* Founders Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {FOUNDERS.map((founder, index) => {
            const isMateo = founder.name === 'Mateo';
            return (
              <div
                key={founder.name}
                className="bg-white dark:bg-[#13151b] rounded-3xl p-6 sm:p-8 border border-black/[0.08] dark:border-white/10 shadow-sm hover:border-black/25 dark:hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container - Clean 3:4 Aspect Ratio, No Distortion */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-900 mb-8 border border-black/5 dark:border-white/10 shadow-xs">
                    <Image
                      src={founder.image}
                      alt={`Portrait of ${founder.name}, ${founder.role}`}
                      fill
                      className="object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />

                    {/* Role Overlay Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-mono tracking-wide flex items-center gap-1.5">
                        {isMateo ? (
                          <Palette className="w-3 h-3 text-[#c8ff00]" />
                        ) : (
                          <Terminal className="w-3 h-3 text-[#c8ff00]" />
                        )}
                        {founder.role}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 z-10">
                      <span className="px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/90 text-neutral-900 dark:text-[#c8ff00] text-[11px] font-mono font-semibold uppercase">
                        Co-Founder
                      </span>
                    </div>
                  </div>

                  {/* Founder Details */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
                        {founder.name}
                      </h3>
                      <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">Pinnacle Digital Studios</span>
                    </div>
                    <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400 font-serif italic mb-4">
                      {founder.title}
                    </p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 font-normal">
                      {founder.bio}
                    </p>

                    {/* Quote */}
                    <div className="p-4 rounded-xl bg-[#fafaf8] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/10 text-xs text-neutral-800 dark:text-neutral-300 italic leading-relaxed mb-6 flex items-start gap-2.5">
                      <Quote className="w-4 h-4 text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5" />
                      <span>&ldquo;{founder.quote}&rdquo;</span>
                    </div>
                  </div>
                </div>

                {/* Skills & Focus Areas */}
                <div className="pt-6 border-t border-black/[0.06] dark:border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-3 font-semibold">
                    Core Specializations &amp; Focus
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {founder.responsibilities.map((resp) => (
                      <span
                        key={resp}
                        className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-white/[0.06] hover:bg-[#c8ff00]/40 dark:hover:bg-[#c8ff00]/30 text-xs font-medium text-neutral-800 dark:text-neutral-200 dark:hover:text-[#c8ff00] transition-colors cursor-default"
                      >
                        {resp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Philosophy Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-[#fafaf8] dark:bg-[#13151b] border border-black/[0.08] dark:border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h4 className="font-bold text-lg text-neutral-900 dark:text-white mb-1">
              Why our dual-founder structure matters to clients:
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              When design decisions are informed by engineering constraints, and engineering decisions respect visual
              finesse, the end product is faster, tighter, and infinitely more refined.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-full bg-black dark:bg-[#c8ff00] text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-[#b8ec00] text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <span>Book a Discovery Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#c8ff00] dark:text-black" />
          </a>
        </div>
      </div>
    </section>
  );
}
