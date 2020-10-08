import {
  Dashboard,
  VideogameAsset,
  CalendarToday,
  ContactPage,
  HelpCenter,
} from "@styled-icons/material";
import { CalendarAlt, CalendarCheck, Wallet } from "@styled-icons/fa-solid";
import { ScikitLearn, Youtube, Blogger } from "@styled-icons/simple-icons";

export default [
  {
    id: "dashboardLink",
    displayName: "Dashboard",
    iconComponent: Dashboard,
    className: "active",
    type: "link",
  },
  {
    id: "walletLink",
    displayName: "My Wallet",
    iconComponent: Wallet,
    type: "link",
  },
  {
    id: "helpCenter",
    displayName: "Help Center",
    iconComponent: HelpCenter,
    type: "link",
  },
  {
    id: "calendarLink",
    displayName: "Calendar",
    iconComponent: CalendarAlt,
    type: "link",
    subMenu: [
      {
        id: "calendarToday",
        displayName: "My Day",
        iconComponent: CalendarToday,
        type: "link",
      },
      {
        id: "calendarCrop",
        displayName: "Crop Calendar",
        iconComponent: CalendarCheck,
        type: "link",
      },
    ],
  },
  {
    id: "contactsLink",
    displayName: "Phone Book",
    iconComponent: ContactPage,
    type: "link",
  },
  {
    id: "assetsLink",
    displayName: "Assets",
    iconComponent: VideogameAsset,
    type: "link",
    subMenu: [
      {
        type: "info",
        displayName: "No Assets Registered",
      },
    ],
  },
  {
    id: "learningLink",
    displayName: "Learnings",
    iconComponent: ScikitLearn,
    type: "link",
    subMenu: [
      {
        id: "videoLearningLink",
        displayName: "Videos",
        iconComponent: Youtube,
        type: "link",
      },
      {
        id: "blogLink",
        displayName: "Blog",
        iconComponent: Blogger,
        type: "link",
      },
    ],
  },
];
