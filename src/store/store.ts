import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/AuthSlice/authSlice";
import cartReducer from "./features/CartSlice/cartSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import baseApi from "./Api/BaseApi/BaseApi";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"], // Only persist auth and cart
};

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

// Define RootState and AppDispatch types
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
