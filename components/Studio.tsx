'use client';

import React from 'react';
import Image from 'next/image';
import { FOUNDERS } from '@/data/siteData';
import { Quote } from 'lucide-react';

export default function Studio() {
  const mateo = FOUNDERS.find((f) => f.name === 'Mateo') || FOUNDERS[0];
  const omar = FOUNDERS.find((f) => f.name === 'Omar') || FOUNDERS[1];

  return (
    <section
      id="studio"
      className="py-24 sm:py-32 bg-[#dde2ea] dark:bg-[#0a0c10] relative overflow-hidden transition-colors duration-300"
    >
      {/* Ghost Background Watermark (Direct Reference Element) */}
      <div
        className="absolute top-8 left-4 sm:left-12 pointer-events-none select-none -z-0"
        aria-hidden="true"
      >
        <span className="text-[14vw] font-black uppercase tracking-tighter text-white/60 dark:text-white/[0.03] leading-none block">
          STUDIO
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Centered Section Header (Direct Reference Inspired: "ABOUT ME" / Capsule) */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 dark:bg-white/10 border border-black/5 dark:border-white/10 text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200 mb-6">
            ABOUT THE STUDIO
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-[1.05]">
            Two founders crafting high-impact experiences through wireframing, prototyping, art direction &amp; code.
          </h2>
        </div>

        {/* Central Portrait & Metric Constellation (Direct Reference Top-Right Layout) */}
        <div className="relative max-w-3xl mx-auto mb-20 sm:mb-28">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            {/* Left Metrics */}
            <div className="flex sm:flex-col justify-around w-full sm:w-auto sm:space-y-8 text-center sm:text-right">
              <div>
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-950 dark:text-white block">
                  02
                </span>
                <span className="text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400 block mt-1">
                  Dedicated Founders
                </span>
              </div>
              <div>
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-950 dark:text-white block">
                  100%
                </span>
                <span className="text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400 block mt-1">
                  Direct In-House Craft
                </span>
              </div>
            </div>

            {/* Glowing Circular Double Portrait Portal */}
            <div className="relative shrink-0 flex items-center justify-center">
              {/* Vibrant Solar Glow Ring */}
              <div
                className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-[#ff381e] via-[#ff6a00] to-[#ffa800] p-1.5 shadow-2xl shadow-orange-500/30 flex items-center justify-center"
              >
                {/* Duo Portrait Frame (Original Photos with CSS Positioning) */}
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-950 flex relative">
                  {/* Mateo */}
                  <div className="relative w-1/2 h-full overflow-hidden border-r border-white/20">
                    <Image
                      src={mateo.image}
                      alt="Mateo portrait"
                      fill
                      className="object-cover object-[55%_15%]"
                      referrerPolicy="no-referrer"
                      sizes="150px"
                    />
                  </div>
                  {/* Omar */}
                  <div className="relative w-1/2 h-full overflow-hidden">
                    <Image
                      src={omar.image}
                      alt="Omar portrait"
                      fill
                      className="object-cover object-[50%_15%]"
                      referrerPolicy="no-referrer"
                      sizes="150px"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Badge (Direct Reference: Circular "DOWNLOAD CV ↓" / Badge) */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
                <div className="w-14 h-14 rounded-full bg-white dark:bg-[#131620] border-2 border-black/10 dark:border-white/20 shadow-lg flex flex-col items-center justify-center text-center p-1">
                  <span className="text-[8px] font-black uppercase tracking-tight text-neutral-900 dark:text-white leading-none">
                    TANDEM
                    <br />
                    DUO
                  </span>
                  <span className="text-[10px] text-[#ff4d26]">↓</span>
                </div>
              </div>
            </div>

            {/* Right Metrics */}
            <div className="flex sm:flex-col justify-around w-full sm:w-auto sm:space-y-8 text-center sm:text-left">
              <div>
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-950 dark:text-white block">
                  0
                </span>
                <span className="text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400 block mt-1">
                  Agency Middlemen
                </span>
              </div>
              <div>
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-950 dark:text-white block">
                  10+
                </span>
                <span className="text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400 block mt-1">
                  Years Combined Craft
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Founder Profiles: Mateo & Omar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Mateo Profile Card */}
          <div className="rounded-[2.25rem] bg-white dark:bg-[#131620] p-8 sm:p-10 border border-black/5 dark:border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              {/* Photo & Role Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-neutral-900 shrink-0 border border-black/5 dark:border-white/10">
                  <Image
                    src={mateo.image}
                    alt="Mateo"
                    fill
                    className="object-cover object-[55%_15%]"
                    referrerPolicy="no-referrer"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
                    Mateo
                  </h3>
                  <span className="text-xs font-mono font-bold uppercase text-[#ff4d26] block">
                    Creative &amp; Frontend Lead
                  </span>
                </div>
              </div>

              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 font-normal">
                {mateo.bio}
              </p>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 mb-6 flex items-start gap-2.5">
                <Quote className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-800 dark:text-neutral-200 italic leading-relaxed">
                  &ldquo;{mateo.quote}&rdquo;
                </p>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-2 font-bold">
                Disciplines
              </span>
              <div className="flex flex-wrap gap-1.5">
                {mateo.responsibilities.slice(0, 5).map((r) => (
                  <span
                    key={r}
                    className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-white/[0.06] text-[11px] font-medium text-neutral-800 dark:text-neutral-200"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Omar Profile Card */}
          <div className="rounded-[2.25rem] bg-white dark:bg-[#131620] p-8 sm:p-10 border border-black/5 dark:border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              {/* Photo & Role Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-neutral-900 shrink-0 border border-black/5 dark:border-white/10">
                  <Image
                    src={omar.image}
                    alt="Omar"
                    fill
                    className="object-cover object-[50%_15%]"
                    referrerPolicy="no-referrer"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
                    Omar
                  </h3>
                  <span className="text-xs font-mono font-bold uppercase text-[#ff4d26] block">
                    Development &amp; Engineering Lead
                  </span>
                </div>
              </div>

              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 font-normal">
                {omar.bio}
              </p>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 mb-6 flex items-start gap-2.5">
                <Quote className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-800 dark:text-neutral-200 italic leading-relaxed">
                  &ldquo;{omar.quote}&rdquo;
                </p>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-2 font-bold">
                Disciplines
              </span>
              <div className="flex flex-wrap gap-1.5">
                {omar.responsibilities.slice(0, 5).map((r) => (
                  <span
                    key={r}
                    className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-white/[0.06] text-[11px] font-medium text-neutral-800 dark:text-neutral-200"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
