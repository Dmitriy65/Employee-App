import React from 'react';

import '../../styles/AdminPanel/AdminPanelSearch.css';

import AdminPanelSearchFilter from './AdminPanelSearchFilter.jsx';

const AdminPanelSearch = ({ handleSearchQuery }) => {
	return (
		<div className="search-content">
			<AdminPanelSearchFilter handleSearchQuery={handleSearchQuery} />
			<div className="panel-roles">
				<div className="adress-book-role">
					<div className="vertical-line"></div>
					<span>Address book role</span>
				</div>
				<div className="vacation-role">
					<div className="vertical-line"></div>
					<span>Vacation role</span>
				</div>
				<div className="admin-role">
					<div className="vertical-line"></div>
					<span>Admin</span>
				</div>
			</div>
		</div>
	);
};

export default AdminPanelSearch;
