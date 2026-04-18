'use client';

import Image from 'next/image';
import { ExternalLink, Github, Code2, MonitorPlay } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const projectsData = [
  {
    titleKey: 'projects.project_giftplan_title',
    descriptionKey: 'projects.project_giftplan_description',
    image: '/projects/giftplan.png',
    tags: ['Flutter', 'Dart', 'Supabase', 'Mobile App'],
    github: 'https://github.com/harisshoussam/application-mobile-GIFT-PLANNING-.git',
    demo: 'https://giftplan.ct.ws/',
  },
  {
    titleKey: 'projects.project_automate_title',
    descriptionKey: 'projects.project_automate_description',
    image: '/projects/automate.png',
    tags: ['C', 'Algorithms', 'Théorie Langages'],
    github: 'https://github.com/harisshoussam/-automates-finis.git',
    demo: null,
  },
  {
    titleKey: 'projects.project_service_pro_title',
    descriptionKey: 'projects.project_service_pro_description',
    image: '/projects/service-pro.png',
    tags: ['Laravel 10', 'PHP', 'MySQL', 'Bootstrap', 'Google Maps'],
    github: 'https://github.com/harisshoussam/Service_pro-Laravel-PHP.git',
    demo: 'http://servicepro.wuaze.com/',
  },
  {
    titleKey: 'projects.project_ecommerce_title',
    descriptionKey: 'projects.project_ecommerce_description',
    image: '/projects/ecommerce.png',
    tags: ['ASP.NET', 'C#', 'SQL Server', 'Gemini AI'],
    github: 'https://github.com/harisshoussam/E-commerce-en-web-form.Net.git',
    demo: 'http://fromourlands.somee.com/',
  },
  {
    titleKey: 'projects.project_afcon_title',
    descriptionKey: 'projects.project_afcon_description',
    image: '/projects/afcon.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/harisshoussam/AFCON_MAROC_2025.git',
    demo: 'https://can2025-maroc.netlify.app',
  },
  {
    titleKey: 'projects.project_space_defender_title',
    descriptionKey: 'projects.project_space_defender_description',
    image: '/projects/space-defender.png',
    tags: ['Java', 'Swing', 'Game Dev'],
    github: 'https://github.com/harisshoussam/Game_Project_Java.git',
    demo: null,
  },
  {
    titleKey: 'projects.project_gestion_foot_title',
    descriptionKey: 'projects.project_gestion_foot_description',
    image: '/projects/gestion-foot.png',
    tags: ['PHP', 'MySQL', 'Web Dev'],
    github: 'https://github.com/harisshoussam/Gestion_terrain_Foot-PHP-.git',
    demo: null,
  },
  {
    titleKey: 'projects.project_hotel_docker_title',
    descriptionKey: 'projects.project_hotel_docker_description',
    image: '/projects/hotel.png',
    tags: ['Docker', 'Angular', 'PHP', 'DevOps'],
    github: 'https://github.com/harisshoussam/Hotel-Project-Docker-.git',
    demo: null,
  },
  {
    titleKey: 'projects.project_pharmacy_title',
    descriptionKey: 'projects.project_pharmacy_description',
    image: '/projects/pharmacy.png',
    tags: ['C#', 'Windows Forms', 'SQL Server'],
    github: 'https://github.com/harisshoussam/Gestion_Pharmacie-windows-form-.git',
    demo: null,
  },
];

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl mb-8 font-black text-xs uppercase tracking-[0.2em] border border-blue-100/50 dark:border-blue-800/50">
            <span>{t('projects.section_title')}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
            {t('projects.main_title_part1')} <span className="text-blue-600">{t('projects.main_title_part2')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
            {t('projects.intro_text')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project, index) => (
            <div
              key={project.titleKey}
              className="group relative bg-white dark:bg-slate-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-100 dark:bg-slate-900">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={t(project.titleKey)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300 dark:text-gray-600">
                    <Code2 size={64} />
                  </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">{t(project.titleKey)}</h3>

                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium text-sm flex-grow">
                  {t(project.descriptionKey)}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-blue-100 dark:border-blue-800/30">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold rounded-xl transition-colors text-sm"
                  >
                    <Github size={18} />
                    <span>{t('projects.button_code')}</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors text-sm shadow-lg shadow-blue-600/20"
                    >
                      <ExternalLink size={18} />
                      <span>{t('projects.button_demo')}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

