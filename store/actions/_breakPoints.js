import { breakPointTypes } from "../types/_breakPoints";

export const setBreakPoints = (params) => async (dispatch) => {
  try {
    const _view = {
      type: "large",
      ...params,
    };
    if (innerWidth > 1007) {
      _view.type = "large";
    } else if (innerWidth > 640 && innerWidth < 1008) {
      _view.type = "medium";
    } else if (innerWidth < 641) {
      _view.type = "small";
    }

    dispatch({
      type: breakPointTypes.ON_BROWSER_RESIZE_DONE,
      payload: {
        view: _view,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
