'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = mounted && theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Studio', href: '#studio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#dde2ea]/90 dark:bg-[#0a0c10]/90 backdrop-blur-md border-b border-black/[0.06] dark:border-white/10 py-3.5 shadow-sm'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Center Brand Identity (Inspired by reference logo center) */}
          <Link
            href="/"
            id="brand-logo"
            className="flex items-center gap-2 group focus:outline-none py-1"
          >
            <div className="w-7 h-7 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-black text-xs transition-transform duration-300 group-hover:scale-105">
              <span>P</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-black text-sm tracking-tight uppercase text-neutral-950 dark:text-white">
                Pinnacle
              </span>
              <span className="text-[10px] font-mono uppercase text-neutral-500 dark:text-neutral-400 hidden sm:inline">
                Studio
              </span>
            </div>
          </Link>

          {/* Right Navigation & CTA */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Theme Switcher */}
            <button
              id="theme-switcher-toggle"
              type="button"
              onClick={toggleTheme}
              suppressHydrationWarning
              className="w-8 h-8 rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 flex items-center justify-center text-neutral-800 dark:text-neutral-200 transition-all duration-200 cursor-pointer"
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? (
                <Sun className="w-3.5 h-3.5 text-[#ff9100]" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-neutral-700" />
              )}
            </button>

            {/* High-Contrast Pill CTA (Inspired by reference "Hire Me!") */}
            <a
              href="#contact"
              id="nav-cta-button"
              className="inline-flex items-center gap-1.5 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-850 dark:hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-md active:scale-95"
            >
              Let&apos;s Talk!
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              suppressHydrationWarning
              className="p-2 rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 text-neutral-800 dark:text-neutral-200"
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? <Sun className="w-4 h-4 text-[#ff9100]" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#contact"
              className="bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1"
            >
              Talk!
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/80 dark:bg-white/5 text-neutral-900 dark:text-neutral-100"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="md:hidden border-b border-black/[0.08] dark:border-white/10 bg-[#dde2ea] dark:bg-[#0a0c10] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5 dark:border-white/5">
            <span className="text-[11px] font-mono uppercase text-neutral-600 dark:text-neutral-400">
              Mateo &amp; Omar · Studio
            </span>
            <span className="text-[11px] font-semibold text-[#ff4d26] dark:text-[#ff9100]">
              Available Q3/Q4
            </span>
          </div>

          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-[#ff4d26] dark:hover:text-[#ff9100] py-2 border-b border-black/[0.04] dark:border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 w-full text-center bg-black dark:bg-white text-white dark:text-black font-bold uppercase text-xs tracking-wider py-3.5 rounded-full flex items-center justify-center gap-2"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
