import { createSlice } from "@reduxjs/toolkit";

export const passwordSlice = createSlice({
  name: "password",
  initialState: {
    value: "",
  },
  reducers: {
    updatePassword: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePassword } = passwordSlice.actions;

export default passwordSlice.reducer;
