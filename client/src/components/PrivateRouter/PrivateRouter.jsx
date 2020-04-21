import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuthState } from '../../hooks/authHook.js';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isUserLoggedIn } = useAuthState();
	return (
		<Route
			{...rest}
			render={props =>
				!!isUserLoggedIn ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
				)
			}
		/>
	);
};

export default PrivateRoute;
