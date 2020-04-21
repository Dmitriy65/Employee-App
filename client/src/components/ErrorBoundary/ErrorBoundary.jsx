import React, { Component } from 'react';

import { fetchWrapper } from '../../utils/fetchWrapper.js';
import { serverBase } from '../../constants/server.js';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	async componentDidCatch(error, errorInfo) {
		try {
			console.log(error, errorInfo);
			const response = await fetchWrapper.post(`${serverBase}/serviceErrors`, { error, errorInfo });
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		const { hasError } = this.state;
		return !!hasError ? <h1>Something went wrong.</h1> : this.props.children;
	}
}

export default ErrorBoundary;
