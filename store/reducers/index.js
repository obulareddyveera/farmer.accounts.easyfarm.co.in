import { combineReducers } from "redux";
import BreakPoints from "./_breakPoints";
import Users from "./_users";
import MetaData from "./_metadata";

export default combineReducers({
  BreakPoints, Users, MetaData
});
