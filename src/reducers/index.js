import { combineReducers } from "redux";
import LoginReducer from "./Reducer";
// import LoginReducer from "./Reducer";

const rootReducer = combineReducers({
  users: LoginReducer,
});

// export default combineReducers({
//   users: LoginReducer,
// });

export default rootReducer;
