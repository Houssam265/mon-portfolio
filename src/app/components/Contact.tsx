'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: t('contact.status_success') });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('send_error');
      }
    } catch (error) {
      setStatus({ type: 'error', message: t('contact.status_error') });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl mb-8 font-black text-xs uppercase tracking-[0.2em] border border-blue-100/50 dark:border-blue-800/50">
            <span>{t('contact.badge')}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
            {t('contact.title_part1')}{' '}
            <span className="text-blue-600">{t('contact.title_part2')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white dark:bg-slate-800 rounded-[3.5rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-blue-600 p-12 lg:p-16 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-4xl font-black mb-8 tracking-tight">{t('contact.card_title')}</h3>
                <p className="text-blue-100 mb-12 text-lg font-medium leading-relaxed">
                  {t('contact.card_text')}
                </p>

                <div className="space-y-10">
                  <div className="flex items-center space-x-6 group">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
                      <Mail size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs font-black uppercase tracking-widest mb-1">
                        {t('contact.email_label')}
                      </p>
                      <a href="mailto:hariss.houssam@etu.uae.ac.ma" className="text-lg font-black hover:underline underline-offset-4">
                        hariss.houssam@etu.uae.ac.ma
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 group">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
                      <Phone size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs font-black uppercase tracking-widest mb-1">
                        {t('contact.phone_label')}
                      </p>
                      <a href="tel:+212762760701" className="text-lg font-black hover:underline underline-offset-4">
                        +212 762 760 701
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 group">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
                      <MapPin size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs font-black uppercase tracking-widest mb-1">
                        {t('contact.location_label')}
                      </p>
                      <p className="text-lg font-black">{t('contact.location_value')}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 flex space-x-6">
                  <a href="https://linkedin.com/in/harisshoussam" className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://github.com/Houssam265" className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all">
                    <Github size={24} />
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="lg:w-3/5 p-12 lg:p-16 bg-white dark:bg-slate-800">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest ml-1">
                      {t('contact.form_name_label')}
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder={t('contact.form_name_placeholder')}
                      className="w-full px-8 py-5 bg-gray-50 dark:bg-slate-900 border-2 border-transparent text-gray-900 dark:text-white rounded-[2rem] focus:outline-none focus:border-blue-600 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest ml-1">
                      {t('contact.form_email_label')}
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder={t('contact.form_email_placeholder')}
                      className="w-full px-8 py-5 bg-gray-50 dark:bg-slate-900 border-2 border-transparent text-gray-900 dark:text-white rounded-[2rem] focus:outline-none focus:border-blue-600 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest ml-1">
                    {t('contact.form_subject_label')}
                  </label>
                  <input
                    name="subject"
                    type="text"
                    required
                    placeholder={t('contact.form_subject_placeholder')}
                    className="w-full px-8 py-5 bg-gray-50 dark:bg-slate-900 border-2 border-transparent text-gray-900 dark:text-white rounded-[2rem] focus:outline-none focus:border-blue-600 transition-all font-medium"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest ml-1">
                    {t('contact.form_message_label')}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder={t('contact.form_message_placeholder')}
                    className="w-full px-8 py-5 bg-gray-50 dark:bg-slate-900 border-2 border-transparent text-gray-900 dark:text-white rounded-[2rem] focus:outline-none focus:border-blue-600 transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 bg-gray-900 dark:bg-blue-600 text-white rounded-[2rem] font-black text-lg flex items-center justify-center space-x-3 hover:bg-gray-800 dark:hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/10 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <span>{t('contact.button_send')}</span>
                      <Send size={22} strokeWidth={3} />
                    </>
                  )}
                </button>

                {status.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-6 rounded-[2rem] text-sm font-black text-center ${status.type === 'success'
                      ? 'bg-emerald-50 text-emerald-600 border-2 border-emerald-100'
                      : 'bg-red-50 text-red-600 border-2 border-red-100'
                      }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
