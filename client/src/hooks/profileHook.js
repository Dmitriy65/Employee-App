import { useSelector, useDispatch } from "react-redux";
import { useCallback } from 'react';

import { fetchUserProfile, saveUpdatedProfile, changeEditStatus } from "../actions/profile.js";

export const useProfileState = () => {
  return {
    isClickedEdit: useSelector(state => state.profile.isClickedEdit),
    editButtonName: useSelector(state => state.profile.editButtonName),
    userProfile: useSelector(state => state.profile.userProfile),
    editableFields: useSelector(state => state.profile.editableFields)
  }
}

export const useProfileDispatch = () => {
  const dispatch = useDispatch();
  return {
    fetchUserProfile: useCallback(() => dispatch(fetchUserProfile()), [dispatch]),
    saveUpdatedProfile: useCallback((data) => dispatch(saveUpdatedProfile(NID(data))), [dispatch]),
    changeEditStatus: useCallback(() => dispatch(changeEditStatus()), [dispatch])
  }
}

const normalizeInputData = (inputs) => {
  if (!!inputs.length) return;
  const inputRefs = inputs.current.map(input => input.current);

  return inputRefs.map(input => ({
    name: input.name,
    value: !!input.value.length ? input.value : input.placeholder,
  }));
};

const NID = normalizeInputData;