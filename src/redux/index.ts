import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";
import { configureStore, combineReducers, Middleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./modules/user";

// create reducer
const reducer = combineReducers({ user });

// redux persist
const persistConfig = {
  key: "redux-state",
  storage: storage,
  blacklist: []
};
const persistedReducer = persistReducer(persistConfig, reducer);

// redux middleWares(self configuration)
// 注意：getDefaultMiddleware 默认已包含 thunk，无需重复添加
const middleWares: Middleware[] = [];

// store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(middleWares),
  devTools: true
});

// create persist store
export const persistor = persistStore(store);

// redux hooks
export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
