import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { apiCaller } from "./api/api.caller";
import { usersPersistConfig } from "./persist.config";
import usersReducer from "./features/users";

const rtkQueryMiddleware = [apiCaller.middleware];

const rootReducer = combineReducers({
  users: persistReducer(usersPersistConfig, usersReducer),
  apiCaller: apiCaller.reducer,
});

const store = configureStore({
  reducer: rootReducer as Reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(rtkQueryMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const persistor = persistStore(store);
export default store;
