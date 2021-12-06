import { combineReducers } from "redux";
import  loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer
});

export default rootReducer;