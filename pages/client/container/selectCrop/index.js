import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import SelectCropDashboard from "./pages/dashboard";

function SelectCrop(props) {
  return (
    <React.Fragment>
      <div class="container-fluid">
        {process && process.browser && (
          <HashRouter>
            <Switch>
              <Route path="/auth/selectCrop/" exact component={SelectCropDashboard} />
            </Switch>
          </HashRouter>
        )}
      </div>
    </React.Fragment>
  );
}

export default SelectCrop;
