import i18n from 'i18next';
import { useContext } from 'react';
import { initReactI18next } from 'react-i18next';
import ENnavLinkBtn from '../translations/en/navbarLinkButtons.json';
import ESnavLinkBtn from '../translations/es/navbarLinkButtons.json'; 

const resources = {
  en: {
    translation: {
      navbarLinkButtons: ENnavLinkBtn
    }
  },
  es: {
    translation: {
      navbarLinkButtons: ESnavLinkBtn
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