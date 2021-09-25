import { createSlice } from "@reduxjs/toolkit";

export const userNameSlice = createSlice({
  name: "userName",
  initialState: {
    value: "",
  },
  reducers: {
    updateUserName: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserName } = userNameSlice.actions;

export default userNameSlice.reducer;
