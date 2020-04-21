import React, { useEffect } from 'react';

import { useAdminState, useAdminDispatch } from '../../hooks/adminHook.js';

import AdminPanelHeader from './AdminPanelHeader.jsx';
import AdminPanelSearch from './AdminPanelSearch.jsx';
import AdminPanelContent from './AdminPanelContent.jsx';

import '../../styles/AdminPanel/AdminPanel.css';

const AdminPanel = () => {
	const { adminSortedResults } = useAdminState();
	const { setAdminSearchQuery, fetchUsers, saveUpdatedAdminPanel } = useAdminDispatch();

	useEffect(() => {
		setAdminSearchQuery('');
		fetchUsers();
	}, []);

	return (
		<div className="rounding">
			<div className="admin-panel">
				<div className="admin-panel-inner">
					<AdminPanelHeader />
					<AdminPanelSearch handleSearchQuery={setAdminSearchQuery} />
					<AdminPanelContent users={adminSortedResults} saveUpdatedAdminPanel={saveUpdatedAdminPanel} />
				</div>
			</div>
		</div>
	);
};

export default AdminPanel;
