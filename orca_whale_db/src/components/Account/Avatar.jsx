import { Buffer } from "buffer";
import axios from "axios";
import { useState, useEffect } from "react";

import profile from "../../assets/profile-circle.svg";

globalThis.Buffer = Buffer;

const Avatar = ({ email, page }) => {
  const [avatar, setAvatar] = useState(null);
  const [pictureData, setPictureData] = useState(null);

  // Fetch sightings data from backend when component mounts
  axios
    .get("http://localhost:3000/signup")
    .then((response) => {
      const allUsers = response.data.result;
      const specificUser = allUsers.filter((user) => email === user.email);
      setAvatar(specificUser[0].avatar);
      setPictureData(
        avatar && avatar.data ? Buffer.from(avatar.data).toString("base64") : ""
      );
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });

  return (
    <div>
      {pictureData && page === "post" ? (
        <img
          src={`data:${avatar.contentType};base64,${pictureData}`}
          alt="User avatar"
          className="h-[55px] w-[55px] rounded-[100%] mr-4"
        />
      ) : pictureData && page === "account" ? (
        <img
          src={`data:${avatar.contentType};base64,${pictureData}`}
          alt="User avatar"
          className="transition duration-150 hover:scale-[1.1] w-[256px] min-w-[180px] mr-[100px] rounded-[100%] p-0 cursor-pointer"
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
          className="transition duration-150 hover:scale-[1.1] w-[256px] min-w-[180px] mr-[100px] rounded-[100%] p-0 cursor-pointer"
        />
      )}
    </div>
  );
};

export default Avatar;
