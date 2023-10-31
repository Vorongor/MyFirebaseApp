import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    newUser: null,
    isLoggedIn: false,
    count: 0,
  },
  reducers: {
    submit: (state, action) => {
      state.newUser = action.payload;
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement, submit } = userSlice.actions;
export default userSlice.reducer;
