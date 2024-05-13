import { combineReducers } from "@reduxjs/toolkit";

import {
  reducer as authenticationReducer,
  slice as authenticationSlice,
} from "../features/authentication/authentication-reducer";
import {
  reducer as userProfileReducer,
  slice as userProfileSlice,
} from "../features/user-profile/user-profile-reducer";

const rootReducer = combineReducers({
  [authenticationSlice]: authenticationReducer,
  [userProfileSlice]: userProfileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
