'use client';

import {
  Code2,
  Database,
  Github,
  Cpu,
  FileJson,
  Terminal,
  Container,
  Layout,
  Cloud,
  Settings,
  Zap,
  Smartphone,
  Workflow,
  Globe,
  Users,
  Layers,
  Wind,
  Shield,
  Key
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const skillsData = [
  { name: 'Flutter', icon: <Smartphone className="text-cyan-400" />, level: 95, categoryKey: 'skills.category_mobile_dev' },
  { name: 'Riverpod', icon: <Layers className="text-blue-500" />, level: 90, categoryKey: 'skills.category_mobile_dev' },
  { name: 'Provider', icon: <Workflow className="text-teal-400" />, level: 85, categoryKey: 'skills.category_mobile_dev' },
  { name: 'go_router', icon: <Globe className="text-indigo-400" />, level: 85, categoryKey: 'skills.category_mobile_dev' },
  { name: 'Figma', icon: <Layout className="text-pink-500" />, level: 90, categoryKey: 'skills.category_mobile_dev' },
  { name: 'Google AdMob', icon: <Smartphone className="text-amber-500" />, level: 85, categoryKey: 'skills.category_mobile_dev' },

  { name: 'React', icon: <Code2 className="text-blue-400" />, level: 90, categoryKey: 'skills.category_web_dev' },
  { name: 'Node.js', icon: <Code2 className="text-green-500" />, level: 85, categoryKey: 'skills.category_web_dev' },
  { name: 'Laravel (PHP)', icon: <Code2 className="text-red-500" />, level: 85, categoryKey: 'skills.category_web_dev' },
  { name: 'ASP.NET (C#)', icon: <Code2 className="text-purple-600" />, level: 90, categoryKey: 'skills.category_web_dev' },
  { name: 'Angular', icon: <Code2 className="text-red-600" />, level: 80, categoryKey: 'skills.category_web_dev' },
  { name: 'Spring Boot', icon: <Code2 className="text-green-600" />, level: 80, categoryKey: 'skills.category_web_dev' },
  { name: 'Webflow', icon: <Layers className="text-blue-500" />, level: 90, categoryKey: 'skills.category_web_dev' },

  { name: 'Dart', icon: <Code2 className="text-cyan-500" />, level: 90, categoryKey: 'skills.category_languages' },
  { name: 'JavaScript', icon: <FileJson className="text-yellow-400" />, level: 90, categoryKey: 'skills.category_languages' },
  { name: 'Python', icon: <Code2 className="text-yellow-500" />, level: 80, categoryKey: 'skills.category_languages' },
  { name: 'C#', icon: <Code2 className="text-purple-600" />, level: 90, categoryKey: 'skills.category_languages' },
  { name: 'Java', icon: <Code2 className="text-red-500" />, level: 85, categoryKey: 'skills.category_languages' },
  { name: 'C', icon: <Code2 className="text-blue-500" />, level: 85, categoryKey: 'skills.category_languages' },
  { name: 'PHP', icon: <Code2 className="text-purple-400" />, level: 85, categoryKey: 'skills.category_languages' },
  { name: 'HTML/CSS', icon: <Layout className="text-orange-500" />, level: 95, categoryKey: 'skills.category_languages' },

  { name: 'MySQL', icon: <Database className="text-blue-600" />, level: 90, categoryKey: 'skills.category_databases' },
  { name: 'SQL Server', icon: <Database className="text-red-600" />, level: 90, categoryKey: 'skills.category_databases' },
  { name: 'PostgreSQL', icon: <Database className="text-blue-400" />, level: 85, categoryKey: 'skills.category_databases' },
  { name: 'Supabase', icon: <Zap className="text-green-500" />, level: 85, categoryKey: 'skills.category_databases' },
  { name: 'Oracle', icon: <Database className="text-red-500" />, level: 80, categoryKey: 'skills.category_databases' },

  { name: 'Docker', icon: <Container className="text-blue-600" />, level: 75, categoryKey: 'skills.category_devops_tools' },
  { name: 'Kubernetes', icon: <Cloud className="text-blue-500" />, level: 70, categoryKey: 'skills.category_devops_tools' },
  { name: 'Tor & Réseau sécurisé', icon: <Shield className="text-emerald-500" />, level: 85, categoryKey: 'skills.category_devops_tools' },
  { name: 'OAuth2 / Google Sign-In', icon: <Key className="text-amber-500" />, level: 90, categoryKey: 'skills.category_devops_tools' },
  { name: 'Git/GitHub', icon: <Github className="text-black dark:text-white" />, level: 90, categoryKey: 'skills.category_devops_tools' },
  { name: 'Make.com', icon: <Workflow className="text-purple-500" />, level: 90, categoryKey: 'skills.category_devops_tools' },
  { name: 'GoHighLevel', icon: <Users className="text-blue-600" />, level: 85, categoryKey: 'skills.category_devops_tools' },
  { name: 'UML', icon: <Code2 className="text-gray-600" />, level: 85, categoryKey: 'skills.category_devops_tools' },

  { name: 'LLM embarqué (GGUF)', icon: <Cpu className="text-purple-400" />, level: 88, categoryKey: 'skills.category_frameworks_libs' },
  { name: 'Odoo ERP', icon: <Layers className="text-purple-600" />, level: 85, categoryKey: 'skills.category_frameworks_libs' },
  { name: 'Flask', icon: <Code2 className="text-gray-700 dark:text-gray-300" />, level: 80, categoryKey: 'skills.category_frameworks_libs' },
  { name: 'Bootstrap', icon: <Layout className="text-purple-500" />, level: 85, categoryKey: 'skills.category_frameworks_libs' },
  { name: 'Windows Forms', icon: <Layout className="text-blue-500" />, level: 85, categoryKey: 'skills.category_frameworks_libs' },
  { name: 'Web Forms', icon: <Layout className="text-blue-400" />, level: 80, categoryKey: 'skills.category_frameworks_libs' },
  { name: 'Swing', icon: <Layout className="text-red-400" />, level: 75, categoryKey: 'skills.category_frameworks_libs' },
  { name: 'JavaFX', icon: <Layout className="text-orange-400" />, level: 80, categoryKey: 'skills.category_frameworks_libs' },
];

export default function Skills() {
  const { t } = useTranslation();
  const categories = Array.from(new Set(skillsData.map(skill => skill.categoryKey)));

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl mb-8 font-black text-xs uppercase tracking-[0.2em] border border-blue-100/50 dark:border-blue-800/50">
            <span>{t('skills.section_title')}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
            {t('skills.main_title_part1')} <span className="text-blue-600">{t('skills.main_title_part2')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
            {t('skills.intro_text')}
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((categoryKey) => (
            <div key={categoryKey}>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-8 pl-4 border-l-4 border-blue-600">
                {t(categoryKey)}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillsData.filter(skill => skill.categoryKey === categoryKey).map((skill) => (
                  <div
                    key={skill.name}
                    className="group bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-blue-600/5 transition-all border border-gray-100 dark:border-gray-700"
                  >
                    <div className="w-14 h-14 bg-gray-50 dark:bg-gray-900 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      {skill.icon}
                    </div>
                    <div className="mb-2">
                      <h4 className="text-lg font-black text-gray-900 dark:text-white mt-1">{skill.name}</h4>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
