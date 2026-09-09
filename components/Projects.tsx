'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, Project } from '@/data/siteData';
import ProjectModal from '@/components/ProjectModal';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Clean Tech', 'Culinary & Apps', 'Architecture', 'Lab'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => {
          if (selectedCategory === 'Clean Tech') return p.id === 'greenside';
          if (selectedCategory === 'Culinary & Apps') return p.id === 'foodie-eats';
          if (selectedCategory === 'Architecture') return p.id === 'northstar-properties';
          if (selectedCategory === 'Lab') return p.id === 'pinnacle-concepts';
          return true;
        });

  // Reference-inspired bottom pill labels
  const getPillLabel = (projectId: string) => {
    switch (projectId) {
      case 'greenside':
        return 'CLEAN COMMERCE';
      case 'foodie-eats':
        return 'WEB APPLICATION';
      case 'northstar-properties':
        return 'EDITORIAL LUXURY';
      case 'pinnacle-concepts':
        return 'CREATIVE LAB';
      default:
        return 'VIEW PROJECT';
    }
  };

  return (
    <section
      id="work"
      className="py-24 sm:py-32 bg-[#dde2ea] dark:bg-[#0a0c10] relative overflow-hidden transition-colors duration-300"
    >
      {/* Ghost Background Watermark (Direct Reference Element) */}
      <div
        className="absolute top-8 right-4 sm:right-12 pointer-events-none select-none -z-0"
        aria-hidden="true"
      >
        <span className="text-[12vw] font-black uppercase tracking-tighter text-white/60 dark:text-white/[0.03] leading-none block">
          PORTFOLIO
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Accent Bar (Direct Reference: "| SELECTED WORK") */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-14">
          <div className="flex items-center gap-2">
            <span className="w-1 h-4 bg-[#ff4d26] inline-block rounded-full" />
            <span className="text-sm font-black uppercase tracking-wider text-neutral-900 dark:text-white">
              SELECTED WORK
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                    : 'bg-white/70 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Editorial Image Grid (Direct Reference Composition) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveModalProject(project)}
                className="group cursor-pointer"
              >
                {/* Visual Card Container */}
                <div className="relative aspect-[4/3] w-full rounded-[2rem] sm:rounded-[2.25rem] overflow-hidden bg-neutral-900 shadow-md border border-black/5 dark:border-white/10">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Top Subtle Year & Studio Tag */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono">
                      {project.year}
                    </span>
                  </div>

                  {/* Pinned Bottom-Left White Pill Label (Direct Reference Element) */}
                  <div className="absolute bottom-5 left-5 z-10">
                    <div className="inline-flex items-center gap-2 bg-white text-black text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full shadow-lg group-hover:bg-[#ff4d26] group-hover:text-white transition-colors duration-200">
                      <span>{getPillLabel(project.id)}</span>
                      <div className="w-4 h-4 rounded-full bg-black/10 group-hover:bg-white/20 flex items-center justify-center">
                        <ArrowUpRight className="w-2.5 h-2.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtitle / Title under card */}
                <div className="mt-3.5 px-2 flex items-baseline justify-between">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-950 dark:text-white group-hover:text-[#ff4d26] dark:group-hover:text-[#ff9100] transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    {project.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
