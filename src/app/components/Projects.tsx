'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Code2, MonitorPlay, Play, X, CheckCircle2, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectItem {
  titleKey: string;
  descriptionKey: string;
  image: string;
  tags: string[];
  github?: string | null;
  demo?: string | null;
  video?: string | null;
  features?: string[];
}

const projectsData: ProjectItem[] = [
  {
    titleKey: 'projects.project_allojn_title',
    descriptionKey: 'projects.project_allojn_description',
    image: '/projects/allojn.jpg',
    tags: ['Flutter', 'Dart', 'Figma', 'Riverpod', 'go_router'],
    // Repo privé — propriété de l'entreprise AGH
    demo: null,
  },
  {
    titleKey: 'projects.project_tontine_crypto_title',
    descriptionKey: 'projects.project_tontine_crypto_description',
    image: '/projects/tontine-crypto.jpg',
    tags: ['Flutter', 'Web3 / Wallet', 'Smart Contracts', 'Polygon', 'Biométrie'],
    // Repo privé — propriété de l'entreprise AGH
    demo: null,
  },
  {
    titleKey: 'projects.project_tor_embedded_title',
    descriptionKey: 'projects.project_tor_embedded_description',
    image: '/projects/tor-embedded.jpg',
    tags: ['Android NDK', 'Tor / .onion', 'SOCKS5h', 'ProGuard', 'Sécurité'],
    // Repo privé — propriété de l'entreprise AGH
    demo: null,
  },
  {
    titleKey: 'projects.project_embedded_ai_title',
    descriptionKey: 'projects.project_embedded_ai_description',
    image: '/projects/embedded-ai.jpg',
    tags: ['llama.cpp', 'Vulkan', 'Flutter', 'SLM / GGUF', 'Local AI'],
    // Repo privé — propriété de l'entreprise AGH
    demo: null,
  },
  {
    titleKey: 'projects.project_garage_management_title',
    descriptionKey: 'projects.project_garage_management_description',
    image: '/projects/garage-management-kanban.png',
    tags: ['ERP Odoo 19', 'Python', 'PostgreSQL 16', 'Docker', 'Flask', 'XML-RPC'],
    github: 'https://github.com/Houssam265/garage-management-odoo',
    demo: null,
    video: '/garage-management-demo.mp4',
    features: [
      'projects.project_garage_management_feature_1',
      'projects.project_garage_management_feature_2',
      'projects.project_garage_management_feature_3',
      'projects.project_garage_management_feature_4',
      'projects.project_garage_management_feature_5',
      'projects.project_garage_management_feature_6',
      'projects.project_garage_management_feature_7',
      'projects.project_garage_management_feature_8',
    ],
  },
  {
    titleKey: 'projects.project_giftplan_title',
    descriptionKey: 'projects.project_giftplan_description',
    image: '/projects/giftplan.png',
    tags: ['Flutter', 'Dart', 'Supabase', 'Mobile App'],
    github: 'https://github.com/harisshoussam/application-mobile-GIFT-PLANNING-.git',
    demo: 'https://giftplan.ct.ws/',
  },
  {
    titleKey: 'projects.project_agileflow_title',
    descriptionKey: 'projects.project_agileflow_description',
    image: '/projects/agileflow.jpg',
    tags: ['Spring Boot 3', 'Angular 17', 'MySQL', 'JWT', 'Kanban', 'Rapports PDF'],
    github: 'https://github.com/Houssam265/AgileFlow.git',
    demo: 'https://agileflow-mu.vercel.app',
  },
  {
    titleKey: 'projects.project_chrionline_title',
    descriptionKey: 'projects.project_chrionline_description',
    image: '/projects/chrionline.jpg',
    tags: ['Java', 'JavaFX', 'MySQL', 'Sockets TCP/UDP', 'Sécurité Réseau'],
    github: 'https://github.com/Houssam265/Application-JAVA-E-Commerce-ChriOnline-.git',
    demo: null,
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
  const [activeVideoProject, setActiveVideoProject] = useState<ProjectItem | null>(null);

  // Close modal on Escape key press and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideoProject(null);
      }
    };
    if (activeVideoProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeVideoProject]);

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
          {projectsData.map((project) => (
            <div
              key={project.titleKey}
              className="group relative bg-white dark:bg-slate-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div
                className={`relative h-64 w-full overflow-hidden bg-gray-100 dark:bg-slate-900 ${
                  project.video ? 'cursor-pointer' : ''
                }`}
                onClick={() => {
                  if (project.video) setActiveVideoProject(project);
                }}
              >
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

                {/* Video Badge */}
                {project.video && (
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wide shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>{t('projects.badge_video')}</span>
                  </div>
                )}

                {/* Company Project Badge */}
                {!project.github && (
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wide shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span>{t('projects.badge_company')}</span>
                  </div>
                )}

                {/* Play Button Overlay for Video */}
                {project.video && (
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-300 hover:bg-white hover:scale-110">
                      <Play size={26} className="fill-slate-900 translate-x-0.5" />
                    </div>
                  </div>
                )}

                {/* Overlay gradient */}
                {!project.video && (
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                  {t(project.titleKey)}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium text-sm flex-grow">
                  {t(project.descriptionKey)}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-blue-100 dark:border-blue-800/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold rounded-xl transition-colors text-sm"
                    >
                      <Github size={18} />
                      <span>{t('projects.button_code')}</span>
                    </a>
                  )}

                  {project.video ? (
                    <button
                      type="button"
                      onClick={() => setActiveVideoProject(project)}
                      className="flex-1 inline-flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all text-sm shadow-lg shadow-blue-600/25 active:scale-95 cursor-pointer"
                    >
                      <MonitorPlay size={18} />
                      <span>{t('projects.button_video')}</span>
                    </button>
                  ) : project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors text-sm shadow-lg shadow-blue-600/20"
                    >
                      <ExternalLink size={18} />
                      <span>{t('projects.button_demo')}</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Demonstration Modal */}
      {activeVideoProject && activeVideoProject.video && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md transition-all duration-300"
          onClick={() => setActiveVideoProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-slate-800 bg-gray-50/70 dark:bg-slate-900/70 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <MonitorPlay size={20} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-gray-900 dark:text-white tracking-tight">
                    {t(activeVideoProject.titleKey)}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
                    <Sparkles size={12} />
                    <span>{t('projects.modal_video_badge')}</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoProject(null)}
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label={t('projects.modal_close')}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 space-y-6">
              {/* Video Player */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner border border-gray-200 dark:border-slate-800">
                <video
                  src={activeVideoProject.video}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                >
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {activeVideoProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-wider rounded-lg border border-blue-100 dark:border-blue-800/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium text-sm md:text-base">
                {t(activeVideoProject.descriptionKey)}
              </p>

              {/* Key Features List */}
              {activeVideoProject.features && activeVideoProject.features.length > 0 && (
                <div className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-gray-100 dark:border-slate-700/50">
                  <h4 className="text-base font-black text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                    <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400" />
                    <span>{t('projects.modal_key_features')}</span>
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeVideoProject.features.map((featKey, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                        <span>{t(featKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 dark:border-slate-800 bg-gray-50/70 dark:bg-slate-900/70">
              {activeVideoProject.github ? (
                <a
                  href={activeVideoProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm shadow-md"
                >
                  <Github size={18} />
                  <span>{t('projects.button_code')}</span>
                </a>
              ) : (
                <div />
              )}
              <button
                type="button"
                onClick={() => setActiveVideoProject(null)}
                className="px-5 py-2.5 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 font-bold rounded-xl transition-colors text-sm cursor-pointer"
              >
                {t('projects.modal_close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


