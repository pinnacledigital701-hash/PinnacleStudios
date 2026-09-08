'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="studio-footer" className="bg-[#0e0f11] dark:bg-[#060709] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Studio Brand Statement */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#c8ff00] text-black font-mono font-bold text-sm flex items-center justify-center">
                P
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Pinnacle Digital Studios
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed mb-6 font-normal">
              An independent design and development studio founded by Mateo &amp; Omar. We design and build digital
              experiences for ambitious businesses worldwide.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#c8ff00]" />
              <span>Direct communication · Zero account manager friction</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-4 font-semibold">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <a href="#work" className="hover:text-[#c8ff00] transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c8ff00] transition-colors">
                  Services &amp; Capabilities
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#c8ff00] transition-colors">
                  Our 4-Stage Process
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-[#c8ff00] transition-colors">
                  Meet Mateo &amp; Omar
                </a>
              </li>
              <li>
                <a href="#why-pinnacle" className="hover:text-[#c8ff00] transition-colors">
                  The Studio Advantage
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#c8ff00] transition-colors">
                  Start a Project
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Direct Contact */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-4 font-semibold">
                Direct Inquiry
              </span>
              <a
                href="mailto:pinnacledigital701@gmail.com"
                className="text-sm font-medium text-white hover:text-[#c8ff00] transition-colors break-all block mb-2"
              >
                pinnacledigital701@gmail.com
              </a>
              <p className="text-xs text-neutral-500">
                Inquiries reviewed directly by Mateo &amp; Omar within 24 hours.
              </p>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-4 h-4 text-[#c8ff00]" />
                <span>Return to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} Pinnacle Digital Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Mateo (Creative)</span>
            <span className="text-neutral-700">·</span>
            <span>Omar (Engineering)</span>
            <span className="text-neutral-700">·</span>
            <span className="text-[#c8ff00]">Boutique Craft</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
