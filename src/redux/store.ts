import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";
import storage from "redux-persist/lib/storage";

import { slice as authenticationSlice } from "../features/authentication/authentication-reducer";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "state",
  whitelist: [authenticationSlice],
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultmiddleware) => getDefaultmiddleware().concat(saga),
});

saga.run(rootSaga);

export const persistor = persistStore(store);
export { store };
