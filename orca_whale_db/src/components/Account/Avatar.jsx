import { Buffer } from "buffer";
import axios from "axios";
import { useState, useEffect } from "react";

import profile from "../../assets/profile-circle.svg";

globalThis.Buffer = Buffer;

const Avatar = ({ avatarData, email, page }) => {

  let pictureData = null;
  let data = null;

  if (avatarData) {
    const user = avatarData.filter((user) => user.email === email)
    if (user.length > 0) {
      data = avatarData[0].avatar;
      pictureData =
        data && data.data ? Buffer.from(data.data).toString("base64") : "";
    }
  }


  return (
    <div>
      {pictureData && page === "post" ? (
        <img
          src={`data:${data.contentType};base64,${pictureData}`}
          alt="User avatar"
          className="h-[55px] w-[55px] rounded-[100%] mr-4"
        />
      ) : pictureData && page === "account" ? (
        <img
          src={`data:${data.contentType};base64,${pictureData}`}
          alt="User avatar"
          className="transition duration-150 hover:scale-[1.1] w-[230px] h-[230px] min-w-[180px] mr-[100px] rounded-[100%] p-0 cursor-pointer"
        />
      ) : page === "post" ? (
        <img
          src={profile}
          alt="User avatar"
          className="h-[55px] w-[55px] rounded-[100%] mr-4"
        />
      ) : (
        <img
          src={profile}
          alt="User avatar"
          className="transition duration-150 hover:scale-[1.1] w-[230px] h-[230px] min-w-[180px] mr-[100px] rounded-[100%] p-0 cursor-pointer"
        />
      )}
    </div>
  );
};

export default Avatar;
