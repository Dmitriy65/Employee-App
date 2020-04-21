import React, { memo, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import '../../styles/HomePage/HomePageContent.css';

const HomePageContent = memo(({ users, setFilterIcon, iconType }) => {
	let history = useHistory();
	const icons = useRef(Array.from({ length: 2 }, a => React.createRef(null)));

	const getTableTemplate = (user, key) => (
		<div className="user-container" key={key} onClick={() => history.push(`profile/${user.profileId}`)}>
			<div className="user-identity">
				<img src={user.image} alt="" />
				<h1 className="user-name">
					{user.firstName} {user.lastName}
				</h1>
				<h2 className="user-native-name">
					{user.firstNativeName} {user.lastNativeName}
				</h2>
			</div>
			<div className="user-job-info">
				<span>
					<i className="fas fa-laptop"></i>
					{user.department}
				</span>
				<span>
					<i className="fas fa-door-closed"></i>
					{user.room}
				</span>
			</div>
		</div>
	);

	const getGridTemplate = (user, key) => (
		<div className="user-container-col" key={key} onClick={() => history.push(`profile/${user.profileId}`)}>
			<div className="user-identity-col">
				<img src={user.image} alt="" />
				<span>
					<h1 className="user-name-col">
						{user.firstName} {user.lastName}
					</h1>
					<h2 className="user-native-name-col">
						{user.firstNativeName} {user.lastNativeName}
					</h2>
				</span>
			</div>
			<div className="user-job-info-col">
				<div className="department">
					<i className="fas fa-laptop"></i>
					{user.department}
				</div>
				<div className="room">
					<i className="fas fa-door-closed"></i>
					{user.room}
				</div>
			</div>
		</div>
	);

	const handleClick = e => {
		icons.current.forEach(icon => {
			const iconElement = icon.current;
			iconElement.classList.remove('active');
		});

		const icon = e.target;
		if (icon.tagName === 'I') {
			icon.classList.add('active');
			setFilterIcon(icon.id);
		}
	};

	const templateTypes = { table: getTableTemplate, grid: getGridTemplate };

	return (
		<div className="results">
			<div className="results-header" id="results-header">
				<p className="results-count" id="count">
					{users.length} employees displayed
				</p>
				<div className="view-type" id="view-type" onClick={e => handleClick(e)}>
					<i ref={icons.current[0]} className="fas fa-th-large" id="table"></i>
					<i ref={icons.current[1]} className="fas fa-bars" id="grid"></i>
				</div>
			</div>

			<div className="results-container" id="results-content">
				{users.map(user => templateTypes[iconType](user, uuidv4()))}
			</div>
		</div>
	);
});

HomePageContent.propTypes = {
	users: PropTypes.array,
	setFilterIcon: PropTypes.func,
	iconType: PropTypes.string
};

export default HomePageContent;
