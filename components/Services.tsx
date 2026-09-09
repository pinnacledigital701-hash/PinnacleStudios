'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '@/data/siteData';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(1); // Open 02 Design by default like reference

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-[#dde2ea] dark:bg-[#0a0c10] relative overflow-hidden transition-colors duration-300"
    >
      {/* Ghost Background Watermark (Direct Reference Element) */}
      <div
        className="absolute top-10 left-4 sm:left-12 pointer-events-none select-none -z-0"
        aria-hidden="true"
      >
        <span className="text-[13vw] font-black uppercase tracking-tighter text-white/60 dark:text-white/[0.03] leading-none block">
          SERVICE
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Accent Bar (Direct Reference: "SERVICES |") */}
        <div className="flex items-center justify-between mb-10 sm:mb-14">
          <div className="flex items-center gap-2">
            <span className="text-sm font-black uppercase tracking-wider text-neutral-900 dark:text-white">
              SERVICES
            </span>
            <span className="w-1 h-4 bg-[#ff4d26] inline-block rounded-full" />
          </div>

          <span className="text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400">
            01 — 05 Disciplines
          </span>
        </div>

        {/* Editorial Accordion Cards (Direct Reference Styling) */}
        <div className="space-y-4 sm:space-y-5">
          {SERVICES.map((service, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={service.number}
                className="rounded-[2rem] bg-white dark:bg-[#131620] border border-black/5 dark:border-white/10 shadow-sm transition-all duration-300 overflow-hidden"
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className="w-full text-left p-6 sm:p-10 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span className="text-sm sm:text-base font-mono font-bold text-neutral-400 dark:text-neutral-500">
                      {service.number}
                    </span>
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Clean Expand/Collapse Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black/10 dark:border-white/15 flex items-center justify-center text-neutral-900 dark:text-white shrink-0 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                    {isExpanded ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`content-${service.number}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 sm:px-10 sm:pb-10 pt-2 border-t border-black/5 dark:border-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
                          <div className="md:col-span-6">
                            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                              {service.description}
                            </p>
                            <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                              Key Tools: {service.tools.join(' · ')}
                            </p>
                          </div>

                          <div className="md:col-span-6">
                            <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white block mb-3">
                              What We Deliver:
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                              {service.deliverables.map((deliv) => (
                                <li key={deliv} className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d26] shrink-0" />
                                  <span>{deliv}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-6 pt-4 flex items-center justify-between">
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#ff4d26] hover:underline"
                          >
                            Inquire about {service.title}
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
