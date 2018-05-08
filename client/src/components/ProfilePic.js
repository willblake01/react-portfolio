import React from 'react';
import profile from '../styles/images/profile.png';

const ProfilePic= (props) => (
    <img className={`profile-image ${props.unique}`} src={profile} alt="Profile Pic" />
);

export default ProfilePic;
