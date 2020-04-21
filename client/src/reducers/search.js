import { createReducer } from '@reduxjs/toolkit';

import { SET_SEARCH_QUERY, SET_SEARCH_RESULTS, SET_FILTER_ICON } from '../constants/actionTypes.js'

const initialState = {
  searchQuery: '',
  iconType: 'table',
  searchResults: [],
  sortedResults: [],
  isFetched: false
};

const searchReducer = createReducer(initialState, {
  [SET_SEARCH_QUERY]: (state, action) => ({ ...state, searchQuery: action.payload }),
  [SET_SEARCH_RESULTS]: (state, action) => ({ ...state, searchResults: action.payload, isFetched: true }),
  [SET_FILTER_ICON]: (state, action) => ({ ...state, iconType: action.payload })
})


export default searchReducer;