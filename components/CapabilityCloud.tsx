'use client';

import React from 'react';
import { Layout, Palette, Code2, Terminal, Sparkles, Layers, Wand2, Compass } from 'lucide-react';

const CAPABILITIES = [
  { name: 'Web Design', icon: Layout, desc: 'Editorial & Responsive Interfaces' },
  { name: 'UI/UX Design', icon: Palette, desc: 'Frictionless User Journeys' },
  { name: 'Frontend Architecture', icon: Code2, desc: 'Type-Safe React & Next.js' },
  { name: 'Full-Stack Dev', icon: Terminal, desc: 'APIs, Backends & Performance' },
  { name: 'Brand Identity', icon: Sparkles, desc: 'Distinctive Typography & Marks' },
  { name: 'Design Systems', icon: Layers, desc: 'Spatial Rules & Tokens' },
  { name: 'Micro-Interactions', icon: Wand2, desc: 'Restrained Kinetic Feedback' },
  { name: 'Product Strategy', icon: Compass, desc: 'Information Architecture' },
];

export default function CapabilityCloud() {
  return (
    <section className="py-14 bg-[#dde2ea] dark:bg-[#0a0c10] border-y border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-1 h-4 bg-[#ff4d26] inline-block rounded-full" />
            <span className="text-sm font-black uppercase tracking-wider text-neutral-900 dark:text-white">
              STUDIO DISCIPLINES
            </span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
            Executed directly in tandem by Mateo &amp; Omar — eliminating translation loss between visual craft and code.
          </p>
        </div>

        {/* Floating / Balanced Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {CAPABILITIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="group relative p-4 rounded-2xl bg-white dark:bg-[#131620] border border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-white/5 group-hover:bg-[#ff4d26] group-hover:text-white flex items-center justify-center text-neutral-800 dark:text-neutral-200 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-tight text-neutral-950 dark:text-white group-hover:text-[#ff4d26] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
