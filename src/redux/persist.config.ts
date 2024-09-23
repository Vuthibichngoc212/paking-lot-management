import { PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { UsersInitialState } from "./features/users";

export const usersPersistConfig: PersistConfig<UsersInitialState> = {
  key: "users",
  storage,
};
