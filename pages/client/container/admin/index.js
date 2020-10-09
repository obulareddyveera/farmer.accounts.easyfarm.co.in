import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Dashboard from "./pages/dashboard";

function AdminDashboard(props) {
  return (
    <React.Fragment>
      <div class="container-fluid">
        {process && process.browser && (
          <HashRouter>
            <Switch>
              <Route path="/auth/admin/" exact component={Dashboard} />
            </Switch>
          </HashRouter>
        )}
      </div>
    </React.Fragment>
  );
}

export default AdminDashboard;
