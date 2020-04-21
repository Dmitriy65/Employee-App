import { createReducer } from '@reduxjs/toolkit';

import { SET_USER_PROFILE, UPDATE_USER_PROFILE, CHANGE_CLICKED_STATUS } from '../constants/actionTypes.js'

const initialState = {
  userProfile: {},
  editableFields: ['mobilePhone', 'email', 'skypeID'],
  isClickedEdit: false
}

const profileReducer = createReducer(initialState, {
  [SET_USER_PROFILE]: (state, action) => ({ ...state, userProfile: action.payload }),
  [CHANGE_CLICKED_STATUS]: (state, action) => ({ ...state, isClickedEdit: true }),
  [UPDATE_USER_PROFILE]: (state, action) => ({ ...state, isClickedEdit: false, userProfile: action.payload })
})


export default profileReducer;