import { createAction } from '@reduxjs/toolkit';

import { SUCCESS_USER_LOGIN, USER_LOGOUT, ERROR_USER_LOGIN } from '../constants/actionTypes.js'
import { fetchWrapper } from '../utils/fetchWrapper';
import { chooseUserModel } from '../utils/userRolesModel';
import { serverBase } from '../constants/server.js';


export const successUserLogin = createAction(SUCCESS_USER_LOGIN);

export const userLogout = createAction(USER_LOGOUT);

export const errorUserLogin = createAction(ERROR_USER_LOGIN);

export const sendUserLoginRequest = (body) => {
  return async dispatch => {
    try {
      const { isLogged, data } = await fetchWrapper.post(`${serverBase}/login`, body);
      if (!!isLogged) {
        const userModel = chooseUserModel(data);
        dispatch(successUserLogin(userModel));
      }

    } catch (err) {
      dispatch(errorUserLogin());
    }
  };
};

