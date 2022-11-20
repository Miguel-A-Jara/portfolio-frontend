import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ENnavLinkBtn from '../translations/en/navbarLinkButtons.json';
import ESnavLinkBtn from '../translations/es/navbarLinkButtons.json'; 

import ENTechnology from '../translations/en/technologies.json';
import ESTechnology from '../translations/es/technologies.json';

const resources = {
  en: {
    translation: {
      navbarLinkButtons: ENnavLinkBtn,
      technologies: ENTechnology
    }
  },
  es: {
    translation: {
      navbarLinkButtons: ESnavLinkBtn,
      technologies: ESTechnology
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    resources,
  });

export default i18n;