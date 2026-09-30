'use client';

import { Briefcase, Calendar, MapPin, Building2, Globe, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const experiencesData = [
    {
        titleKey: 'experience.agh_title',
        companyKey: 'experience.agh_company',
        locationKey: 'experience.agh_location',
        periodKey: 'experience.agh_period',
        durationKey: 'experience.agh_duration',
        typeKey: 'experience.agh_type',
        descriptionKeys: [
            'experience.agh_description_1',
            'experience.agh_description_2',
            'experience.agh_description_3',
            'experience.agh_description_4',
            'experience.agh_description_5'
        ],
        tech: ['Flutter', 'Dart', 'Riverpod', 'Provider', 'go_router', 'Figma', 'Tor / NDK', 'SLM / llama.cpp', 'Google AdMob', 'OAuth2'],
        highlight: true
    },
    {
        titleKey: 'experience.data_replies_title',
        companyKey: 'experience.data_replies_company',
        locationKey: 'experience.data_replies_location',
        periodKey: 'experience.data_replies_period',
        durationKey: 'experience.data_replies_duration',
        typeKey: 'experience.data_replies_type',
        descriptionKeys: [
            'experience.data_replies_description_1',
            'experience.data_replies_description_2',
            'experience.data_replies_description_3',
            'experience.data_replies_description_4'
        ],
        tech: ['Webflow', 'Python', 'SQL', 'JSON', 'APIs', 'Automation'],
        highlight: true,
        certificate: '/certificates/DataReplies_Certificate.pdf'
    },
    {
        titleKey: 'experience.cairo_maroc_title',
        companyKey: 'experience.cairo_maroc_company',
        subCompanyKey: 'experience.cairo_maroc_subcompany',
        locationKey: 'experience.cairo_maroc_location',
        periodKey: 'experience.cairo_maroc_period',
        durationKey: 'experience.cairo_maroc_duration',
        typeKey: 'experience.cairo_maroc_type',
        descriptionKeys: [
            'experience.cairo_maroc_description_1',
            'experience.cairo_maroc_description_2',
            'experience.cairo_maroc_description_3'
        ],
        tech: ['Développement Web', 'Intégration', 'Analyse des besoins'],
        certificate: '/certificates/Cairo_Maroc_Certificate.pdf'
    }
];

export default function Experience() {
    const { t } = useTranslation();
    return (
        <section id="experience" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl mb-8 font-black text-xs uppercase tracking-[0.2em] border border-blue-100/50 dark:border-blue-800/50">
                        <span>{t('experience.section_title')}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
                        {t('experience.main_title_part1')} <span className="text-blue-600">{t('experience.main_title_part2')}</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        {t('experience.intro_text')}
                    </p>
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                    {experiencesData.map((exp, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                            {/* Icon/Timeline dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-blue-600 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:static md:left-auto">
                                <Briefcase size={18} />
                            </div>

                            {/* Content Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0 p-8 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                            {t(exp.titleKey)}
                                        </h3>
                                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm">
                                            <Building2 size={16} className="mr-2" />
                                            {t(exp.companyKey)}
                                            {exp.subCompanyKey && <span className="text-gray-500 dark:text-gray-500 ml-1">({t(exp.subCompanyKey)})</span>}
                                        </div>
                                    </div>
                                    <div className="flex flex-row md:flex-col items-start md:items-end text-sm text-gray-500 font-medium">
                                        <div className="flex items-center mb-1">
                                            <Calendar size={14} className="mr-2" />
                                            {t(exp.periodKey)} ({t(exp.durationKey)})
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin size={14} className="mr-2" />
                                            {t(exp.locationKey)}
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {exp.descriptionKeys.map((descKey, i) => (
                                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></span>
                                            <span>{t(descKey)}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-lg"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* 
                                    {exp.certificate && (
                                        <a
                                            href={exp.certificate}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl text-xs font-bold hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                                        >
                                            <FileText size={14} />
                                            <span>{t('experience.view_certificate')}</span>
                                        </a>
                                    )}
                                    */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
