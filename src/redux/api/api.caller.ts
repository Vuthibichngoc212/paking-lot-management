import { createApi } from "@reduxjs/toolkit/query/react";
import customBaseQuery from "./fetchBase";
import { IUserData } from "../../interfaces/users";

export const apiCaller = createApi({
  reducerPath: "apiCaller",
  refetchOnMountOrArgChange: 30,
  baseQuery: customBaseQuery(),
  tagTypes: ["ParkingLot"],
  endpoints: (builder) => ({
    registerUser: builder.mutation<IUserData, Omit<IUserData, "id">>({
      query: (user) => ({
        url: `/users`,
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation<IUserData, { email: string; password: string }>({
      query: (user) => ({
        url: `/users?email=${user.email}&password=${user.password}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginMutation } = apiCaller;
