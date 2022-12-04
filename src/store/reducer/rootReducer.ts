import { combineReducers } from "redux";
import touristReducer from "./touristReducer";

const rootReducer = combineReducers({
  tourist: touristReducer,
});

export default rootReducer;
