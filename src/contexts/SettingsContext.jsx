import React, { createContext, useState, useEffect, useContext } from 'react';
import { translations } from '../lib/translations';

// Create the context
const SettingsContext = createContext();

// Create a provider component
export const SettingsProvider = ({ children }) => {
  const [theme, setThemeState] = useState('system');
  const [language, setLanguage] = useState('en');

  // Effect to apply theme changes and save to localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Effect to load saved language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
  };
  
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function
  const t = (key) => {
    return translations[language][key] || translations['en'][key];
  };

  return (
    <SettingsContext.Provider value={{ theme, setTheme, language, changeLanguage, t }}>
      {children}
    </SettingsContext.Provider>
  );
};

// Custom hook to use the settings context
export const useSettings = () => useContext(SettingsContext);
