import React, { useState } from 'react';

import { useAuthState, useAuthDispatch } from '../../hooks/authHook';

import '../../styles/LoginForm/LoginForm.css';

const LoginForm = () => {
	const { isloginError } = useAuthState();
	const { sendUserLoginRequest } = useAuthDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [formError, setFormError] = useState(null);

	const handleRequestSending = async () => {
		await sendUserLoginRequest({ email, password });
		if (!isloginError) {
			handleInvalidLogin();
		}
	};

	const displayErrorMessage = errorText => {
		formError.style.display = 'block';
		formError.textContent = errorText;
		formError.classList.add('error');
	};

	const hideErrorMessage = () => {
		formError.style.display = 'none';
	};

	const isEmailValid = () => /^[0-9a-z-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/i.test(email);

	const handleInvalidLogin = () => {
		displayErrorMessage('Please check your password or email');
	};

	const handleChange = (e, setState) => {
		setState(e.target.value);

		if (!!formError) hideErrorMessage();
	};

	const handleFormSubmit = e => {
		debugger;
		e.preventDefault();

		!!isEmailValid() ? handleRequestSending() : displayErrorMessage('Not correct email. Please, try again!');
	};

	return (
		<div className="main-inner-block">
			<div className="form-error" ref={ref => setFormError(ref)}></div>
			<div className="form-content">
				<form id="form" onSubmit={e => handleFormSubmit(e)}>
					<p className="field">
						<input
							type="email"
							onChange={e => handleChange(e, setEmail)}
							name="email"
							placeholder="Email"
							id="email"
						/>
						<i className="fas fa-user"></i>
					</p>
					<p className="field">
						<input
							type="password"
							onChange={e => handleChange(e, setPassword)}
							name="password"
							placeholder="Password"
							id="password"
							minLength="5"
							maxLength="20"
						/>
						<i className="fas fa-lock"></i>
					</p>
					<p className="submit">
						<button type="submit" name="submit" id="form-btn">
							<i className="fas fa-sign-in-alt"></i>
						</button>
					</p>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
