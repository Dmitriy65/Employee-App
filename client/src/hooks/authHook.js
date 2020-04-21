import { useSelector, useDispatch } from "react-redux";
import { useCallback } from 'react';
import { sendUserLoginRequest, userLogout, errorUserLogin } from "../actions/auth.js";

export const useAuthState = () => {
  return {
    isUserLoggedIn: useSelector(state => state.auth.isUserLoggedIn),
    currentUser: useSelector(state => state.auth.currentUser),
    isloginError: useSelector(state => state.auth.isloginError)
  }
}

export const useAuthDispatch = () => {
  const dispatch = useDispatch();
  return {
    sendUserLoginRequest: useCallback((body) => dispatch(sendUserLoginRequest(body)), [dispatch]),
    userLogout: useCallback(() => dispatch(userLogout()), [dispatch]),
    errorUserLogin: useCallback(() => dispatch(errorUserLogin()), [dispatch])
  }
}
