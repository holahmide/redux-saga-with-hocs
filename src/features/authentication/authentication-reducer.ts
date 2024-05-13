import { RootState } from "@/redux/root-reducer";
import { createSlice } from "@reduxjs/toolkit";
import { pipe, prop } from "ramda";

const slice = "authentication";

const initialState = { isAuthenticating: false, isAuthenticated: false };

export const {
  reducer,
  actions: { login, loginSuccess, logout },
} = createSlice({
  name: slice,
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticating = true;
    },
    loginSuccess: (state) => {
      state.isAuthenticating = false;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

/*
 * SELECTORS
 */
const getAuthenticationSlice = (state: RootState) => state[slice];

const getAuthenticationIsLoading = pipe(
  getAuthenticationSlice,
  prop("isAuthenticating")
);

const getIsAuthenticated = pipe(
  getAuthenticationSlice,
  prop("isAuthenticated")
);

export type AuthenticationState = ReturnType<typeof reducer>;

export { slice, getAuthenticationIsLoading, getIsAuthenticated };
