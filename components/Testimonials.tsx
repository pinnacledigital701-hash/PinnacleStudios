'use client';

import React from 'react';
import { MessageSquare, ShieldCheck, Mail } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="feedback" className="py-20 sm:py-24 bg-[#dde2ea] dark:bg-[#0a0c10] border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-white/10 text-[10px] font-mono uppercase tracking-widest text-neutral-800 dark:text-neutral-200 mb-4 border border-black/5 dark:border-white/10 font-bold">
            <MessageSquare className="w-3.5 h-3.5" />
            CLIENT TRUST &amp; PRIVACY
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white mb-4">
            Client feedback &amp; case reviews
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl mx-auto font-normal">
            We partner closely with venture-backed startups and growing brands. We honor client
            confidentiality and provide verified references directly upon project qualification.
          </p>

          {/* Tasteful Confidentiality Card */}
          <div className="p-8 sm:p-12 rounded-[2.25rem] bg-white dark:bg-[#131620] border border-black/5 dark:border-white/10 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-white/5 mx-auto mb-4 flex items-center justify-center text-neutral-400">
              <ShieldCheck className="w-6 h-6 text-[#ff4d26]" />
            </div>
            <p className="text-sm font-bold uppercase tracking-tight text-neutral-900 dark:text-white mb-1">
              Client feedback available upon request
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
              We are currently booking selected Q3/Q4 partners. If you would like to speak directly with founders
              we have built for, we are happy to introduce you during our discovery call.
            </p>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff4d26] hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Request client references &amp; studio deck</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
