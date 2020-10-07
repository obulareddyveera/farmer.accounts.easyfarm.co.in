import React from "react";
import styled from "styled-components";

import useBreakpoints from "./../../../hooks/useBreakPoints";

const SideMenu = styled.div`
  position: relative !important;
  width: 30%;
  height: 100vh;
  @media (max-width: 720px) {
    position: absolute !important;
    z-index: 1;
    width: 100%;
  }
`;
export default function SideNav() {
  const point = useBreakpoints();

  return (
    <SideMenu className={`${['xs','sm'].indexOf(point) > -1 ? "collapse": "expand"}`} id="sideMenuContent">
      <div className="bg-dark p-4" style={{ height: "100vh" }}>
        <div className="mt-4">
          <h5 className="text-white h4">Collapsed content</h5>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
    </SideMenu>
  );
}
