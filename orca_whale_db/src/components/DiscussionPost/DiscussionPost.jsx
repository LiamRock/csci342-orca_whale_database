import {Buffer} from 'buffer';
import React from 'react';
import profile from '../../assets/profile-circle.svg';
globalThis.Buffer = Buffer;

function DiscussionPost({ username, location, date, time, description, image }) {
    // Convert the buffer array to a base64-encoded string
    const buffer = Buffer.from(image.data);
    const imageData = buffer.toString('base64');
    return (
        <div className="flex flex-col border border-gray-300 p-5 mx-auto mb-5 max-w-[55%] shadow-md">
            <div className="flex items-center mb-2.5">
                <img src={profile} alt="Profile" className="w-[50px] h-[50px] rounded-[50%] mr-2.5" />
                <div className="flex flex-col">
                    <h1 className="text-[18px] m-0 ">{username}</h1>
                    <p className="m-0 text-[14px] text-gray-500 ">{location}</p>
                    <p className="m-0 text-[14px] text-gray-500">{date} {time}</p>
                </div>
            </div>
            <p className="mb-2.5 text-[14px] text-gray-700 self-center ">
                {description}
            </p>
            
            <img src={`data:${image.contentType};base64,${imageData}`} alt="Post" className="w-full rounded-[8px] self-center  " />
        </div>
    );
}

export default DiscussionPost;