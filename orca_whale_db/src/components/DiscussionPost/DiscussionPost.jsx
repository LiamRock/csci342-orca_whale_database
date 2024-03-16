import {Buffer} from 'buffer';
import React from 'react';
import profile from '../../assets/profile-circle.svg';
globalThis.Buffer = Buffer;

function DiscussionPost({ username, lat, long, date, time, description, image }) {
    // Convert the buffer array to a base64-encoded string
    const imageData = image && image.data ? Buffer.from(image.data).toString('base64') : '';
    return (
        <div className="flex flex-col border border-gray-300 p-5 mx-auto mb-5 max-w-[55%] shadow-md">
            <div className="lex items-center mb-2.5">
                <img src={profile} alt="Profile" className="w-[50px] h-[50px] rounded-[50%] mr-2.5" />
                <div className="flex flex-col">
                    <h1 className="text-[18px] m-0">{username}</h1>
                    {long !== '' && lat !== '' && ( // Check if location is not empty
                        <p className="m-0 text-[14px] text-gray-500">{lat}, {long}</p>
                    )}
                    <p className="m-0 text-[14px] text-gray-500">{date} {time}</p>
                </div>
            </div>
            <p className="mb-2.5 text-[14px] text-gray-700 self-center ">
                {description}
            </p>
            {imageData ? (
            <img src={`data:${image.contentType};base64,${imageData}`} alt="Post" className="w-full rounded-[8px] self-center" />
            ) : (
                <p>No image available</p>
            )}
        </div>
    );
}

export default DiscussionPost;