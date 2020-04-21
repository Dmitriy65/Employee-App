import { createReducer } from '@reduxjs/toolkit';

import { SUCCESS_ADMIN_PANEL_UPDATE, SET_ADMIN_SEARCH_QUERY, SET_ADMIN_SEARCH_RESULTS } from '../constants/actionTypes.js'

const initialState = {
  adminSearchQuery: '',
  adminSearchResults: [],
  adminSortedResults: []
}

const adminReducer = createReducer(initialState, {
  [SUCCESS_ADMIN_PANEL_UPDATE]: (state, action) => ({ ...state, adminSearchResults: action.payload }),
  [SET_ADMIN_SEARCH_QUERY]: (state, action) => ({ ...state, adminSearchQuery: action.payload }),
  [SET_ADMIN_SEARCH_RESULTS]: (state, action) => ({ ...state, adminSearchResults: action.payload })
})

export default adminReducer;
