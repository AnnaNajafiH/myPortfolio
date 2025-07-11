import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoLanguage } from 'react-icons/io5';

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Update HTML lang attribute for SEO
    document.documentElement.lang = lng;
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
        aria-label={t('language.select')}
      >
        <IoLanguage className="w-5 h-5" />
        <span className="text-sm">{i18n.language === 'de' ? 'DE' : 'EN'}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 invisible group-hover:visible transition-all duration-200 opacity-0 group-hover:opacity-100">
        <div className="py-1" role="menu" aria-orientation="vertical">
          <button
            onClick={() => changeLanguage('en')}
            className={`block px-4 py-2 text-sm w-full text-left ${
              i18n.language === 'en'
                ? 'text-primary-500 dark:text-primary-400 bg-gray-100 dark:bg-gray-700'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            role="menuitem"
          >
            {t('language.en')}
          </button>
          <button
            onClick={() => changeLanguage('de')}
            className={`block px-4 py-2 text-sm w-full text-left ${
              i18n.language === 'de'
                ? 'text-primary-500 dark:text-primary-400 bg-gray-100 dark:bg-gray-700'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            role="menuitem"
          >
            {t('language.de')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
