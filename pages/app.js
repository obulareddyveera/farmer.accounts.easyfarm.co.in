import React, { Component } from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import enTranslator from "./../store/locales/en";
import thTranslator from "./../store/locales/th";
import FarmerAccounts from "./client/route";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "th",
  resources: {
    en: {
      translation: enTranslator,
    },
    th: {
      translation: thTranslator,
    },
  },
});

export default function App() {
  return (
    <React.Fragment>
      <I18nextProvider i18n={i18next}>
        <FarmerAccounts />
      </I18nextProvider>
    </React.Fragment>
  );
}
