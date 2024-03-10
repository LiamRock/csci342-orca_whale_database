import React from 'react';
import './DiscussionPost.css';

import profile from '../../assets/profile-circle.svg';
import postImage from '../../assets/banner.jpg';

function DiscussionPost({ username, location, date, time, description }) {
    return (
        <div className="post-container">
            <div className="user-info">
                <img src={profile} alt="Profile" className="profile-image" />
                <div className="user-details">
                    <h1 className="username">UserName{username}</h1>
                    <p className="location">Location{location}</p>
                    <p className="time">Date and Time{date} {time}</p>
                </div>
            </div>
            <p className="description">
                Description{description}
            </p>
            <img src={postImage} alt="Post" className="post-image" />
        </div>
    );
}

export default DiscussionPost;