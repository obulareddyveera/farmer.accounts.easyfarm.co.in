import React from "react";
import styled from "styled-components";

import actions from "../../../../store/actions";

const GridDisplayTable = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 10px;
`;

export default function profiler() {
  const { userActions } = actions;
  const session = userActions.getLocalStorageItem("activeSessionUser");

  return (
    <div className="row">
      {session && (
        <React.Fragment>
          <div className="col-sm-12 col-md-4 d-flex justify-content-center">
            <img
              src={session.picture || "./empty_profile.jpeg"}
              class="img-thumbnail"
              alt="profile"
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="d-flex justify-content-between">
              <GridDisplayTable>
                <div>Name</div>
                <div>{session.name}</div>
                <div>Family Name</div>
                <div>{session.family_name}</div>
                <div>Given Name</div>
                <div>{session.given_name}</div>
                <div>Email</div>
                <div>{session.email}</div>
              </GridDisplayTable>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
