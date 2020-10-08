import React, { Component } from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import enSidemenu from "./../store/locales/en/sidemenu.json";
import tuSidemenu from "./../store/locales/th/sidemenu.json";
import FarmerAccounts from "./client/route";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "th",
  resources: {
    en: {
      translation: {
        sidemenu: enSidemenu,
      },
    },
    th: {
      translation: {
        sidemenu: tuSidemenu,
      },
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
