'use client';

import React, { useState } from 'react';
import { TECHNOLOGIES } from '@/data/siteData';
import { Zap, ShieldCheck, Globe } from 'lucide-react';

export default function Technology() {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Architecture', 'Backend', 'Creative'];

  const filtered =
    activeTab === 'All'
      ? TECHNOLOGIES
      : TECHNOLOGIES.filter((t) => t.category === activeTab);

  return (
    <section className="py-24 sm:py-32 bg-[#dde2ea] dark:bg-[#0a0c10] border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-4 bg-[#ff4d26] inline-block rounded-full" />
              <span className="text-sm font-black uppercase tracking-wider text-neutral-900 dark:text-white">
                TECHNICAL ARCHITECTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
              Modern systems.
              <br />
              <span className="font-serif-italic font-normal lowercase tracking-normal text-neutral-800 dark:text-neutral-200">
                uncompromised performance.
              </span>
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === cat
                    ? 'bg-black dark:bg-white text-white dark:text-black font-bold shadow-xs'
                    : 'bg-white/80 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/10 hover:bg-white dark:hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Architecture Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {filtered.map((tech) => (
            <div
              key={tech.name}
              className="p-6 rounded-[1.75rem] bg-white dark:bg-[#131620] border border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-200 hover:shadow-sm flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-neutral-950 dark:text-white">{tech.name}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 uppercase font-semibold">
                  {tech.category}
                </span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Technical Benchmarks Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-7 rounded-[2rem] bg-neutral-950 dark:bg-[#131620] text-white border border-white/10 shadow-lg">
          <div className="flex items-start gap-3 p-3">
            <Zap className="w-5 h-5 text-[#ff9100] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-sm text-white mb-1">Core Web Vitals Obsession</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Zero CLS, instant LCP, and ultra-lightweight asset pipelines.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3">
            <ShieldCheck className="w-5 h-5 text-[#ff9100] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-sm text-white mb-1">Strict Type Safety</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                100% TypeScript coverage from database interfaces to UI prop contracts.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3">
            <Globe className="w-5 h-5 text-[#ff9100] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-sm text-white mb-1">Global Edge Deployment</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Multi-region caching and edge-rendered routes delivering sub-second response times worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
