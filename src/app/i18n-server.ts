import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { i18n } from './i18n-config';

const initI18next = async (lng: string, ns: string | string[]) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}.json`)))
    .init({
      lng,
      ns,
      fallbackLng: i18n.defaultLocale,
      defaultNS: 'translation',
      preload: typeof window === 'undefined' ? i18n.locales : [],
    });
  return i18nInstance;
};

export async function useTranslation(lng: string, ns: string | string[] = 'translation', options = {}) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(lng, ns),
    i18n: i18nextInstance,
  };
}
