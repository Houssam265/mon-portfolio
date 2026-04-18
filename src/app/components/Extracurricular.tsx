'use client';

import { Heart, Paintbrush, Users, Calendar, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Extracurricular() {
  const { t } = useTranslation();
  const skills = [
    t('activities.skill_leadership'),
    t('activities.skill_project_management'),
    t('activities.skill_fundraising'),
    t('activities.skill_teamwork'),
    t('activities.skill_community'),
    t('activities.skill_planning'),
  ];

  return (
    <section id="activities" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
            {t('activities.section_title_main')}{' '}
            <span className="text-pink-600">{t('activities.section_title_highlight')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
            {t('activities.section_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:col-span-2 relative group bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-14 shadow-xl shadow-blue-900/5 border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-600/30 shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Users size={40} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                    {t('activities.club_title')}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 font-bold mb-2">
                    <span className="flex items-center gap-2">
                      <Calendar size={18} />
                      {t('activities.club_period')}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <span>{t('activities.club_location')}</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none">
                <p className="text-2xl font-bold leading-relaxed mb-10 text-gray-800 dark:text-gray-200">
                  <span className="text-blue-600 underline decoration-blue-300 decoration-4 underline-offset-4">
                    {t('activities.club_events_title')}
                  </span>{' '}
                  {t('activities.club_intro')}
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-12">
                  <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-800/30">
                    <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                      <Calendar className="text-blue-600" size={24} />
                      {t('activities.club_events_title')}
                    </h4>
                    <p className="text-sm font-medium leading-relaxed">
                      {t('activities.club_events_text')}
                    </p>
                  </div>

                  <div className="bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-800/30">
                    <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                      <Users className="text-indigo-600" size={24} />
                      {t('activities.club_support_title')}
                    </h4>
                    <p className="text-sm font-medium leading-relaxed">
                      {t('activities.club_support_text')}
                    </p>
                  </div>

                  <div className="bg-cyan-50 dark:bg-cyan-900/10 p-8 rounded-3xl border border-cyan-100 dark:border-cyan-800/30">
                    <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                      <Users className="text-cyan-600" size={24} />
                      {t('activities.club_management_title')}
                    </h4>
                    <p className="text-sm font-medium leading-relaxed">
                      {t('activities.club_management_text')}
                    </p>
                  </div>

                  <div className="bg-teal-50 dark:bg-teal-900/10 p-8 rounded-3xl border border-teal-100 dark:border-teal-800/30">
                    <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                      <Award className="text-teal-600" size={24} />
                      {t('activities.club_watch_title')}
                    </h4>
                    <p className="text-sm font-medium leading-relaxed">
                      {t('activities.club_watch_text')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 relative group bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-14 shadow-xl shadow-pink-900/5 border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5 dark:opacity-10 pointer-events-none">
              <Heart size={300} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="w-20 h-20 bg-pink-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-pink-600/30 shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Award size={40} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                    {t('activities.solidarity_title')}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 font-bold mb-2">
                    <span className="flex items-center gap-2">
                      <Calendar size={18} />
                      {t('activities.solidarity_period')}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <span>{t('activities.solidarity_location')}</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none">
                <p className="text-2xl font-bold leading-relaxed mb-10 text-gray-800 dark:text-gray-200">
                  {t('activities.solidarity_intro')}
                </p>

                <div className="grid md:grid-cols-3 gap-8 my-12">
                  <div className="bg-pink-50 dark:bg-pink-900/10 p-8 rounded-3xl border border-pink-100 dark:border-pink-800/30">
                    <div className="bg-white dark:bg-gray-800 w-12 h-12 rounded-2xl flex items-center justify-center text-pink-600 mb-6 shadow-sm">
                      <Users size={24} />
                    </div>
                    <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                      {t('activities.solidarity_fund_title')}
                    </h4>
                    <p className="text-sm font-medium leading-relaxed">
                      {t('activities.solidarity_fund_text')}
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-800/30">
                    <div className="bg-white dark:bg-gray-800 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                      <Paintbrush size={24} />
                    </div>
                    <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                      {t('activities.solidarity_renovation_title')}
                    </h4>
                    <p className="text-sm font-medium leading-relaxed">
                      {t('activities.solidarity_renovation_text')}
                    </p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/10 p-8 rounded-3xl border border-purple-100 dark:border-purple-800/30">
                    <div className="bg-white dark:bg-gray-800 w-12 h-12 rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-sm">
                      <Heart size={24} />
                    </div>
                    <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                      {t('activities.solidarity_iftar_title')}
                    </h4>
                    <p className="text-sm font-medium leading-relaxed">
                      {t('activities.solidarity_iftar_text')}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-slate-800/50 text-gray-900 dark:text-white p-8 rounded-3xl mt-12 border border-gray-100 dark:border-gray-700">
                  <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-gray-500 dark:text-gray-400">
                    {t('activities.skills_title')}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-white dark:bg-slate-700 rounded-xl font-bold text-sm text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-slate-600 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
