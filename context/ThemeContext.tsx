"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<string>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setThemeState(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const setTheme = (newTheme: string) => {
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

