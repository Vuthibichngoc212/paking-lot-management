import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IUserData } from "../../interfaces/users";

export interface UsersInitialState {
  loading: boolean;
  users: IUserData[];
}

const initialState: UsersInitialState = {
  loading: false,
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserData>) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const { setUser } = usersSlice.actions;

export const userSelector = (state: RootState) => state.users.users;

export default usersSlice.reducer;
