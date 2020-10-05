import { breakPointTypes } from "../types/_breakPoints";

export default (state, action) => {
  const initState = {
    isLoading: true,
    dateLastModified: new Date().getTime(),
  };
  if (!state) return initState;

  switch (action.type) {
    case breakPointTypes.ON_BROWSER_RESIZE_DONE:
      return {
        isLoading: false,
        dateLastModified: new Date().getTime(),
        ...action.payload
      };
    default:
      return { ...initState };
  }
};
