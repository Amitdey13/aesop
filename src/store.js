import { configureStore } from "@reduxjs/toolkit";
import isLoggedInReducer from "./features/isLoggedIn/isLoggedInSlice";
import emailReducer from "./features/email/emailSlice";
import userNameReducer from "./features/userName/userNameSlice";
import passwordReducer from "./features/password/passwordSlice";
import profileReducer from "./features/profileImage/profileImageSlice";
import friendListReducer from "./features/friendList/friendListSlice";
import userIdSliceReducer from "./features/userId/userIdSlice";
import photoSliceReducer from "./features/photos/photoSlice";
import modalIndexSliceReducer from "./features/modalIndex/modalIndexSlice"

export default configureStore({
  reducer: {
    isLoggedIn: isLoggedInReducer,
    email: emailReducer,
    userName: userNameReducer,
    password: passwordReducer,
    profile: profileReducer,
    friendList: friendListReducer,
    userId: userIdSliceReducer,
    photos: photoSliceReducer,
    modalIndex: modalIndexSliceReducer,
  },
});
