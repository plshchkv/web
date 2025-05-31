import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ru: {
    translation: {
        "description": "Веб-разработчик с глубоким пониманием современных технологий, таких как Vue.js, React, Nuxt.js, HTML и CSS. Мой опыт позволяет мне создавать интерактивные, производительные и отзывчивые веб-приложения, соответствующие лучшим практикам индустрии.",
        "schedule": "Расписание"
    }
  },
  en: {
    translation: {
        "description": "I am a web developer with a deep understanding of modern technologies such as Vue.js, React, Nuxt.js, HTML, and CSS. My experience allows me to create interactive, productive, and responsive web applications that meet industry best practices. I also have a sense of design and know how to work with tools such as Figma and Adobe XD, which helps me develop interfaces that combine visual appeal and usability. I am able to effectively interact with designers and, if necessary, independently develop UI layouts adapted to the needs of the project.",
        "schedule": "Schedule"
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
    });

export default i18n;