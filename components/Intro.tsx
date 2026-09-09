'use client';

import React from 'react';

export default function Intro() {
  return (
    <section
      id="studio-intro"
      className="py-20 sm:py-28 bg-[#dde2ea] dark:bg-[#0a0c10] relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d26]" />
            Studio Manifesto
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-[1.05] mb-8">
            Design that commands{' '}
            <span className="font-serif-italic font-normal lowercase tracking-normal text-neutral-800 dark:text-neutral-200 underline decoration-[#ff4d26] decoration-4 underline-offset-8">
              attention.
            </span>
            <br />
            Engineering that{' '}
            <span className="font-serif-italic font-normal lowercase tracking-normal text-neutral-800 dark:text-neutral-200">
              actually scales.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              In conventional agencies, design and development are quarantined in separate departments.
              Sublime visual concepts get diluted when handed off to detached engineering queues, while technical
              trade-offs are made in silos without aesthetic consideration.
            </p>
            <div>
              <p className="mb-6">
                At Pinnacle Digital Studios, we dissolved the divide. Mateo leads creative direction and interface
                interaction; Omar orchestrates architectural systems and full-stack performance. We sit at the same
                table on every client engagement.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-700 dark:text-neutral-300">
                <span className="px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-2xs">
                  0% Account Manager Overhead
                </span>
                <span className="px-3 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-bold shadow-2xs">
                  100% Direct Founder Craft
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
