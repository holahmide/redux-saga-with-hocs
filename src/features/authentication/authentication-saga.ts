import { call, put, takeEvery } from "redux-saga/effects";
import { login, loginSuccess } from "./authentication-reducer";

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

function* loginUser() {
  yield call(delay, 1000);
  yield put(loginSuccess());
}

export function* watchUserAuthentication() {
  yield takeEvery(login, loginUser);
}
