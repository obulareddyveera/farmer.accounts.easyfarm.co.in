import { usersTypes } from "../types/_users";

export default function Users(state, action) {
  const initState = {
    isLoading: true,
    dateLastModified: new Date().getTime(),
  };
  if (!state) return initState;

  switch (action.type) {
    case usersTypes.POST_USERS_SESSION_ACTIVE_SUCCESS:
      return {
        isLoading: false,
        dateLastModified: new Date().getTime(),
        session: { ...action.payload },
      };
    default:
      return { ...initState };
  }
}
