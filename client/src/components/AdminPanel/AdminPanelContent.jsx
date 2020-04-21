import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import '../../styles/AdminPanel/AdminPanelContent.css';

const AdminPanelContent = memo(({ users, saveUpdatedAdminPanel }) => {
	const roleMap = new Map([
		['address-book-role', 'addressBookRole'],
		['vacation-role', 'vacationRole'],
		['admin-role', 'isAdmin'],
	]);

	const handleClick = e => {
		const element = e.target;
		if (element.tagName === 'BUTTON' && !!element.dataset.role) {
			const userId = +e.currentTarget.dataset.id;
			const currentRole = e.target.dataset.role;
			const clickedRole = e.target.textContent.trim();

			const reqBody = {
				userRoleKey: roleMap.get(currentRole),
				userRoleValue: clickedRole,
			};

			saveUpdatedAdminPanel(userId, reqBody);
		}
	};

	const renderUserBookRole = ({ addressBookRole }) => {
		const bookRoleNames = ['EMPLOYEE', 'HR'];

		return bookRoleNames.map(roleName => {
			return addressBookRole === roleName ? (
				<button key={uuidv4()} className="role-btn selected">
					{addressBookRole}
				</button>
			) : (
				<button key={uuidv4()} className="role-btn" data-role="address-book-role">
					{roleName}
				</button>
			);
		});
	};

	const renderUserVacationRole = ({ vacationRole }) => {
		const vacationRoleNames = ['EMPLOYEE', 'PO', 'DD'];

		return vacationRoleNames.map(roleName => {
			return vacationRole === roleName ? (
				<button key={uuidv4()} className="role-btn selected">
					{vacationRole}
				</button>
			) : (
				<button key={uuidv4()} className="role-btn" data-role="vacation-role">
					{roleName}
				</button>
			);
		});
	};

	const renderUserAdminRole = ({ isAdmin }) => {
		const secondBtnClass = !!isAdmin ? 'selected' : '';
		const dataRole = !isAdmin ? 'admin-role' : '';
		return (
			<button key={uuidv4()} className={`role-btn ${secondBtnClass}`} data-role={dataRole}>
				ADMIN
			</button>
		);
	};

	const getGridTemplate = (user, key) => {
		const { id, firstName, lastName, firstNativeName, lastNativeName } = user;

		return (
			<div className="user-container-col" data-id={id} key={key} onClick={e => handleClick(e)}>
				<div className="user-identity-col">
					<img src={user.image} alt="" />
					<span>
						<h1 className="user-name-col" id="full-name">
							{firstName} {lastName}/
						</h1>
						<h2 className="user-native-name-col" id="full-native-name">
							{firstNativeName} {lastNativeName}
						</h2>
					</span>
				</div>
				<div className="user-role">{renderUserBookRole(user)}</div>
				<div className="user-role">{renderUserVacationRole(user)}</div>
				<div className="user-role">{renderUserAdminRole(user)}</div>
			</div>
		);
	};

	return (
		<div className="results-container" id="results-content">
			{users.map(user => getGridTemplate(user, uuidv4()))}
		</div>
	);
});

AdminPanelContent.propTypes = {
	users: PropTypes.array,
	saveUpdatedAdminPanel: PropTypes.func,
};

export default AdminPanelContent;
