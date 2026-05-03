"use client";

import React from "react";

export type Language = "zh" | "en";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = React.createContext<LanguageContextValue | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = React.useState<Language>("zh");

  React.useEffect(() => {
    const savedLanguage = window.localStorage.getItem("top-collection-lang");
    if (savedLanguage === "zh" || savedLanguage === "en") {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = React.useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("top-collection-lang", nextLanguage);
  }, []);

  const toggleLanguage = React.useCallback(() => {
    setLanguage(language === "zh" ? "en" : "zh");
  }, [language, setLanguage]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
};
