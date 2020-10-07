import { usersTypes } from "../types/_users";
import { api, apiService } from "../api_service";

export const getActiveSessionUser = (params) => async (dispatch) => {
  try {
    const response = await apiService.postData(api.activeSessionUser);
    dispatch({
      type: usersTypes.POST_USERS_SESSION_ACTIVE_SUCCESS,
      payload: { ...response },
    });
  } catch (err) {
    console.log(err);
  }
};
