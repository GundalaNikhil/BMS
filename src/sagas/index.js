import { all } from "redux-saga/effects";

import { fetchSaga } from "./mware";

export default function* rootSaga() {
  yield all([fetchSaga()]);
}
