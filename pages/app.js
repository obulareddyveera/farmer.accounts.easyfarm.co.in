import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Pivotaltracker } from "@styled-icons/simple-icons";
import { UserCheck } from "@styled-icons/feather";
import Dashboard from "./client/container/dashboard";
import useBreakpoints from "./../hooks/useBreakPoints";

const PivotaltrackerLogo = styled(Pivotaltracker)`
  color: white;
  width: 2rem;
  margin-left: 1rem;
  margin-right: 0.5rem;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  margin-bottom: 0px !important;
  margin-top: 6px !important;
`;
const ProfilePic = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
const UserCheckLogo = styled(UserCheck)`
  color: white;
  width: 2rem;
  margin-right: 1rem;
`;

function FarmerAccounts(props) {
  const point = useBreakpoints();

  return (
    <React.Fragment>
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
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
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
                  src="/empty_profile.jpeg"
                  className="rounded-circle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">
                    Profile
                  </button>
                  <button className="dropdown-item" type="button">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <main style={{ marginTop: "2rem" }}>
        <div className="d-flex flex-wrap w-100">
          <div
            className={`${
              ["md", "lg"].indexOf(point) > -1 ? "expand" : "collapse"
            } ${["xs", "sm"].indexOf(point) > -1 && "w-100"}`}
            id="navbarToggleExternalContent"
          >
            <div className="bg-dark p-4" style={{ height: "100vh" }}>
              <div className="mt-4">
                <h5 className="text-white h4">Collapsed content</h5>
                <span className="text-muted">
                  Toggleable via the navbar brand.
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4">
            {process && process.browser && (
              <BrowserRouter>
                <Switch>
                  <Route path="/app" exact component={Dashboard} />
                </Switch>
              </BrowserRouter>
            )}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default FarmerAccounts;
