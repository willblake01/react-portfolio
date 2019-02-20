import React from 'react';

const ProfilePic= (props) => (
    <img className={`profile-image ${props.unique}`} src='https://res.cloudinary.com/willblake01/image/upload/v1538510165/react-portfolio/profile.png' alt='Profile Pic' />
);

export default ProfilePic;
