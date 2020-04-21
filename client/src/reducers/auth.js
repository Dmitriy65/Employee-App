import { createReducer } from '@reduxjs/toolkit';

import { SUCCESS_USER_LOGIN, USER_LOGOUT, ERROR_USER_LOGIN } from '../constants/actionTypes.js'
import { isUserAuthenticated, getAuthenticatedUser } from '../utils/auth.js';

const initialState = {
  currentUser: getAuthenticatedUser(),
  isUserLoggedIn: !!isUserAuthenticated(),
  isloginError: false
};

const authReducer = createReducer(initialState, {
  [SUCCESS_USER_LOGIN]: (state, action) => {
    localStorage.setItem("currentUser", JSON.stringify(action.payload));
    return {
      ...state,
      currentUser: action.payload,
      isUserLoggedIn: true,
      isloginError: false
    };
  },
  [USER_LOGOUT]: (state, action) => ({ ...state, currentUser: {}, isUserLoggedIn: false }),
  [ERROR_USER_LOGIN]: (state, action) => ({ ...state, loginError: true })
})


export default authReducer;