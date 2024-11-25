import { useMemo, useState, useEffect } from 'react';

import s from './SettingsModal.module.scss';
import Button from '../../Button/Button';
import ChooseBtn from './ChooseBtn/ChooseBtn';

import ConfirmActionModal from '../../ConfirmActionModal/ConfirmActionModal';

import { useNewsSettings } from '../../../context/NewsSettingsContext';

const countries = [
  { name: 'USA', code: 'us', languages: [{ name: 'English', code: 'en' }] },
  {
    name: 'Canada',
    code: 'ca',
    languages: [{ name: 'English', code: 'en' }],
  },
  { name: 'UK', code: 'gb', languages: [{ name: 'English', code: 'en' }] },
  {
    name: 'Germany',
    code: 'de',
    languages: [
      { name: 'English', code: 'en' },
      { name: 'German', code: 'de' },
    ],
  },
  {
    name: 'France',
    code: 'fr',
    languages: [
      { name: 'English', code: 'en' },
      { name: 'French', code: 'fr' },
    ],
  },
  {
    name: 'Ukraine',
    code: 'ua',
    languages: [
      { name: 'English', code: 'en' },
      { name: 'Russian', code: 'ru' },
    ],
  },
  {
    name: 'Portugal',
    code: 'pt',
    languages: [
      { name: 'English', code: 'en' },
      { name: 'Portugese', code: 'pt' },
    ],
  },
  {
    name: 'Australia',
    code: 'au',
    languages: [{ name: 'English', code: 'en' }],
  },
  {
    name: 'Italy',
    code: 'it',
    languages: [
      { name: 'English', code: 'en' },
      { name: 'Italian', code: 'it' },
    ],
  },
];

export default function SettingsModal({ isOpen, onClose }) {
  const {
    choosenCountries,
    setChoosenCountries,
    choosenLanguages,
    setChoosenLanguages,
    resetSettings,
  } = useNewsSettings();

  const [isConfirmExitModalOpen, setIsConfirmExitModalOpen] = useState(false);
  const [isConfirmResetModalOpen, setIsConfirmResetModalOpen] = useState(false);
  const [localCountries, setLocalCountries] = useState(choosenCountries);
  const [localLanguages, setLocalLanguages] = useState(choosenLanguages);

  useEffect(() => {
    setLocalCountries(choosenCountries);
    setLocalLanguages(choosenLanguages);
  }, [choosenCountries, choosenLanguages]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      if (
        localCountries !== choosenCountries ||
        localLanguages !== choosenLanguages
      ) {
        setIsConfirmExitModalOpen(true);
      } else {
        onClose();
      }
    }
  };

  const availableLanguages = Array.from(
    new Map(
      localCountries
        .flatMap(
          (code) =>
            countries.find((country) => country.code === code)?.languages || []
        )
        .map((lang) => [lang.code, lang])
    ).values()
  );

  const toggleCountry = (countryCode) => {
    setLocalCountries((prev) => {
      if (prev.includes(countryCode)) {
        if (prev.length > 1) {
          const updatedCountries = prev.filter((code) => code !== countryCode);

          const removedCountry = countries.find(
            (country) => country.code === countryCode
          );
          const languagesToRemove = removedCountry.languages
            .map((lang) => lang.code)
            .filter((langCode) => langCode !== 'en');

          setLocalLanguages((currentLanguages) => {
            const updatedLanguages = currentLanguages.filter(
              (lang) => !languagesToRemove.includes(lang)
            );

            if (updatedLanguages.length === 0) {
              return ['en'];
            }

            if (updatedLanguages.length === 1 && updatedLanguages[0] === 'en') {
              return ['en'];
            }

            return updatedLanguages;
          });

          return updatedCountries;
        } else {
          return prev;
        }
      }

      return [...prev, countryCode];
    });
  };

  const toggleLanguage = (languageCode) => {
    setLocalLanguages((prev) => {
      if (prev.includes(languageCode)) {
        return prev.length > 1
          ? prev.filter((code) => code !== languageCode)
          : prev;
      }
      return [...prev, languageCode];
    });
  };

  const handleReset = () => {
    setIsConfirmResetModalOpen(true);
  };

  const handleConfirmReset = () => {
    resetSettings();
    setIsConfirmResetModalOpen(false);
    onClose();
  };

  function handleSave() {
    setChoosenCountries(localCountries);
    setChoosenLanguages(localLanguages);
    onClose();
  }

  function handleConfirmExit() {
    setLocalCountries(choosenCountries);
    setLocalLanguages(choosenLanguages);
    setIsConfirmExitModalOpen(false);
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className={s.modal_overlay} onClick={handleOverlayClick}>
      <div className={s.modal}>
        <h3>Settings</h3>
        <div className={s.modal_content}>
          <div className={s.content_inner}>
            <span>News regions</span>
            <div className={s.choose_items_container}>
              {countries.map((country) => (
                <ChooseBtn
                  key={country.code}
                  text={country.name}
                  isActive={localCountries.includes(country.code)}
                  onClick={() => toggleCountry(country.code)}
                />
              ))}
            </div>
          </div>
          <div className={s.content_inner}>
            <span>Available languages</span>
            <div className={s.choose_items_container}>
              {availableLanguages.map((language) => (
                <ChooseBtn
                  key={language.code}
                  text={language.name}
                  isActive={localLanguages.includes(language.code)}
                  onClick={() => toggleLanguage(language.code)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={s.button_container}>
          <Button text='Reset' color='red' onClick={handleReset} />
          <Button text='Save' color='green' onClick={handleSave} />
        </div>

        <ConfirmActionModal
          isOpen={isConfirmResetModalOpen}
          onClose={() => setIsConfirmResetModalOpen(false)}
          onConfirm={handleConfirmReset}
          message='You are about to reset settings. Are you sure?'
        />

        <ConfirmActionModal
          isOpen={isConfirmExitModalOpen}
          onClose={() => setIsConfirmExitModalOpen(false)}
          onConfirm={handleConfirmExit}
          message='You have unsaved changes. Are you sure you want to leave without saving them?'
        />
      </div>
    </div>
  );
}
