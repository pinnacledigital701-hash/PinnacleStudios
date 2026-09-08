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
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Studio', href: '#studio' },
    { name: 'Why Pinnacle', href: '#why-pinnacle' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f8f8f6]/85 dark:bg-[#090a0d]/85 backdrop-blur-md border-b border-black/[0.06] dark:border-white/10 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.02)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Studio Mark */}
          <Link
            href="/"
            id="brand-logo"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-lg py-1 px-1"
          >
            <div className="w-8 h-8 rounded-full bg-black dark:bg-[#c8ff00] flex items-center justify-center text-white dark:text-black font-bold text-sm tracking-tight transition-transform duration-300 group-hover:scale-105">
              <span className="text-[#c8ff00] dark:text-black text-xs font-mono">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-[#c8ff00] transition-colors">
                Pinnacle Digital Studios
              </span>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-medium tracking-wide uppercase">
                Mateo &amp; Omar · Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/10 rounded-full px-6 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-black dark:focus-visible:ring-white rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Availability Status, Theme Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8fcc2]/70 dark:bg-[#c8ff00]/15 border border-[#b8ee44]/40 dark:border-[#c8ff00]/30 text-[11px] font-medium text-neutral-800 dark:text-[#c8ff00]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8bc300] dark:bg-[#c8ff00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6b9900] dark:bg-[#c8ff00]"></span>
              </span>
              Available for Q3/Q4
            </div>

            {/* Subtle Theme Switcher Button */}
            <button
              id="theme-switcher-toggle"
              type="button"
              onClick={toggleTheme}
              suppressHydrationWarning
              className="w-9 h-9 rounded-full border border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/[0.06] hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center text-neutral-800 dark:text-neutral-200 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
              aria-label={`Switch to ${isDark ? 'off-white' : 'premium dark'} theme`}
              title={`Switch to ${isDark ? 'off-white' : 'premium dark'} theme`}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-[#c8ff00] transition-transform duration-200 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-700 transition-transform duration-200 hover:-rotate-12" />
              )}
            </button>

            <a
              href="#contact"
              id="nav-cta-button"
              className="inline-flex items-center gap-2 bg-black dark:bg-[#c8ff00] text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-[#b8ec00] text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-3.5 h-3.5 text-[#c8ff00] dark:text-black" />
            </a>
          </div>

          {/* Mobile menu controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              suppressHydrationWarning
              className="p-2 rounded-full border border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/[0.06] text-neutral-800 dark:text-neutral-200 transition-colors"
              aria-label={`Switch to ${isDark ? 'off-white' : 'premium dark'} theme`}
            >
              {isDark ? <Sun className="w-4 h-4 text-[#c8ff00]" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#contact"
              className="bg-black dark:bg-[#c8ff00] text-white dark:text-black text-xs font-medium px-3 py-2 rounded-full flex items-center gap-1"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-3 h-3 text-[#c8ff00] dark:text-black" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-neutral-800 dark:text-neutral-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
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
          className="md:hidden border-b border-black/[0.08] dark:border-white/10 bg-[#f8f8f6] dark:bg-[#090a0d] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-[#e8fcc2]/70 dark:bg-[#c8ff00]/15 border border-[#b8ee44]/40 dark:border-[#c8ff00]/30 text-[11px] font-medium text-neutral-800 dark:text-[#c8ff00]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8bc300] dark:bg-[#c8ff00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6b9900] dark:bg-[#c8ff00]"></span>
              </span>
              Available for new projects
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              suppressHydrationWarning
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300"
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#c8ff00]" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white py-2 border-b border-black/[0.04] dark:border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center bg-black dark:bg-[#c8ff00] text-white dark:text-black font-medium text-sm py-3 rounded-xl flex items-center justify-center gap-2"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4 text-[#c8ff00] dark:text-black" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

