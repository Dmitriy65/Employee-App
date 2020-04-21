import React, { useRef, memo } from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import '../../styles/Profile/ProfileInfo.css';

const ProfileInfo = memo(
	({ profile, canEditData, editableFields, isExtraVisible, saveUpdatedProfile, changeEditStatus, isClickedEdit }) => {
		const inputs = useRef(Array.from({ length: editableFields.length }, _ => React.createRef(null)));

		const handleClick = async e => {
			if (!canEditData) return;

			const buttonName = e.target.textContent;

			if (buttonName === 'SAVE CHANGES') saveUpdatedProfile(inputs);

			changeEditStatus();
		};

		const { department, room, internalPhone, mobilePhone, email, skypeID, cNumber, hireDate, status } = profile;
		return (
			<>
				<div className="dividing-line"></div>
				<div className="primary-profile">
					<div className="primary-profile-inner">
						<section className="general-info">
							<h3 className="article-title">GENERAL INFO</h3>
							<div className="article-item">
								<div className="item-keys">
									<p id="department-key">
										<i className="fas fa-briefcase"></i>
										<span>Department</span>
									</p>
									<p id="room-key">
										<i className="fas fa-door-closed"></i>
										<span>Room</span>
									</p>
								</div>
								<div className="item-values">
									<p id="department">{department}</p>
									<p id="room">{room}</p>
								</div>
							</div>
						</section>

						<section className="general-info">
							<h3 className="article-title">CONTACTS</h3>
							<div className="article-item">
								<div className="item-keys">
									<p id="internal-phone-key">
										<i className="fas fa-phone"></i>
										<span>Internal phone</span>
									</p>
									<p id="mobile-phone-key">
										<i className="fas fa-mobile-alt"></i>
										<span>Mobile phone</span>
									</p>
									<p id="email-key">
										<i className="fas fa-at"></i>
										<span>Email</span>
									</p>
									<p id="skype-id-key">
										<i className="fab fa-skype"></i>
										<span>Skype ID</span>
									</p>
									{!!isExtraVisible ? (
										<p id="c-number-key">
											<i className="fas fa-stroopwafel"></i>
											<span>C-Number</span>
										</p>
									) : (
										''
									)}
								</div>
								<div className="item-values">
									<p id="internal-phone">{internalPhone}</p>
									{!!canEditData && !!isClickedEdit ? (
										<>
											{editableFields.map((field, i) => (
												<input
													key={uuidv4()}
													ref={inputs.current[i]}
													className="edit-input"
													name={field}
													placeholder={profile[field]}
												/>
											))}
										</>
									) : (
										<>
											<p id="mobile-phone">{mobilePhone}</p>
											<p id="email">
												<a href="/" id="profile-email">
													{email}
												</a>
											</p>
											<p id="skype-id">
												<a href="/" id="profile-skype">
													{skypeID}
												</a>
											</p>
										</>
									)}
									{!!isExtraVisible ? <p id="c-number">{cNumber}</p> : ''}
								</div>
							</div>
						</section>

						<section className="general-info">
							<h3 className="article-title">PROFILE INFO</h3>
							<div className="article-item">
								<div className="item-keys">
									<p id="hire-data-key">
										<i className="fas fa-phone"></i>
										<span>Hire date</span>
									</p>
									{!!isExtraVisible ? (
										<p id="status-key">
											<i className="fas fa-mobile-alt"></i>
											<span>Status</span>
										</p>
									) : (
										''
									)}
								</div>
								<div className="item-values">
									<p id="hire-data">{hireDate}</p>
									{!!isExtraVisible ? <p id="status">{status}</p> : ''}
								</div>
							</div>
						</section>
					</div>
					<div className="edit-profile">
						<button className="edit-profile-btn" type="button" onClick={e => handleClick(e)}>
							{!!isClickedEdit ? 'SAVE CHANGES' : 'EDIT FIELDS'}
						</button>
					</div>
				</div>
			</>
		);
	}
);

ProfileInfo.propTypes = {
	profile: PropTypes.object,
	canEditData: PropTypes.bool,
	editableFields: PropTypes.array,
	isExtraVisible: PropTypes.bool,
	saveUpdatedProfile: PropTypes.func,
	changeEditStatus: PropTypes.func,
	isClickedEdit: PropTypes.bool,
};

export default ProfileInfo;
