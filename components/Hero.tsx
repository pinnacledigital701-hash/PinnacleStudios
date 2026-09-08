'use client';

import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, Sparkles, Layers, Code, Palette, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden"
    >
      {/* Editorial Lime Ambient Backdrop Glow (Restrained & Sophisticated) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] lg:w-[820px] h-[320px] sm:h-[480px] rounded-full pointer-events-none -z-10 blur-3xl opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(200, 255, 0, 0.75) 0%, rgba(200, 255, 0, 0.25) 50%, rgba(248, 248, 246, 0) 75%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Meta Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#13151b]/90 border border-black/[0.08] dark:border-white/10 shadow-xs text-xs font-medium text-neutral-800 dark:text-neutral-200">
            <span className="w-2 h-2 rounded-full bg-[#8bc300] dark:bg-[#c8ff00] inline-block animate-pulse" />
            <span>Pinnacle Digital Studios</span>
            <span className="text-neutral-300 dark:text-neutral-700">·</span>
            <span className="text-neutral-600 dark:text-neutral-400">Mateo &amp; Omar</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-medium px-3 py-1 rounded-full bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#8bc300] dark:text-[#c8ff00]" />
            Independent Design &amp; Technology Studio
          </div>
        </motion.div>

        {/* Main Editorial Headline */}
        <div className="relative mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.05] max-w-5xl"
          >
            We design &amp; build{' '}
            <span className="font-serif-italic font-normal text-neutral-900 dark:text-white tracking-normal block sm:inline">
              exceptional
            </span>{' '}
            digital experiences.
          </motion.h1>

          {/* Floating Pill Badges (Inspired by Reference) */}
          <div className="hidden lg:block absolute right-0 top-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-2.5 items-end"
            >
              <div className="px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#14161c]/95 border border-black/[0.08] dark:border-white/15 shadow-sm text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <Palette className="w-3.5 h-3.5 text-[#73a200] dark:text-[#c8ff00]" />
                Creative &amp; UI/UX Craft
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#14161c]/95 border border-black/[0.08] dark:border-white/15 shadow-sm text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2 mr-6">
                <Code className="w-3.5 h-3.5 text-[#73a200] dark:text-[#c8ff00]" />
                Full-Stack Next.js Architecture
              </div>
              <div className="px-3 py-1 rounded-full bg-[#c8ff00]/30 dark:bg-[#c8ff00]/20 border border-[#b8ee44]/60 dark:border-[#c8ff00]/40 text-[11px] font-mono font-semibold text-neutral-900 dark:text-[#c8ff00]">
                ZERO HANDOFF FRICTION
              </div>
            </motion.div>
          </div>
        </div>

        {/* Studio Subheading & Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12"
        >
          <div className="lg:col-span-7">
            <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl font-normal">
              Pinnacle is an independent studio founded by{' '}
              <strong className="font-semibold text-neutral-950 dark:text-white">Mateo</strong> (Design &amp; Frontend) and{' '}
              <strong className="font-semibold text-neutral-950 dark:text-white">Omar</strong> (Full-Stack Engineering). We unite
              world-class visual identity with high-performance web architecture for ambitious businesses.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href="#contact"
              id="hero-primary-cta"
              className="inline-flex items-center justify-center gap-2.5 bg-black dark:bg-[#c8ff00] hover:bg-neutral-800 dark:hover:bg-[#b8ec00] text-white dark:text-black px-7 py-4 rounded-full font-medium text-sm transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#c8ff00] dark:text-black transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#work"
              id="hero-secondary-cta"
              className="inline-flex items-center justify-center gap-2 bg-white/90 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.12] text-neutral-900 dark:text-white border border-black/10 dark:border-white/15 px-6 py-4 rounded-full font-medium text-sm transition-all duration-200 hover:border-black/30 dark:hover:border-white/30 shadow-2xs"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
            </a>
          </div>
        </motion.div>

        {/* Capability Tags Strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="pt-8 border-t border-black/[0.08] dark:border-white/10"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">
              Core Capabilities
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {[
                'Web Design',
                'UI/UX Architecture',
                'Frontend Craft',
                'Full-Stack Systems',
                'Brand Identity',
                'Motion Design',
                'Performance Optimization',
              ].map((cap) => (
                <span
                  key={cap}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 dark:bg-[#13151b] border border-black/[0.06] dark:border-white/10 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:border-black/20 dark:hover:border-white/30 hover:text-black dark:hover:text-white transition-colors"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
