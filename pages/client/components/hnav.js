import React from "react";
import styled from "styled-components";
import { Pivotaltracker } from "@styled-icons/simple-icons";

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

export default function HNav({pic}) {
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
              <div className="d-flex justify-content-start mt-2">
                <span>
                  <PivotaltrackerLogo />
                </span>
                <Title>Farmer Accounts</Title>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-2">
              <div className="btn-group">
                <ProfilePic
                  src={pic}
                  className="rounded-circle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="#/auth/profile" className="dropdown-item">
                    Profile
                  </a>
                  <div class="dropdown-divider"></div>
                  <button className="dropdown-item" type="button">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
