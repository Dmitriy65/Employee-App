import { createAction } from '@reduxjs/toolkit';

import { SUCCESS_ADMIN_PANEL_UPDATE, SET_ADMIN_SEARCH_QUERY, SET_ADMIN_SEARCH_RESULTS } from '../constants/actionTypes.js'
import { fetchWrapper } from '../utils/fetchWrapper.js';
import { serverBase } from '../constants/server.js';

export const successAdminPanelUpdate = createAction(SUCCESS_ADMIN_PANEL_UPDATE);

export const setAdminSearchQuery = createAction(SET_ADMIN_SEARCH_QUERY);

export const setAdminSearchResults = createAction(SET_ADMIN_SEARCH_RESULTS);

export const fetchUsers = () => {
  return async dispatch => {
    try {
      const { data: { users } } = await fetchWrapper.get(`${serverBase}/users`);
      dispatch(setAdminSearchResults(users));
    } catch (err) {
      console.log(err);
    }
  };
};

export const saveUpdatedAdminPanel = (id, body) => {
  return async dispatch => {
    try {
      await fetchWrapper.patch(`${serverBase}/user`, { id }, body);
      const { data: { users } } = await fetchWrapper.get(`${serverBase}/users`);
      dispatch(successAdminPanelUpdate(users));
    } catch (err) {
      console.log(err);
    }
  };
};




