import apiReducer from "./apiReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  apiReducer: apiReducer
});
export default rootReducer;