import React from "react";
import styled from "styled-components";

import AppNavigationMenu from "./appNavigationMenu";
import useBreakpoints from "./../../../hooks/useBreakPoints";

const SideMenu = styled.div`
  height: 100vh;
  width: 30%;
  background: #414956;
  position: relative !important;
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
      <div className="bg-dark pt-4">
        <div className="mt-4">
          <AppNavigationMenu />
        </div>
      </div>
    </SideMenu>
  );
}
