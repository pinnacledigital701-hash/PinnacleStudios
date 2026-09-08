'use client';

import React from 'react';
import { Palette, Layout, Code2, Terminal, Sparkles, Layers, Wand2, Compass } from 'lucide-react';

const CAPABILITIES = [
  { name: 'Web Design', icon: Layout, desc: 'Editorial & Responsive Interfaces', color: 'bg-[#c8ff00]' },
  { name: 'UI/UX', icon: Palette, desc: 'Frictionless User Journeys', color: 'bg-white' },
  { name: 'Frontend', icon: Code2, desc: 'Type-Safe React & Next.js', color: 'bg-white' },
  { name: 'Development', icon: Terminal, desc: 'APIs, Backends & Systems', color: 'bg-[#c8ff00]' },
  { name: 'Brand Identity', icon: Sparkles, desc: 'Distinctive Typography & Marks', color: 'bg-white' },
  { name: 'Graphic Design', icon: Layers, desc: 'Spatial Systems & Collateral', color: 'bg-white' },
  { name: 'Motion', icon: Wand2, desc: 'Restrained Kinetic Feedback', color: 'bg-[#c8ff00]' },
  { name: 'Strategy', icon: Compass, desc: 'Information Architecture & Scope', color: 'bg-white' },
];

export default function CapabilityCloud() {
  return (
    <section className="py-12 border-b border-black/[0.06] dark:border-white/10 bg-[#fafaf8] dark:bg-[#0c0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-1">
              / Studio Disciplines
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Expertise designed to work in harmony.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
            Every capability is executed directly by founders Mateo and Omar — ensuring seamless collaboration from
            sketchbook to deployment.
          </p>
        </div>

        {/* Floating / Balanced Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {CAPABILITIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="group relative p-4 rounded-2xl bg-white dark:bg-[#13151b] border border-black/[0.07] dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] group-hover:bg-[#c8ff00]/40 dark:group-hover:bg-[#c8ff00]/20 flex items-center justify-center text-neutral-800 dark:text-neutral-200 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-[#c8ff00] transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-neutral-950 dark:text-white group-hover:text-black dark:group-hover:text-[#c8ff00] flex items-center gap-1.5 transition-colors">
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
