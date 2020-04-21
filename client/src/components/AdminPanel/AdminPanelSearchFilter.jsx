import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/AdminPanel/AdminPanelSearchFilter.css';

const AdminPanelSearchFilter = ({ handleSearchQuery }) => {
	return (
		<div className="search-bar">
			<i className="fa fa-search one"></i>
			<input
				className="input-field"
				onChange={e => handleSearchQuery(e.target.value)}
				id="input-field"
				type="text"
				placeholder="Type to search"
			></input>
		</div>
	);
};

AdminPanelSearchFilter.propTypes = {
	handleSearchQuery: PropTypes.func,
};

export default AdminPanelSearchFilter;
