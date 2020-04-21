import { useSelector, useDispatch } from "react-redux";
import { useCallback } from 'react';

import { saveUpdatedAdminPanel, setAdminSearchQuery, fetchUsers } from '../actions/admin.js';
import filterUsers from '../utils/usersFilter.js';

export const useAdminState = () => {
  return {
    isAdminPanelNeedUpdate: useSelector(state => state.admin.isAdminPanelNeedUpdate),
    adminSearchQuery: useSelector(state => state.admin.adminSearchQuery),
    adminSearchResults: useSelector(state => state.admin.adminSearchResults),
    adminSortedResults: useSelector((state) => filterUsers(state.admin.adminSearchResults, state.admin.adminSearchQuery))
  }
}

export const useAdminDispatch = () => {
  const dispatch = useDispatch();
  return {
    setAdminSearchQuery: useCallback((query) => dispatch(setAdminSearchQuery(query)), [dispatch]),
    fetchUsers: useCallback(() => dispatch(fetchUsers()), [dispatch]),
    saveUpdatedAdminPanel: useCallback((id, body) => dispatch(saveUpdatedAdminPanel(id, body)), [dispatch])
  }
}



