import { configureStore } from "@reduxjs/toolkit";
import isLoggedInReducer from "./features/isLoggedIn/isLoggedInSlice"
import emailReducer from "./features/email/emailSlice"
import userNameReducer from "./features/userName/userNameSlice"
import passwordReducer from "./features/password/passwordSlice"

export default configureStore({
    reducer: {
        isLoggedIn: isLoggedInReducer,
        email: emailReducer,
        userName: userNameReducer,
        password: passwordReducer
  },
});
