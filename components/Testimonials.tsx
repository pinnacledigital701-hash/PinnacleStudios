'use client';

import React from 'react';
import { MessageSquare, ShieldCheck, Mail } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="feedback" className="py-20 sm:py-24 bg-[#fafaf8] dark:bg-[#0c0d12] border-t border-black/[0.06] dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-300 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Client Reviews &amp; Trust
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mb-4">
            Client feedback &amp; case reviews
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl mx-auto">
            We partner closely with select venture-backed startups, studios, and high-growth brands. We honor client
            confidentiality and provide verified references directly upon project qualification.
          </p>

          {/* Tasteful Placeholder Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#13151b] border border-dashed border-black/15 dark:border-white/15 shadow-2xs text-center">
            <div className="w-12 h-12 rounded-full bg-[#f4f4f0] dark:bg-white/5 mx-auto mb-4 flex items-center justify-center text-neutral-400">
              <ShieldCheck className="w-6 h-6 text-[#8bc300] dark:text-[#c8ff00]" />
            </div>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1 font-serif-italic">
              Client feedback will appear here.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
              We are currently onboarding selected Q3/Q4 partners. If you would like to speak directly with founders
              we have built for, we are happy to introduce you during our discovery call.
            </p>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-[#c8ff00] hover:text-black dark:hover:text-[#c8ff00] dark:hover:underline underline underline-offset-4"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Request client references &amp; architecture deck</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
