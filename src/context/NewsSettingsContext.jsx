import React, { createContext, useContext, useEffect, useState } from 'react';

const DEFAULT_COUNTRIES = ['us'];
const DEFAULT_LANGUAGES = ['en'];

const NewsSettingsContext = createContext();

export function NewsSettingsProvider({ children }) {
  const [choosenCountries, setChoosenCountries] = useState(DEFAULT_COUNTRIES);
  const [choosenLanguages, setChoosenLanguages] = useState(DEFAULT_LANGUAGES);

  useEffect(() => {
    const savedSettings = localStorage.getItem('newsSettings');
    if (savedSettings) {
      try {
        const { countries, languages } = JSON.parse(savedSettings);
        setChoosenCountries(countries);
        setChoosenLanguages(languages);
      } catch (error) {
        console.error('Error parsing saved settings:', error);
      }
    }
  }, []);

  useEffect(() => {
    const settings = {
      countries: choosenCountries,
      languages: choosenLanguages,
    };

    localStorage.setItem('newsSettings', JSON.stringify(settings));
  }, [choosenCountries, choosenLanguages]);

  const resetSettings = () => {
    setChoosenCountries(DEFAULT_COUNTRIES);
    setChoosenLanguages(DEFAULT_LANGUAGES);
    localStorage.removeItem('newsSettings');
  };

  return (
    <NewsSettingsContext.Provider
      value={{
        choosenCountries,
        setChoosenCountries,
        choosenLanguages,
        setChoosenLanguages,
        resetSettings,
      }}
    >
      {children}
    </NewsSettingsContext.Provider>
  );
}

export function useNewsSettings() {
  return useContext(NewsSettingsContext);
}
