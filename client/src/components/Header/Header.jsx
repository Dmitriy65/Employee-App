import React from 'react';

import { useAuthState, useAuthDispatch } from '../../hooks/authHook.js';

import HeaderLogo from './HeaderLogo.jsx';
import HeaderNavbar from './HeaderNavbar.jsx';
import HeaderProfile from './HeaderProfile.jsx';

import '../../styles/Header/Header.css';

const Header = () => {
	const { currentUser, isUserLoggedIn } = useAuthState();
	const { userLogout } = useAuthDispatch();

	return (
		<header className="header">
			<div className="wrapper">
				<div className="header-inner">
					<HeaderLogo />
					{!!isUserLoggedIn ? (
						<>
							<HeaderNavbar role={currentUser.role} />
							<HeaderProfile userLogout={userLogout} currentUser={currentUser} />
						</>
					) : (
						''
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
