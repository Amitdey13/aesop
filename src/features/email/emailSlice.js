import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
  name: "email",
  initialState: {
    value: "",
  },
  reducers: {
    updateEmail: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateEmail } = emailSlice.actions;

export default emailSlice.reducer;
