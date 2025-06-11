import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { interpolate } from 'framer-motion';

const resources = {
  ru: {
    translation: {
        "description": "Веб-разработчик с глубоким пониманием современных технологий, таких как <1>Vue.js</1>, <2>React</2>, <3>Nuxt.js</3>, <4>HTML</4> и <5>CSS</5>. Мой опыт позволяет мне создавать интерактивные, производительные и отзывчивые веб-приложения, соответствующие лучшим практикам индустрии.",
        "schedule": "Расписание",
        "colorchange": "Сменить цвет",
        "notfound": "Страница не найдена",
        "back": "Назад",
        "abandoned": "Временно заброшено",
        "language": "Язык",
        "lang-ru": "Русский",
        "lang-en": "Английский",
    }
  },
  en: {
    translation: {
        "description": "Web developer with a deep understanding of modern technologies such as <1>Vue.js</1>, <2>React</2>, <3>Nuxt.js</3>, <4>HTML</4> and <5>CSS</5>. My experience allows me to build interactive, performant and responsive web applications in line with industry best practices.",
        "schedule": "Schedule",
        "colorchange": "Change color",
        "notfound": "Page not found",
        "back": "Back",
        "abandoned": "Temporarily abandoned",
        "language": "Language",
        "lang-ru": "Russian",
        "lang-en": "English",
    }
  }
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "ru",
        fallbackLng: 'ru',
        debug: true,
        // interpolation: {
        //   escapeValue: false,
        // }
    });

export default i18n;