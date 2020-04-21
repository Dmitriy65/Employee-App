import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

import { fetchUsers, setSearchQuery, setFilterIcon } from "../actions/search.js";
import filterUsers from '../utils/usersFilter.js';

export const useSearchState = () => {
  return {
    searchQuery: useSelector(state => state.search.searchQuery),
    iconType: useSelector(state => state.search.iconType),
    searchResults: useSelector(state => state.search.searchResults),
    sortedResults: useSelector((state) => filterUsers(state.search.searchResults, state.search.searchQuery)),
    isFetched: useSelector(state => state.search.isFetched)
  }
}

export const useSearchDispatch = () => {
  const dispatch = useDispatch();
  return {
    fetchUsers: useCallback(() => dispatch(fetchUsers()), [dispatch]),
    setSearchQuery: useCallback((query) => dispatch(setSearchQuery(query)), [dispatch]),
    setFilterIcon: useCallback((icon) => dispatch(setFilterIcon(icon)), [dispatch])
  }
}
