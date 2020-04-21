import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

import { useAuthState } from '../../hooks/authHook.js';

import AdminPanel from '../AdminPanel/AdminPanel.jsx';
import Profile from '../Profile/Profile.jsx';
import PrivateRouter from '../PrivateRouter/PrivateRouter.jsx';
import Header from '../Header/Header.jsx';
import HomePage from '../HomePage/HomePage.jsx';
import LoginForm from '../LoginForm/LoginForm.jsx';

import '../../styles/App/App.css';

const App = () => {
	const { isUserLoggedIn } = useAuthState();

	return (
		<>
			<Header />
			<div className="wrapper">
				<div className="main-inner">
					<Switch>
						<PrivateRouter exact path="/home" component={HomePage} />
						<PrivateRouter exact path="/profile/:id" component={Profile} />
						<PrivateRouter exact path="/admin" component={AdminPanel} />

						<Route
							exact
							path="/login"
							render={props => (!!isUserLoggedIn ? <Redirect to="/home" /> : <LoginForm {...props} />)}
						/>

						<Route path="/" render={() => <Redirect to="/home" />} />
					</Switch>
				</div>
			</div>
		</>
	);
};

App.propTypes = {
	isUserLoggedIn: propTypes.bool,
};

export default App;
