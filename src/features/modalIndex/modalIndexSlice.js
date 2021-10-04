import { createSlice } from "@reduxjs/toolkit";

export const modalIndexSlice = createSlice({
  name: "modalIndex",
  initialState: {
    value: 0,
  },
  reducers: {
    updateModalIndex: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateModalIndex } = modalIndexSlice.actions;

export default modalIndexSlice.reducer;
