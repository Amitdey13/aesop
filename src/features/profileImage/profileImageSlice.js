import { createSlice } from "@reduxjs/toolkit";

export const profileImageSlice = createSlice({
  name: "profile",
  initialState: {
    value: "https://gravater.s3.ap-south-1.amazonaws.com/public_gravatar.jpg",
  },
  reducers: {
    updateProfile: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateProfile } = profileImageSlice.actions;

export default profileImageSlice.reducer;
