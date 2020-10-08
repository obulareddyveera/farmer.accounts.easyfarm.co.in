import { metaDataTypes } from "../types/_metadata";
import SideMenuMetaInfo from "../metadata/sideMenuMetaInfo";

export const getSideMenuMetaData = () => async (dispatch) => {
  try {
    console.log("--==>> Action GET_SIDEMENU_DETAILS_SUCCESS  <<==--");
    dispatch({
      type: metaDataTypes.GET_SIDEMENU_DETAILS_SUCCESS,
      payload: SideMenuMetaInfo,
    });
  } catch (err) {
    console.log(err);
  }
};

export const onLiItemSelect = (item) => async (dispatch) => {
  try {
    console.log("--==>> Action GET_SIDEMENU_DETAILS_SUCCESS  <<==--");
    SideMenuMetaInfo.forEach((entity) => {
      if (entity.subMenu && entity.subMenu.length > 0) {
        entity.subMenu.forEach((subEntity) => {
          if (subEntity.id === item.id) {
            subEntity.className = "active";
            entity.className = "active";
          } else {
            subEntity.className = null;
            entity.className = null;
          }
        });
      } else {
        if (entity.id === item.id) {
          entity.className = "active";
        } else {
          entity.className = null;
        }
      }
    });

    dispatch({
      type: metaDataTypes.GET_SIDEMENU_DETAILS_SUCCESS,
      payload: SideMenuMetaInfo,
    });
  } catch (err) {
    console.log(err);
  }
};

export const onToggleSubmenu = (item) => async (dispatch) => {
  try {
    console.log("--==>> Action GET_SIDEMENU_DETAILS_SUCCESS  <<==--");
    SideMenuMetaInfo.forEach((entity) => {
      if (entity.id === item.id) {
        entity.showSubmenu = !entity.showSubmenu;
      }
    });

    dispatch({
      type: metaDataTypes.GET_SIDEMENU_DETAILS_SUCCESS,
      payload: SideMenuMetaInfo,
    });
  } catch (err) {
    console.log(err);
  }
};
