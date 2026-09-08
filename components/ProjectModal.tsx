'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '@/data/siteData';
import { X, ExternalLink, ArrowUpRight, CheckCircle, Code, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/75 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            key="modal-card"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#13151b] rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur border border-black/10 dark:border-white/20 flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-black transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c8ff00]"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Banner & Image */}
        <div className="relative aspect-video sm:aspect-[21/9] w-full bg-neutral-950 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-center"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#c8ff00] text-black text-[11px] font-mono font-semibold uppercase">
                {project.category}
              </span>
              <span className="text-xs font-mono text-neutral-300">
                Released {project.year}
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-4xl font-bold tracking-tight">
              {project.name}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
                Project Overview &amp; Execution
              </h3>
              <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed mb-6 font-normal">
                {project.fullDetails}
              </p>

              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
                Technical &amp; Architectural Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {project.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-2 p-3 rounded-xl bg-neutral-50 dark:bg-white/[0.04] border border-neutral-200/60 dark:border-white/10 text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >
                    <CheckCircle className="w-4 h-4 text-[#8bc300] dark:text-[#c8ff00] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Meta & Services */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#fafaf8] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-3 font-semibold">
                  Disciplines Applied
                </span>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-xs font-medium text-neutral-800 dark:text-neutral-200 shadow-2xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 text-xs border-t border-black/5 dark:border-white/10 pt-4">
                  <div className="flex justify-between">
                    <span className="text-neutral-500 dark:text-neutral-400">Creative Lead:</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">Mateo (Design &amp; UI)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 dark:text-neutral-400">Engineering Lead:</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">Omar (Systems &amp; Stack)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 dark:text-neutral-400">Status:</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-medium">Production Deployed</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="w-full py-2.5 px-4 rounded-xl bg-black dark:bg-[#c8ff00] text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-[#b8ec00] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Inquire About a Similar Build</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#c8ff00] dark:text-black" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
  );
}
