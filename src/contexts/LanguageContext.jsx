// File: src/contexts/LanguageContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Tạo Context
const LanguageContext = createContext();

// Provider Component
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('appLang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('appLang', lang);
  }, [lang]);

  const changeLanguage = (newLang) => {
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext };