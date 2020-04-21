import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../styles/Header/HeaderNavbar.css';

const HeaderNavbar = ({ role }) => {
	const isAdmin = role === 'Admin';
	return (
		<nav className="header-link-nav">
			<ul>
				<li>
					<NavLink activeClassName="active" to="/home">
						Address Book
					</NavLink>
					<i className="fas fa-chevron-down"></i>
				</li>
				<li>
					<a>Leave Requests</a>
					<i className="fas fa-chevron-down"></i>
				</li>
				{!!isAdmin ? (
					<li className="admin-link">
						<NavLink to="/admin">Settings</NavLink>
						<i className="fas fa-chevron-down"></i>
					</li>
				) : (
					''
				)}
			</ul>
		</nav>
	);
};

HeaderNavbar.propTypes = {
	role: PropTypes.string,
};

export default HeaderNavbar;
