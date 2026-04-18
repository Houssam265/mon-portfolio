'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pb-20 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl mb-8 font-black text-xs uppercase tracking-[0.2em] border border-blue-100/50 dark:border-blue-800/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-400"></span>
            </span>
            <span>{t('hero.tagline')}</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-8 leading-[0.9] tracking-tighter">
            {t('hero.title_part1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 italic">{t('hero.title_part2')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-lg leading-relaxed font-medium">
            {t('hero.description_part1')} <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-500/30 decoration-4 underline-offset-4">{t('hero.description_part2')}</span>.
            {t('hero.description_part3')} <span className="text-blue-600 dark:text-blue-400 font-bold italic">{t('hero.description_part4')}</span>.
          </p>

          <div className="flex flex-wrap gap-5 mb-14">
            <Link
              href="/about"
              className="px-10 py-5 bg-gray-900 dark:bg-blue-600 text-white rounded-2xl font-black flex items-center space-x-3 hover:bg-gray-800 dark:hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/10 hover:-translate-y-1 active:scale-95"
            >
              <span>{t('hero.button_path')}</span>
              <ArrowRight size={22} strokeWidth={3} />
            </Link>
            <a
              href="/CV_Hariss_Houssam.pdf"
              download
              className="px-10 py-5 border-2 border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-2xl font-black flex items-center space-x-3 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:-translate-y-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm active:scale-95"
            >
              <Download size={22} strokeWidth={3} />
              <span>{t('hero.button_cv')}</span>
            </a>
          </div>

          <div className="flex space-x-8 text-gray-400 dark:text-gray-600">
            {[
              { icon: Github, href: "https://github.com/harisshoussam" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/harisshoussam" },
              { icon: Mail, href: "/contact", isLink: true }
            ].map((social, i) => (
              social.isLink ? (
                <Link key={i} href={social.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110">
                  <social.icon size={32} strokeWidth={2} />
                </Link>
              ) : (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110">
                  <social.icon size={32} strokeWidth={2} />
                </a>
              )
            ))}
          </div>
        </div>

        <div className="relative flex justify-center mt-12 md:mt-0">
          <div className="relative w-80 h-80 md:w-[550px] md:h-[550px]">
            {/* Background shapes */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[4rem] rotate-6 opacity-10 blur-2xl animate-pulse"></div>

            <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-[3.5rem] -rotate-3 overflow-hidden border-8 border-white dark:border-gray-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
              <Image
                src="/myPicture.png"
                alt="Hariss Houssam"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-8 -right-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-5 rounded-[2rem] shadow-2xl border border-white/50 dark:border-gray-700/50 flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-600/20 group-hover:rotate-12 transition-transform">D</div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">{t('hero.badge_docker_category')}</p>
                <p className="font-black text-gray-900 dark:text-white text-lg">{t('hero.badge_docker_name')}</p>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-5 rounded-[2rem] shadow-2xl border border-white/50 dark:border-gray-700/50 flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-500/20 group-hover:-rotate-12 transition-transform">K</div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">{t('hero.badge_kubernetes_category')}</p>
                <p className="font-black text-gray-900 dark:text-white text-lg">{t('hero.badge_kubernetes_name')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
