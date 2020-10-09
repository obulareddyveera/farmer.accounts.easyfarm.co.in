import {
  getActiveSessionUser,
  setLocalStorageItem,
  getLocalStorageItem,
} from "./_users";
import {
  getSideMenuMetaData,
  onLiItemSelect,
  onToggleSubmenu,
} from "./_metadata";

export default {
  userActions: {
    getActiveSessionUser,
    setLocalStorageItem,
    getLocalStorageItem,
  },
  metadataActions: {
    getSideMenuMetaData,
    onLiItemSelect,
    onToggleSubmenu,
  },
};
