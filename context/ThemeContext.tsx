'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribeTheme(callback: () => void) {
  listeners.add(callback);

  const handleStorage = (e: StorageEvent) => {
    if (e.key === 'pds-theme') {
      emitChange();
    }
  };

  window.addEventListener('storage', handleStorage);

  let mql: MediaQueryList | null = null;
  const handleMediaChange = () => {
    if (!localStorage.getItem('pds-theme')) {
      emitChange();
    }
  };

  try {
    mql = window.matchMedia('(prefers-color-scheme: dark)');
    mql.addEventListener('change', handleMediaChange);
  } catch {}

  return () => {
    listeners.delete(callback);
    window.removeEventListener('storage', handleStorage);
    if (mql) {
      mql.removeEventListener('change', handleMediaChange);
    }
  };
}

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') return 'light';
  try {
    const stored = localStorage.getItem('pds-theme') as Theme | null;
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

function getServerThemeSnapshot(): Theme {
  return 'light';
}

function subscribeMounted(callback: () => void) {
  return () => {};
}

function getMountedSnapshot(): boolean {
  return true;
}

function getServerMountedSnapshot(): boolean {
  return false;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);
  const mounted = useSyncExternalStore(subscribeMounted, getMountedSnapshot, getServerMountedSnapshot);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    try {
      localStorage.setItem('pds-theme', newTheme);
    } catch {}
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    emitChange();
  }, []);

  const toggleTheme = useCallback(() => {
    const current = getThemeSnapshot();
    const next: Theme = current === 'light' ? 'dark' : 'light';
    setTheme(next);
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

