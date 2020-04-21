import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import '../../styles/Profile/ProfileCard.css';

const ProfileCard = ({ profile: { gender, fullName, fullNativeName, employeeID, cardType } }) => {
	const history = useHistory();
	return (
		<section className="short-profile">
			<div className="back-page-btn" onClick={() => history.goBack()}>
				<i className="fas fa-chevron-left"></i>
			</div>
			<div className="profile-inner">
				<div className="profile-photo">
					<img
						src="http://komotoz.ru/photo/priroda/photos/samye_krasivye_mesta/samye_krasivye_mesta_24.jpg"
						alt=""
						name="photo"
						id="profile-photo"
					/>
				</div>
				<div className="short-profile-info">
					<p id="gender">{gender}</p>
					<p className="full-name" id="full-name">
						{fullName}
					</p>
					<p className="full-native-name" id="full-native-name">
						{fullNativeName}
					</p>
				</div>
				<div className="profile-cards">
					<span className="card-id card" id="card-id">
						ID {employeeID}
					</span>
					<span className="card-type card" id="card-type">
						{cardType}
					</span>
				</div>
			</div>
		</section>
	);
};

ProfileCard.propTypes = {
	setSearchQuery: PropTypes.func,
	gender: PropTypes.string,
	fullName: PropTypes.string,
	fullNativeName:  PropTypes.string,
	employeeID: PropTypes.number,
	cardType: PropTypes.string
};

export default ProfileCard;
