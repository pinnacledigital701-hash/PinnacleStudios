'use client';

import React, { useState } from 'react';
import { TECHNOLOGIES } from '@/data/siteData';
import { Cpu, Terminal, Layers, ShieldCheck, Zap, Server, Globe, GitBranch } from 'lucide-react';

export default function Technology() {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Architecture', 'Backend', 'Creative'];

  const filtered =
    activeTab === 'All'
      ? TECHNOLOGIES
      : TECHNOLOGIES.filter((t) => t.category === activeTab);

  return (
    <section className="py-24 sm:py-32 bg-[#fafaf8] dark:bg-[#0c0d12] border-t border-black/[0.06] dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
              / Technical Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Modern systems.{' '}
              <span className="font-serif-italic font-normal">Uncompromised</span> performance.
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  activeTab === cat
                    ? 'bg-black dark:bg-[#c8ff00] text-white dark:text-black font-semibold'
                    : 'bg-white dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-300 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Architecture Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {filtered.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-2xl bg-white dark:bg-[#13151b] border border-black/[0.07] dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-200 hover:shadow-sm flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-neutral-900 dark:text-white">{tech.name}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 uppercase">
                  {tech.category}
                </span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Technical Benchmarks Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-3xl bg-neutral-950 dark:bg-[#161822] text-white border dark:border-white/10">
          <div className="flex items-start gap-3 p-3">
            <Zap className="w-5 h-5 text-[#c8ff00] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-sm text-white mb-0.5">Core Web Vitals Obsession</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Zero CLS (cumulative layout shift), instant LCP, and lightweight asset pipelines.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3">
            <ShieldCheck className="w-5 h-5 text-[#c8ff00] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-sm text-white mb-0.5">Strict Type Safety</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                100% TypeScript coverage from database interfaces to UI prop contracts.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3">
            <Globe className="w-5 h-5 text-[#c8ff00] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-sm text-white mb-0.5">Global Edge Deployment</div>
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
