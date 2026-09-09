'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-36 overflow-hidden bg-[#dde2ea] dark:bg-[#0a0c10]"
    >
      {/* 1. Oversized Ghost Background Typography (Inspired by Reference) */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none -z-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="text-[17vw] font-black uppercase tracking-tighter text-white/50 dark:text-white/[0.03] leading-[0.8] block whitespace-nowrap">
          PINNACLE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Bold Editorial Headline */}
          <div className="lg:col-span-6 flex flex-col justify-center relative z-20">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                Hi 👋 We&apos;re <strong className="text-neutral-950 dark:text-white font-bold">Mateo &amp; Omar</strong>
              </span>
            </motion.div>

            {/* Massive Display Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[4.6rem] font-black tracking-tighter uppercase leading-[0.88] text-neutral-950 dark:text-white mb-6"
            >
              BRANDING,
              <br />
              PRODUCT UI/UX
              <br />
              &amp; ENGINEERING.
            </motion.h1>

            {/* Studio Micro-Summary */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-lg leading-relaxed font-normal mb-8"
            >
              An independent creative technology studio. We eliminate agency bloat by placing you in direct partnership
              with the two founders crafting your brand identity, interface design, and full-stack web architecture.
            </motion.p>

            {/* Quick Action Pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-md active:scale-95"
              >
                Selected Work
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white/70 dark:bg-white/10 text-neutral-900 dark:text-white hover:bg-white dark:hover:bg-white/20 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full border border-black/10 dark:border-white/15 transition-all active:scale-95"
              >
                Our Services
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual Centerpiece (Arch/Circle + Founders + Script + Floating Pill + Studio Card) */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0 flex flex-col items-center justify-center">
            {/* Center Visual Canvas */}
            <div className="relative w-full max-w-[460px] aspect-[4/5] sm:aspect-square flex items-center justify-center">
              {/* Vibrant Solar Gradient Arch / Circle Backdrop (Direct Reference Element) */}
              <div
                className="absolute inset-x-8 top-4 bottom-12 rounded-t-[14rem] sm:rounded-t-[16rem] rounded-b-[4rem] sm:rounded-b-full bg-gradient-to-tr from-[#ff381e] via-[#ff6a00] to-[#ffa800] shadow-2xl shadow-orange-500/25"
                aria-hidden="true"
              />

              {/* Founder Duo Composition: Real Photos with CSS Cropping & Positioning */}
              <div className="relative z-10 w-[88%] h-[92%] rounded-t-[13rem] sm:rounded-t-[15rem] rounded-b-[3.5rem] sm:rounded-b-full overflow-hidden border-2 border-white/60 dark:border-white/20 shadow-inner flex">
                {/* Mateo (Left: Creative & Frontend) */}
                <div className="relative w-1/2 h-full border-r border-white/20 overflow-hidden bg-neutral-950 group">
                  <Image
                    src="/images/mateo.jpg"
                    alt="Mateo, Co-Founder · Creative & Frontend"
                    fill
                    className="object-cover object-[55%_15%] group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-3 right-2 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider block text-white/80">
                      Co-Founder
                    </span>
                    <span className="text-xs font-bold uppercase tracking-tight block">
                      Mateo
                    </span>
                    <span className="text-[9px] text-[#ffa800] font-medium block">
                      Creative &amp; UI/UX
                    </span>
                  </div>
                </div>

                {/* Omar (Right: Development & Engineering) */}
                <div className="relative w-1/2 h-full overflow-hidden bg-neutral-950 group">
                  <Image
                    src="/images/omar.jpg"
                    alt="Omar, Co-Founder · Development & Engineering"
                    fill
                    className="object-cover object-[50%_15%] group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-3 right-2 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider block text-white/80">
                      Co-Founder
                    </span>
                    <span className="text-xs font-bold uppercase tracking-tight block">
                      Omar
                    </span>
                    <span className="text-[9px] text-[#ffa800] font-medium block">
                      Full-Stack Dev
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Pill Badges (Direct Reference Element) */}
              <div className="absolute -top-3 left-4 z-20 -rotate-6 bg-black text-white px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider shadow-xl border border-white/20">
                Branding
              </div>
              <div className="absolute top-10 -right-2 z-20 rotate-6 bg-black text-white px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider shadow-xl border border-white/20">
                Engineering
              </div>
              <div className="absolute top-1/2 -left-4 z-20 -rotate-3 bg-black text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider shadow-xl border border-white/20 hidden sm:block">
                UI/UX Design
              </div>

              {/* Vibrant Script Accent (Direct Reference "Jerry Kinda" Translation) */}
              <div
                className="absolute -bottom-4 left-2 z-30 font-script text-5xl sm:text-7xl lg:text-8xl text-[#6320ee] dark:text-[#a855f7] -rotate-6 drop-shadow-md select-none pointer-events-none whitespace-nowrap"
                aria-hidden="true"
              >
                Mateo &amp; Omar
              </div>
            </div>

            {/* Floating Studio Card (Direct Reference Element at Bottom-Right of Hero) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 sm:-mt-8 lg:-mt-12 ml-auto w-full max-w-sm relative z-30 bg-white dark:bg-[#131620] rounded-[2rem] p-6 shadow-xl border border-black/5 dark:border-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 leading-snug mb-3">
                    Direct Founder Partnership · Award-Winning Craft for Ambitious Teams.
                  </p>
                  <a
                    href="mailto:pinnacledigital701@gmail.com"
                    className="text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white underline underline-offset-4 transition-colors"
                  >
                    pinnacledigital701@gmail.com
                  </a>
                </div>

                {/* Scalloped / Circular "Let's Discuss" Button (Direct Reference Badge) */}
                <a
                  href="#contact"
                  className="shrink-0 w-16 h-16 rounded-full bg-black dark:bg-white text-white dark:text-black flex flex-col items-center justify-center text-center p-1.5 group hover:scale-105 transition-transform duration-300 shadow-md"
                  title="Let's Discuss"
                >
                  <span className="text-[9px] font-black uppercase tracking-tight leading-none group-hover:underline">
                    Let&apos;s
                    <br />
                    Discuss
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
