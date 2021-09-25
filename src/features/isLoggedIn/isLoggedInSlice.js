import { createSlice } from "@reduxjs/toolkit";

export const isLoggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState: {
    value: false,
  },
  reducers: {
    updateIsLoggedIn: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateIsLoggedIn } = isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;