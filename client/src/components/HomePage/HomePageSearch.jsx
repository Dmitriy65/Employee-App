import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/HomePage/HomePageSearch.css';

const HomePageSearch = ({ setSearchQuery }) => {
	return (
		<div className="search-panel">
			<h2 className="search-basic">BASIC SEARCH</h2>
			<div className="search-input-block">
				<i className="fa fa-search two"></i>
				<input
					className="input-name-field"
					id="input-field"
					onChange={e => setSearchQuery(e.target.value)}
					type="text"
					placeholder="John Smith / Джон Смит"
				/>
				<button className="search-btn" id="search-btn" type="submit">
					SEARCH
				</button>
			</div>
		</div>
	);
};

HomePageSearch.propTypes = {
	setSearchQuery: PropTypes.func,
};

export default HomePageSearch;
