import axios from "axios";
import {
  //   FETCH_DETAILS_LOADING,
  //   FETCH_DETAILS_SUCCESS,
  //   USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  //   USER_LOGIN_SUCCESS,
  //   UPDATE_DETAILS_LOADING,
} from "../actions/types";
import { call, put, takeLatest } from "redux-saga/effects";

import { history } from "../index";
import { userLoginSuccess } from "../actions/action";

const url = "http://localhost:3006/users";
const url2 = "http://localhost:3006/details";

async function getApi() {
  try {
    const res = await axios.get(url2);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

function* fetchDetails(action) {
  console.log(action.payload.name);
  try {
    const a = yield call(getApi);

    var flag = true;
    for (var i = 0; i < a.length; i++) {
      if (
        a[i].uname === action.payload.name &&
        a[i].pwd === action.payload.pwd
      ) {
        flag = false;
        yield put(userLoginSuccess(a[i]));
        history.push("/home");
      }
    }
    if (flag) {
      history.push("/");
    }
  } catch (e) {
    console.log(e);
  }
}

export function* fetchSaga() {
  yield takeLatest(USER_LOGIN_LOADING, fetchDetails);
  //   yield takeLatest(USER_LOGIN_LOADING, login);
  // yield takeLatest(UPDATE_DETAILS_LOADING, updateDetails);
}
