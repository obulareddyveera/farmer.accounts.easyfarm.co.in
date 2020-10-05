// import reduxThunk from "redux-thunk";
// import { createStore, applyMiddleware } from "redux";
// import reducers from "./reducers";
// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
// export default store;

import React from 'react';
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import reducers from "./reducers";

// create a store creator
const makeStore = (initialState) => {
  return createStore(reducers, initialState, applyMiddleware(reduxThunk));
};
export default createWrapper(makeStore, { debug: true });
