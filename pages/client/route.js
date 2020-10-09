import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import actions from "./../../store/actions";
import HNav from "./components/hnav";
import SideNav from "./components/sidenav";
import Dashboard from "./container/general/dashboard";
import Profiler from "./container/general/profiler";
import AdminRouter from "./container/admin";
import SelectCrop from "./container/selectCrop";

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
  const { userActions } = actions;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(userActions.getActiveSessionUser());
  }, []);
  const { session } = useSelector((state) => {
    return {
      session: (state.Users && state.Users.session) || {},
    };
  });

  return (
    <React.Fragment>
      <HNav />
      <main className="mt-4" style={{ position: "relative" }}>
        <div className="d-flex" style={{ position: "relative" }}>
          <SideNav />
          <ContentSpace>
            {process && process.browser && (
              <HashRouter>
                <Switch>
                  <Route path="/auth/selectcrop" exact component={SelectCrop} />
                  <Route path="/auth/admin" exact component={AdminRouter} />
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
