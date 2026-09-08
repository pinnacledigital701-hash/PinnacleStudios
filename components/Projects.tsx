'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, Project } from '@/data/siteData';
import ProjectModal from '@/components/ProjectModal';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Clean Tech', 'Culinary & Commerce', 'Architecture', 'Creative Lab'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => {
          if (selectedCategory === 'Clean Tech') return p.id === 'greenside';
          if (selectedCategory === 'Culinary & Commerce') return p.id === 'foodie-eats';
          if (selectedCategory === 'Architecture') return p.id === 'northstar-properties';
          if (selectedCategory === 'Creative Lab') return p.id === 'pinnacle-concepts';
          return true;
        });

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#f8f8f6] dark:bg-[#090a0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
              / Selected Works
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Work that{' '}
              <span className="font-serif-italic font-normal">commands</span> attention.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-black dark:bg-[#c8ff00] text-white dark:text-black shadow-sm font-semibold'
                    : 'bg-white/80 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.12] text-neutral-700 dark:text-neutral-300 border border-black/[0.08] dark:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col justify-between bg-white dark:bg-[#13151b] rounded-3xl p-4 sm:p-6 border border-black/[0.08] dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Visual Preview Image */}
                <div
                  onClick={() => setActiveModalProject(project)}
                  className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-950 cursor-pointer mb-6"
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Subtle Overlay Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-mono tracking-wide">
                      {project.tag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/80 text-neutral-800 dark:text-neutral-200 text-[11px] font-mono font-medium">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Reveal CTA */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="px-5 py-2.5 rounded-full bg-white dark:bg-[#c8ff00] text-black font-semibold text-xs flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#73a200] dark:text-black" />
                    </div>
                  </div>
                </div>

                {/* Text Info */}
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white group-hover:text-black dark:group-hover:text-[#c8ff00] transition-colors mb-2">
                      {project.name}
                    </h3>

                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Row: Tags & Action Button */}
                  <div className="pt-4 border-t border-black/[0.06] dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.services.slice(0, 3).map((service) => (
                        <span
                          key={service}
                          className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.06] text-[11px] font-medium text-neutral-700 dark:text-neutral-300"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 dark:text-[#c8ff00] hover:text-black dark:hover:text-[#c8ff00] dark:hover:underline cursor-pointer group/btn"
                    >
                      <span>Read Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
