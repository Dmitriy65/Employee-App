import { createAction } from '@reduxjs/toolkit';

import { SET_SEARCH_QUERY, SET_SEARCH_RESULTS, SET_FILTER_ICON } from '../constants/actionTypes.js'
import { fetchWrapper } from '../utils/fetchWrapper.js';
import { serverBase } from '../constants/server.js';

export const setSearchQuery = createAction(SET_SEARCH_QUERY);

export const setSearchResults = createAction(SET_SEARCH_RESULTS);

export const setFilterIcon = createAction(SET_FILTER_ICON);

export const fetchUsers = () => {
  return async dispatch => {
    try {
      const { data: { users } } = await fetchWrapper.get(`${serverBase}/users`);
      dispatch(setSearchResults(users));
    } catch (err) {
      console.log(err);
    }
  };
};


