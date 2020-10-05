import React from "react";
import { StaticRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./client/container/dashboard";
import useBreakpoints from "./../hooks/useBreakPoints";

function FarmerAccounts(props) {
  const point = useBreakpoints();

  return (
    <React.Fragment>
      <div className="fixed-top">
        <nav className="navbar navbar-dark bg-dark">
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
        </nav>
      </div>
      <main style={{ marginTop: "2rem" }}>
        <div className="d-flex w-100">
          <div
            className={`${
              ["md", "lg"].indexOf(point) > -1 ? "expand" : "collapse"
            }`}
            id="navbarToggleExternalContent"
          >
            <div className="bg-dark p-4" style={{ height: "100vh" }}>
              <h5 className="text-white h4">Collapsed content</h5>
              <span className="text-muted">
                Toggleable via the navbar brand.
              </span>
            </div>
          </div>
          <div className="mt-4 p-4">
            <StaticRouter>
              <Switch>
                <Route path="/app" exact component={Dashboard} />
              </Switch>
            </StaticRouter>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default FarmerAccounts;
