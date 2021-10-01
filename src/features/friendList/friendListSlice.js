import { createSlice } from "@reduxjs/toolkit";

export const friendListSlice = createSlice({
  name: "friendList",
  initialState: {
    value: [],
  },
  reducers: {
    updateFriendList: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateFriendList } = friendListSlice.actions;

export default friendListSlice.reducer;
