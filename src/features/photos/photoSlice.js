import { createSlice } from "@reduxjs/toolkit";

export const photoSlice = createSlice({
  name: "photos",
  initialState: {
    value: [],
  },
  reducers: {
    updatePhotos: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePhotos } = photoSlice.actions;

export default photoSlice.reducer;