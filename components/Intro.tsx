'use client';

import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function Intro() {
  return (
    <section id="studio-intro" className="py-24 sm:py-32 bg-[#f8f8f6] dark:bg-[#090a0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8bc300] dark:bg-[#c8ff00]" />
            Studio Manifesto
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.15] mb-8">
            Design that looks{' '}
            <span className="font-serif-italic font-normal text-neutral-900 dark:text-white underline decoration-[#c8ff00] decoration-4 underline-offset-8">
              exceptional.
            </span>
            <br />
            Technology that{' '}
            <span className="font-serif-italic font-normal text-neutral-900 dark:text-white">
              actually works.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-black/[0.08] dark:border-white/10 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p>
              In conventional agencies, design and development are quarantined in separate departments. 
              Sublime visual concepts get diluted when handed off to detached engineering queues, while technical
              trade-offs are made in silos without aesthetic consideration.
            </p>
            <div>
              <p className="mb-6">
                At Pinnacle Digital Studios, we dissolved the divide. Mateo leads creative direction and interface
                interaction; Omar orchestrates architectural systems and full-stack performance. They sit at the same
                table on every client engagement.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                <span className="px-2.5 py-1 rounded bg-black/5 dark:bg-white/5">0% Account Manager Overhead</span>
                <span className="px-2.5 py-1 rounded bg-[#c8ff00]/40 dark:bg-[#c8ff00]/20 text-black dark:text-[#c8ff00] font-semibold">100% Craft Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
