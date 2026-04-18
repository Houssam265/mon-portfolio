'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Download, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';
import { i18n } from '../i18n-config';

const navLinks = [
  { name: 'navbar.accueil', href: '/' },
  { name: 'navbar.à propos', href: '/about' },
  { name: 'navbar.compétences', href: '/skills' },
  { name: 'navbar.expériences', href: '/experiences' },
  { name: 'navbar.projets', href: '/projects' },
  { name: 'navbar.activités', href: '/activities' },
  { name: 'navbar.contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { t, i18n: i18nInstance } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18nInstance.language === 'fr' ? 'en' : 'fr';
    i18nInstance.changeLanguage(newLang);
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-gray-100/50 dark:border-gray-800/50 py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="group flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
            H
          </div>
          <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">
            HOUSSAM<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center bg-gray-100/50 dark:bg-slate-800/50 backdrop-blur-md px-2 py-1.5 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-6 py-2 rounded-xl transition-all duration-300 font-bold text-sm ${pathname === link.href
                ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
            >
              {t(link.name)}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-3 rounded-xl bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm border border-gray-100 dark:border-gray-700 transition-all active:scale-95"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />}
            </button>
          )}
          <button
            onClick={toggleLanguage}
            className="p-3 rounded-xl bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm border border-gray-100 dark:border-gray-700 transition-all active:scale-95 font-bold"
            aria-label="Toggle language"
          >
            {i18nInstance.language.toUpperCase()}
          </button>

          <a
            href="/CV_Hariss_Houssam.pdf"
            download
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all text-sm font-black shadow-lg shadow-blue-600/20 active:scale-95"
          >
            <Download size={18} strokeWidth={3} />
            <span>{t('navbar.cv_button')}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 font-bold"
            aria-label="Toggle language"
          >
            {i18nInstance.language.toUpperCase()}
          </button>
          <button
            className="text-gray-900 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                >
                  {t(link.name)}
                </Link>
              ))}
              <a
                href="/CV_Hariss_Houssam.pdf"
                download
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-4 rounded-2xl font-black shadow-lg shadow-blue-600/20 active:scale-95 mt-4"
              >
                <Download size={20} strokeWidth={3} />
                <span>{t('navbar.cv_button_mobile')}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
