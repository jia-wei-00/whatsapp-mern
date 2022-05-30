import changeTypeReducer from "./changeTypeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeType: changeTypeReducer,
});

export default rootReducer;
