import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Pivotaltracker } from "@styled-icons/simple-icons";

import actions from "../../../store/actions";

const PivotaltrackerLogo = styled(Pivotaltracker)`
  color: white;
  width: 2rem;
  margin-left: 1rem;
  margin-right: 0.5rem;
  @media (max-width: 720px) {
    margin-left: 0.5rem;
  }
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  margin-bottom: 0px !important;
  margin-top: 2px !important;
`;
const ProfilePic = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
const FarmerAccountsLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: none !important;
  }
`;

export default function HNav() {
  const { t } = useTranslation();
  const { userActions } = actions;
  const session = userActions.getLocalStorageItem("activeSessionUser");
  const picture = (session && session.picture) || "/empty_profile.jpeg";

  return (
    <header>
      <div className="fixed-top">
        <nav
          className="navbar navbar-dark bg-dark"
          style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
        >
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex justify-content-start">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#sideMenuContent"
                aria-controls="sideMenuContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <FarmerAccountsLink
                href="#/"
                className="d-flex justify-content-start mt-2"
              >
                <span>
                  <PivotaltrackerLogo />
                </span>
                <Title>{t(`common.hnav.siteName`)}</Title>
              </FarmerAccountsLink>
            </div>
            <div className="d-flex justify-content-end mt-2">
              <div className="btn-group">
                <ProfilePic
                  src={picture}
                  className="rounded-circle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="#/auth/profile" className="dropdown-item">
                    {t(`common.hnav.profile`)}
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    href="https://mail.google.com/mail/u/0/?logout&hl=en"
                    className="dropdown-item"
                  >
                    {t(`common.hnav.logout`)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
