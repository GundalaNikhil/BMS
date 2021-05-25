import { USER_LOGIN_SUCCESS, USER_LOGIN_LOADING } from "../actions/types";

const initialState = {
  users: [],
};

const LoginReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case USER_LOGIN_LOADING:
      return null;
    case USER_LOGIN_SUCCESS:
      console.log(action.payload);
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default LoginReducer;
