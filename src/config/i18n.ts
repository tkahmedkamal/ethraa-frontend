import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ar, en } from "../i18n/index.ts";

i18n.use(initReactI18next).init({
  resources: {
    ar: {
      translation: ar,
    },
    en: {
      translation: en,
    },
  },
  lng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
