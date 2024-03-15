import {Buffer} from 'buffer';
import React from 'react';
import './DiscussionPost.css';
import profile from '../../assets/profile-circle.svg';
globalThis.Buffer = Buffer;

function DiscussionPost({ username, location, date, time, description, image }) {
    // Convert the buffer array to a base64-encoded string
    const buffer = Buffer.from(image.data);
    const imageData = buffer.toString('base64');
    return (
        <div className="post-container">
            <div className="user-info">
                <img src={profile} alt="Profile" className="profile-image" />
                <div className="user-details">
                    <h1 className="username">{username}</h1>
                    <p className="location">{location}</p>
                    <p className="time">{date} {time}</p>
                </div>
            </div>
            <p className="description">
                {description}
            </p>
            
            <img src={`data:${image.contentType};base64,${imageData}`} alt="Post" className="post-image" />
        </div>
    );
}

export default DiscussionPost;