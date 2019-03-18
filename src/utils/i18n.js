import i18n from "i18next"
import Backend from './i18next-xhr-backend'
import LanguageDetector from "i18next-browser-languagedetector"
import { reactI18nextModule } from "react-i18next"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: "en-US",
    lng: "en-US",
    appendNamespaceToCIMode: true,
    saveMissing: true,

    // have a common namespace used around the full app
    ns: ["Home"],
    defaultNS: "Home",

    debug: false,

    load: "currentOnly",

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
      format: function (value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      }
    },

    react: {
      wait: true,
    },
  })

export default i18n