import { usersTypes } from "../types/_users";
import { api, apiService } from "../api_service";

export const getLocalStorageItem = (key) => {
  if (process && process.browser) {
    const entity = localStorage.getItem("activeSessionUser");
    return entity && JSON.parse(entity);
  }
};

export const setLocalStorageItem = (key, value) => {
  if (process && process.browser) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getActiveSessionUser = (params) => async (dispatch) => {
  try {
    let response = getLocalStorageItem("activeSessionUser");
    if (!response) {
      response = await apiService.postData(api.activeSessionUser);
      setLocalStorageItem("activeSessionUser", response);
    }

    dispatch({
      type: usersTypes.POST_USERS_SESSION_ACTIVE_SUCCESS,
      payload: { ...response },
    });
  } catch (err) {
    console.log(err);
  }
};
