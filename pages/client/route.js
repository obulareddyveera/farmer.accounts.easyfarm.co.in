import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import HNav from "./components/hnav";
import SideNav from "./components/sidenav";
import Dashboard from "./container/dashboard";
import Profiler from "./container/profiler";
import { getActiveSessionUser } from "./../../store/actions";

const ContentSpace = styled.div`
  position: relative !important;
  width: 100%;
  margin-top: 2rem !important;
  padding: 2rem;
  @media (max-width: 720px) {
    padding: 0rem;
  }
`;
function FarmerAccounts(props) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getActiveSessionUser());
  }, []);

  const { session } = useSelector((state) => {
    return {
      session: (state.Users && state.Users.session) || {},
    };
  });
  const { picture } = session;

  return (
    <React.Fragment>
      <HNav pic={picture || "/empty_profile.jpeg"} />
      <main className="mt-4" style={{ position: "relative" }}>
        <div className="d-flex" style={{ position: "relative" }}>
          <SideNav />
          <ContentSpace>
            {process && process.browser && (
              <HashRouter>
                <Switch>
                  <Route path="/auth/profile" exact component={Profiler} />
                  <Route path="/" exact component={Dashboard} />
                </Switch>
              </HashRouter>
            )}
          </ContentSpace>
        </div>
      </main>
    </React.Fragment>
  );
}

export default FarmerAccounts;
