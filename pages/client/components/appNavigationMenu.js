import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  Dashboard,
  VideogameAsset,
  CalendarToday,
  ContactPage,
  HelpCenter,
} from "@styled-icons/material";
import { CalendarAlt, CalendarCheck, Wallet } from "@styled-icons/fa-solid";
import { ScikitLearn, Youtube, Blogger } from "@styled-icons/simple-icons";
import { getSideMenuMetaData, onLiItemSelect } from "./../../../store/actions";

export default function AppNavigationMenu() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log("--==>> GET_SIDEMENU_DETAILS_SUCCESS  <<==--");
    dispatch(getSideMenuMetaData());
  }, []);

  const { metaData } = useSelector((state) => {
    return {
      metaData: state.MetaData,
    };
  });
  const { sideMenuMetaInfo } = metaData;
  console.log("--== metaData: sideMenuMetaInfo ", metaData, sideMenuMetaInfo);

  const onLiClick = (event, item) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(onLiItemSelect(item));
  };

  const onToggleSubmenu = (event, item, ulId) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("--== onToggleSubmenu ", event);
    const currentState = $(`#${ulId}`).css("display");
    if (currentState === "none") {
      $(event.target).text("-");
      $(`#${ulId}`).css("display", "block");
    } else {
      $(event.target).text("+");
      $(`#${ulId}`).css("display", "none");
    }
  };

  const getLinkTag = (item) => {
    const randomUniqueId = `submenuId${new Date().getTime()}_${item.id}`;

    return (
      <li
        className={item.className}
        key={item.id}
        onClick={(event) => onLiClick(event, item)}
      >
        <React.Fragment>
          {item.type === "link" && (
            <React.Fragment>
              <a href="#">
                {item.iconComponent &&
                  React.createElement(item.iconComponent, {
                    size: "20",
                    color: "#fff",
                  })}
                <span className="ml-1">{item.displayName}</span>
                {item.subMenu && (
                  <span
                    onClick={(event) =>
                      onToggleSubmenu(event, item, randomUniqueId)
                    }
                    className="submenu-indicator"
                  >
                    +
                  </span>
                )}
              </a>
            </React.Fragment>
          )}
          {item.type === "info" && (
            <a href="#" onClick={(event) => event.preventDefault()}>
              {item.displayName}
            </a>
          )}
          {item.subMenu && (
            <ul className="submenu" key={randomUniqueId} id={randomUniqueId}>
              {item.subMenu.map((entity) => {
                return getLinkTag(entity);
              })}
            </ul>
          )}
        </React.Fragment>
      </li>
    );
  };

  return (
    <React.Fragment>
      {sideMenuMetaInfo && sideMenuMetaInfo.length > 0 && (
        <div id="jquery-accordion-menu" className="jquery-accordion-menu">
          <ul>
            {sideMenuMetaInfo.map((item) => {
              return getLinkTag(item);
            })}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}
