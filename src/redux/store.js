import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import tokenSlice from "./tokenSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    token: tokenSlice,
  },
});
