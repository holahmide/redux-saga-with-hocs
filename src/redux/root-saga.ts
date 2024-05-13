import { watchUserAuthentication } from "@/features/authentication/authentication-saga";
import { watchFetchUser } from "@/features/user-profile/user-profile-saga";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([watchUserAuthentication(), watchFetchUser()]);
}

export default rootSaga;
