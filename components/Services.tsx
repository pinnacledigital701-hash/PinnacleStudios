'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '@/data/siteData';
import { ArrowUpRight, Check, Plus, Minus } from 'lucide-react';

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0d0e12] dark:bg-[#06070a] text-white relative overflow-hidden transition-colors duration-300">
      {/* Subtle Radial Electric Glow */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none -z-0 blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, #c8ff00 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#c8ff00] mb-2">
              / Studio Disciplines &amp; Offerings
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Complete capabilities.{' '}
              <span className="font-serif-italic font-normal text-white">
                Singular focus.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md">
            We don’t outsource or hand off. Each service is directed and built by founders Mateo &amp; Omar to guarantee
            total alignment from conception to deployment.
          </p>
        </div>

        {/* Editorial Service Accordion / List */}
        <div className="divide-y divide-white/10">
          {SERVICES.map((service, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={service.number}
                className="group py-8 sm:py-10 transition-colors duration-300"
              >
                <div
                  onClick={() => toggleExpand(idx)}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start md:items-center gap-6 sm:gap-10">
                    <span className="font-mono text-sm sm:text-base text-neutral-500 group-hover:text-[#c8ff00] transition-colors">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-[#c8ff00] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-serif-italic">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-auto">
                    <span className="hidden sm:inline-block text-xs font-mono text-neutral-500 uppercase">
                      {isExpanded ? 'Collapse' : 'Details'}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-transform duration-300 ${
                        isExpanded ? 'bg-[#c8ff00] text-black border-transparent rotate-45' : 'group-hover:border-white/50'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`details-${service.number}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-6 lg:pl-16">
                          <p className="text-base text-neutral-300 leading-relaxed mb-6 font-normal">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-neutral-500 uppercase">Tools &amp; Stack:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {service.tools.map((t) => (
                                <span
                                  key={t}
                                  className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="lg:col-span-6 p-6 rounded-2xl bg-[#14161c] border border-white/10">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-[#c8ff00] block mb-3 font-semibold">
                            What We Deliver
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {service.deliverables.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-xs text-neutral-300">
                                <Check className="w-3.5 h-3.5 text-[#c8ff00] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Service Section Footer CTA */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs sm:text-sm text-neutral-400">
            Have a custom scope or specific technical requirements?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c8ff00] text-black font-semibold text-xs transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Request Scope Breakdown</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
