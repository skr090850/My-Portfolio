import React, { createContext, useState, useEffect, useContext } from 'react';
import { translations } from '../lib/translations';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'system';
  });

  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const root = window.document.documentElement;
    
    const applyTheme = (currentTheme) => {
        const isDark =
            currentTheme === 'dark' ||
            (currentTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(isDark ? 'dark' : 'light');
    };

    applyTheme(theme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => applyTheme(theme);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
    
  }, [theme]);

  const setTheme = (newTheme) => {
    localStorage.setItem('theme', newTheme);
    setThemeState(newTheme);
  };
  
  const changeLanguage = (lang) => {
    localStorage.setItem('language', lang);
    setLanguage(lang);
  };

  const t = (key) => {
    return translations[language]?.[key] || translations['en'][key];
  };

  return (
    <SettingsContext.Provider value={{ theme, setTheme, language, changeLanguage, t }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
