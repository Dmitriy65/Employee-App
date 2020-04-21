import { createAction } from '@reduxjs/toolkit';

import { SET_USER_PROFILE, UPDATE_USER_PROFILE, CHANGE_CLICKED_STATUS } from '../constants/actionTypes.js'
import { fetchWrapper } from '../utils/fetchWrapper.js';
import { serverBase } from '../constants/server.js';

export const setUserProfile = createAction(SET_USER_PROFILE);

export const updateUserProfile = createAction(UPDATE_USER_PROFILE);

export const changeEditStatus = createAction(CHANGE_CLICKED_STATUS);

export const fetchUserProfile = () => {
  return async dispatch => {
    try {
      const { data: { profile } } = await fetchWrapper.get(`${serverBase}/profile`, { id: 125 });
      dispatch(setUserProfile(profile));
    } catch (err) {
      console.log(err);
    }
  };
};

export const saveUpdatedProfile = (body) => {
  return async dispatch => {
    try {
      
      await fetchWrapper.patch(`${serverBase}/profile`, { id: 125 }, body);
      const { data: { profile } } = await fetchWrapper.get(`${serverBase}/profile`, { id: 125 });
      dispatch(updateUserProfile(profile));

    } catch (err) {
      console.log(err);
    }
  };
};

