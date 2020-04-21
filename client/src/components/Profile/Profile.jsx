import React, { useEffect } from 'react';

import { useAuthState } from '../../hooks/authHook.js';
import { useProfileState, useProfileDispatch } from '../../hooks/profileHook.js';

import ProfileCard from './ProfileCard.jsx';
import ProfileInfo from './ProfileInfo.jsx';

const Profile = () => {
	const {
		currentUser: { canEditData, canViewExtraInfo },
	} = useAuthState();
	const { userProfile, editableFields, isClickedEdit } = useProfileState();
	const { fetchUserProfile, saveUpdatedProfile, changeEditStatus } = useProfileDispatch();

	useEffect(() => {
		fetchUserProfile();
	}, []);

	return (
		<>
			<ProfileCard profile={userProfile} />
			<ProfileInfo
				isClickedEdit={isClickedEdit}
				profile={userProfile}
				isExtraVisible={canViewExtraInfo}
				canEditData={canEditData}
				editableFields={editableFields}
				saveUpdatedProfile={saveUpdatedProfile}
				changeEditStatus={changeEditStatus}
			/>
		</>
	);
};

export default Profile;
