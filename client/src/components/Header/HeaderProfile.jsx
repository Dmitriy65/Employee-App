import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../styles/Header/HeaderProfile.css';

const HeaderProfile = ({ currentUser: { firstName, lastName, profileId }, userLogout }) => {
	const handleLogoutClick = () => {
		const isLogout = window.confirm('Do you really want to logout from app?');

		if (!!isLogout) {
			localStorage.clear();
			userLogout();
		}
	};
	return (
		<div className="user-panel">
			<i className="fab fa-telegram-plane"></i>
			<div className="user-account">
				<img
					className="user-img"
					src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"
					alt="img"
				/>
				<Link to={`/profile/${profileId}`} className="profile-link">
					<p>
						{firstName} {lastName}
					</p>
				</Link>
			</div>

			<Link to="/login" className="exit-link" onClick={() => handleLogoutClick()}>
				<i className="fas fa-sign-out-alt"></i>
			</Link>
		</div>
	);
};

HeaderProfile.propTypes = {
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	profileId: PropTypes.number,
	userLogout: PropTypes.func,
};

export default HeaderProfile;
