'use client';

import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800 text-center transition-colors duration-300">
      <div className="container mx-auto px-6">
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          {t('footer.copyright', { year: currentYear })}
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
          {t('footer.description')}
        </p>
      </div>
    </footer>
  );
}
