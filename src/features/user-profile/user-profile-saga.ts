import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchProfile,
  fetchProfileFailure,
  fetchProfileSuccess,
} from "./user-profile-reducer";

function* fetchProfileRequest(): Generator<Promise<Response> | any, any, any> {
  const response = yield fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = yield response.json();
  return user;
}

function* fetchUserProfile(): Generator<any, void, any> {
  try {
    const user: any = yield call(fetchProfileRequest);

    yield put(fetchProfileSuccess(user));
  } catch {
    yield put(fetchProfileFailure());
  }
}

export function* watchFetchUser() {
  yield takeEvery(fetchProfile, fetchUserProfile);
}
