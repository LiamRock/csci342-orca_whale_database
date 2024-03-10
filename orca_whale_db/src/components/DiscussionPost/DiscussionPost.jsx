import React from 'react';
import './DiscussionPost.css'; // Import your CSS file

import profile from '../../assets/profile-circle.svg';
import postImage from '../../assets/banner.jpg';

function DiscussionPost() {
    return (
        <div className="post-container">
            <div className="user-info">
                <img src={profile} alt="Profile" className="profile-image" />
                <div className="user-details">
                    <h1 className="username">UserName</h1>
                    <p className="location">Location</p>
                    <p className="time">Time and Date</p>
                </div>
            </div>
            <p className="description">
                Description
            </p>
            <img src={postImage} alt="Post" className="post-image" />
        </div>
    );
}

export default DiscussionPost;