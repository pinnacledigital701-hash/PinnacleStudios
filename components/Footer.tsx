'use client';

import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="studio-footer"
      className="bg-[#111318] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Studio Brand Statement */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-white text-black font-black text-xs flex items-center justify-center">
                P
              </div>
              <span className="font-black text-lg tracking-tight uppercase text-white">
                Pinnacle Digital Studios
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed mb-6 font-normal">
              An independent creative technology studio founded by Mateo &amp; Omar. We design and build bespoke brand
              identities, digital platforms, and full-stack software.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d26]" />
              <span>Direct Founder Partnership · Zero Account Middlemen</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-4 font-bold">
              Directory
            </span>
            <ul className="space-y-2.5 text-xs text-neutral-300 font-medium">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services &amp; Disciplines
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-white transition-colors">
                  About Mateo &amp; Omar
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Deliberate Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Start a Project
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Direct Contact */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-4 font-bold">
                Direct Contact
              </span>
              <a
                href="mailto:pinnacledigital701@gmail.com"
                className="text-sm font-mono text-white hover:text-[#ff4d26] transition-colors break-all block mb-2 underline underline-offset-4"
              >
                pinnacledigital701@gmail.com
              </a>
              <p className="text-xs text-neutral-400">
                Inquiries reviewed and answered directly by founders within 24 hours.
              </p>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#ff4d26]" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} Pinnacle Digital Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-[11px] font-mono">
            <span>Mateo (Creative &amp; Frontend)</span>
            <span className="text-neutral-700">·</span>
            <span>Omar (Development &amp; Systems)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
