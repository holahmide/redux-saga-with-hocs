import { RootState } from "@/redux/root-reducer";
import { createSlice } from "@reduxjs/toolkit";
import { pipe, prop } from "ramda";
import { UserProfile } from "./user-profile-types";
import { logout } from "../authentication/authentication-reducer";

const slice = "user-profile";

const initialState: {
  isFetchingProfile: boolean;
  profile: UserProfile;
} = {
  isFetchingProfile: false,
  profile: {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  },
};

export const {
  reducer,
  actions: { fetchProfile, fetchProfileSuccess, fetchProfileFailure },
} = createSlice({
  name: slice,
  initialState,
  reducers: {
    fetchProfile: (state) => {
      state.isFetchingProfile = true;
    },
    fetchProfileSuccess: (state, action) => {
      state.isFetchingProfile = false;
      state.profile = action.payload;
    },
    fetchProfileFailure: (state) => {
      state.isFetchingProfile = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.profile = initialState.profile;
    });
  },
});

/*
 * SELECTORS
 */
const getUserProfileSlice = (state: RootState) => state[slice];

const getProfileIsLoading = pipe(
  getUserProfileSlice,
  prop("isFetchingProfile")
);

const getProfile = pipe(getUserProfileSlice, prop("profile"));

export type UserProfileState = ReturnType<typeof reducer>;

export { slice, getProfileIsLoading, getProfile };
