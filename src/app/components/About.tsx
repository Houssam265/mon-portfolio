'use client';

import { BookOpen, Award, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl mb-8 font-black text-xs uppercase tracking-[0.2em] border border-blue-100/50 dark:border-blue-800/50">
            <span>{t('about.section_title')}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
            {t('about.main_title_part1')} <span className="text-blue-600">{t('about.main_title_part2')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
            {t('about.intro_text')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="prose prose-xl dark:prose-invert text-gray-600 dark:text-gray-400 max-w-none">
              <p className="text-2xl leading-relaxed font-medium">
                {t('about.name_intro')} <span className="text-gray-900 dark:text-white font-black underline decoration-blue-500 decoration-4 underline-offset-4">{t('about.name')}</span>, {t('about.engineer_status')}
              </p>
              <p className="leading-relaxed text-lg">
                {t('about.academic_path')} <span className="text-blue-600 dark:text-blue-400 font-bold">{t('about.devops')}</span>, <span className="text-blue-600 dark:text-blue-400 font-bold">{t('about.salesforce')}</span> et {t('about.automation')}
              </p>
            </div>

            <div className="relative group p-8 bg-gray-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 transition-all hover:shadow-2xl hover:shadow-blue-600/5 items-center">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 shrink-0">
                  <Target size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">{t('about.objective_title')}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                    {t('about.objective_description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8">
            <div className="group bg-gray-50 dark:bg-slate-800/50 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-blue-600/5 transition-all">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-600/20 group-hover:rotate-12 transition-transform">
                <BookOpen size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">{t('about.education_title')}</h3>
              <div className="space-y-4">
                <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden group/item hover:border-green-200 dark:hover:border-green-900 transition-all">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 h-full"></div>
                  <p className="font-black text-gray-900 dark:text-white text-lg">{t('about.bac_title')}</p>
                  <p className="text-green-600 dark:text-green-500 font-bold text-sm mb-1">{t('about.bac_school')}</p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs font-medium">{t('about.bac_date')}</p>
                </div>

                <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden group/item hover:border-blue-200 dark:hover:border-blue-900 transition-all">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 h-full"></div>
                  <p className="font-black text-gray-900 dark:text-white text-lg">{t('about.engineer_title')}</p>
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-1">{t('about.engineer_school')}</p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs font-medium">{t('about.engineer_date')}</p>
                </div>
              </div>
            </div>

            <div className="group bg-gray-50 dark:bg-slate-800/50 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-emerald-500/5 transition-all">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-500/20 group-hover:-rotate-12 transition-transform">
                <Award size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">{t('about.strengths_title')}</h3>
              <div className="flex flex-wrap gap-3">
                {[t('about.strength1'), t('about.strength2'), t('about.strength3'), t('about.strength4')].map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2.5 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-black border border-gray-100 dark:border-gray-700 shadow-sm group-hover:text-blue-600 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
