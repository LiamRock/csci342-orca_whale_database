import {Buffer} from 'buffer';
import React from 'react';
import './DiscussionPost.css';
import profile from '../../assets/profile-circle.svg';
globalThis.Buffer = Buffer;

function DiscussionPost({ username, lat, long, date, time, description, image }) {
    // Convert the buffer array to a base64-encoded string
    const imageData = image && image.data ? Buffer.from(image.data).toString('base64') : '';
    return (
        <div className="post-container">
            <div className="user-info">
                <img src={profile} alt="Profile" className="profile-image" />
                <div className="user-details">
                    <h1 className="username">{username}</h1>
                    {long !== '' && lat !== '' && ( // Check if location is not empty
                        <p className="location">{lat}, {long}</p>
                    )}
                    <p className="time">{date} {time}</p>
                </div>
            </div>
            <p className="description">
                {description}
            </p>
            {imageData ? (
            <img src={`data:${image.contentType};base64,${imageData}`} alt="Post" className="post-image" />
            ) : (
                <p>No image available</p>
            )}
        </div>
    );
}

export default DiscussionPost;