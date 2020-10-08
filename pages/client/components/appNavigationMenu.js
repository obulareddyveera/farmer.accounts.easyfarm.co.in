import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {useTranslation} from "react-i18next";
import {
  getSideMenuMetaData,
  onLiItemSelect,
  onToggleSubmenu,
} from "./../../../store/actions";

/**
 * Source URL -- https://bootsnipp.com/snippets/prnvG
 */

export default function AppNavigationMenu() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  console.log("--==>> useTranslation ", t('sidemenu.helpCenter'));
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
  console.log("--== metaData: sideMenuMetaInfo ", sideMenuMetaInfo);

  const onLiClick = (event, item) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(onLiItemSelect(item));
  };

  const toggleSubmenu = (event, item, ulId) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("--== toggleSubmenu ", event);
    dispatch(onToggleSubmenu(item));
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
                <span className="ml-1">{t(item.translation)}</span>
                {item.subMenu && (
                  <button
                    className="btn text-white submenu-indicator"
                    onClick={(event) =>
                      toggleSubmenu(event, item, randomUniqueId)
                    }
                  >
                    {item.showSubmenu ? "-" : "+"}
                  </button>
                )}
              </a>
            </React.Fragment>
          )}
          {item.type === "info" && (
            <a href="#" onClick={(event) => event.preventDefault()}>
              {t(item.translation)}
            </a>
          )}
          {item.subMenu && (
            <ul
              className={`submenu ${item.showSubmenu ? "d-block" : "d-none"}`}
              key={randomUniqueId}
              id={randomUniqueId}
            >
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
