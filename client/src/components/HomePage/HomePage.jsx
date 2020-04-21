import React, { useEffect } from 'react';

import { useSearchState, useSearchDispatch } from '../../hooks/searchHook.js';

import HomePageSearch from './HomePageSearch.jsx';
import HomePageContent from './HomePageContent.jsx';
import HomePageContentLoader from './HomePageContentLoader.jsx';

const HomePage = () => {
	const { sortedResults, iconType, isFetched } = useSearchState();
	const { fetchUsers, setSearchQuery, setFilterIcon } = useSearchDispatch();

	useEffect(() => {
		setSearchQuery('');
		fetchUsers();
	}, []);

	return (
		<>
			<HomePageSearch setSearchQuery={setSearchQuery} />
			{!!isFetched ? (
				<HomePageContent users={sortedResults} setFilterIcon={setFilterIcon} iconType={iconType} />
			) : (
				<HomePageContentLoader />
			)}
		</>
	);
};

export default HomePage;
