import { Buffer } from "buffer";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

import profile from "../../assets/profile-circle.svg";
import Avatar from "../Account/Avatar";

globalThis.Buffer = Buffer;

function DiscussionPost({
  id,
  email,
  username,
  lat,
  long,
  date,
  time,
  description,
  image,
  species,
  setState,
  avatarData
}) {
  const [edit, setEdit] = useState(false);
  const [deletion, setDeletion] = useState(false);
  // Set the initial state of post.
  const initialPost = {
    lat: lat,
    long: long,
    species: species,
    description: description,
    user: username,
  };

  const [formData, setFormData] = useState("");

  // Get redux state.
  const { user } = useSelector((state) => state.auth);

  // Convert the buffer array to a base64-encoded string
  const imageData =
    image && image.data ? Buffer.from(image.data).toString("base64") : "";

  const editPost = () => {
    // Empty the formData if canceling edit.
    if (edit == true) {
      setFormData("");
      // Set the formData to the initialPost to display and edit initial information.
    } else {
      setFormData(initialPost);
    }
    setEdit(!edit);
  };

  const showDelete = () => {
    setDeletion(!deletion);
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      // If the input is for an image file, set the state to the selected file
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      // For other input fields, update the form data as usual
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const deleteReq = JSON.stringify({
      id: id,
    });

    fetch("http://localhost:3000/posts", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: deleteReq,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("An error occurred deleting the post.");
        }
        return res.json();
      })
      .then(() => {
        toast.success("Post deleted successfully.");
        setState(deleteReq); // Set state in parent to fetch new data.
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        showDelete();
      });
  };

  const handleSaveEdits = (e) => {
    e.preventDefault();
    if (JSON.stringify(formData) === JSON.stringify(initialPost)) {
      toast.error("Please make changes to your post.");
      return;
    }
    if (!user.email) {
      // If the user is not logged in, display an error toast
      toast.error("You need to sign in before posting.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("id", id);
    // If lat and long are not empty, append them to formDataToSend
    if (formData.lat.trim() !== "") {
      formDataToSend.append("lat", formData.lat);
    } else {
      // Provide a default value for lat if it's empty
      formDataToSend.append("lat", "");
    }

    if (formData.long.trim() !== "") {
      formDataToSend.append("long", formData.long);
    } else {
      // Provide a default value for long if it's empty
      formDataToSend.append("long", "");
    }
    formDataToSend.append("species", formData.species);
    formDataToSend.append("description", formData.description);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    fetch("http://localhost:3000/posts", {
      method: "PUT",
      body: formDataToSend,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("An error occurred updating the post.");
        }
        return res.json();
      })
      .then(() => {
        toast.success(
          "Post updated successful! See post in posts page or account."
        );
        setState(formData); // Set state in parent to fetch new data.
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        editPost();
      });
  };

  const handleEscape = (e) => {
    if (e.key === "Escape") {
      setDeletion(false);
    }
  };

  return (
    <div onKeyDown={handleEscape}>
      {deletion == true ? (
        <div className="flex flex-col items-center">
          <div className="fixed top-0 h-[100vh] w-[100vw] bg-black opacity-[75%] z-10" />
          <div className="fixed flex flex-col items-center top-[35%] z-20 bg-gray-50 p-0 rounded-[5%] shadow-2xl">
            <p className="text-black mt-7 border-t-2 pl-10 pr-10 pt-2">
              Are you sure you want to delete this post?
            </p>
            <div className="flex space-x-6 m-5">
              <button
                className="transition duration-150 hover:scale-[1.1] bg-red-500 border-0"
                onClick={handleDelete}
              >
                Yes, Delete
              </button>
              <button
                className="transition duration-150 hover:scale-[1.1] bg-gray-50 text-gray-500 border-black border-[1px]"
                onClick={showDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex-col border border-gray-300 p-5 mx-auto mb-5 min-w-[20rem] max-w-[55%] shadow-md">
        {/* Render a form for editing if user is editing post, render post otherwise. */}
        {edit == true ? (
          <form
            className="flex flex-col text-gray-800"
            onSubmit={handleSaveEdits}
          >
            <div className="flex">
              {/* Renders avatar of user. */}
              <Avatar avatarData={avatarData} email={email} page={"post"}/>
              <div className="flex flex-col">
                {/* Flex container for username, location, and time. */}
                <div className="flex">
                  {/* Renders username. */}
                  <h1 className="text-[18px] m-0">{username}&nbsp;</h1>
                  <p className="text-[14px] text-gray-600">(you)</p>
                </div>
                {/* Flex container for location. */}
                <div className="flex flex-wrap">
                  <input
                    className="m-0 text-[14px] text-gray-500 bg-transparent border-2 border-indigo-500/100 bg-gray-200
                    pl-[5px] mr-6 max-w-[160px]"
                    spellCheck="false"
                    placeholder="Latitude (optional)"
                    type="text"
                    name="lat"
                    value={formData.lat}
                    onChange={handleChange}
                  />
                  <input
                    className="m-0 text-[14px] text-gray-500 bg-transparent border-2 border-indigo-500/100 bg-gray-200
                    pl-[5px] mr-6 max-w-[160px]"
                    spellCheck="false"
                    placeholder="Longitude (optional)"
                    type="text"
                    name="long"
                    value={formData.long}
                    onChange={handleChange}
                  />
                </div>
                {/* Renders date and time the post was made. */}
                <p className="m-0 text-[14px] text-gray-500">
                  {date} {time}
                </p>
              </div>
              {/* Renders the Save and Cancel button to allow user to save or cancel edits. */}
              <div className="flex flex-col self-center ml-auto">
                <button
                  className="transition duration-150 hover:scale-[1.1] border-0 bg-blue-500"
                  onClick={handleSaveEdits}
                >
                  Save
                </button>
                <button
                  className="bg-transparent border-0 text-red-500 hover:underline"
                  onClick={editPost}
                >
                  Cancel
                </button>
              </div>
            </div>
            {/* Renders the description edit form. */}
            <textarea
              className="m-0 text-[16px] text-gray-700 bg-transparent border-2 border-indigo-500/100 bg-gray-200
              p-[5px] mb-5 h-[300px]"
              spellCheck="false"
              placeholder="Description (required)"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            {imageData ? (
              <div className="group flex flex-col self-center relative items-center text-center">
                <img
                  src={`data:${image.contentType};base64,${imageData}`}
                  alt="Post"
                  className="w-[20rem] h-[20rem] rounded-[8px] self-center group-hover:brightness-50 "
                />
                <label
                  htmlFor="image"
                  className="absolute invisible group-hover:visible block w-[20rem] h-[20rem] rounded-[8px] p-10 align-middle z-[2] cursor-pointer"
                />
                <input
                  className="cursor-pointer invisible"
                  type="file"
                  name="image"
                  id="image"
                  placeholder="change"
                  onChange={handleChange}
                />
                <h3 className="text-white drop-shadow-[0_0_4px_black] absolute invisible group-hover:visible rounded-[8px] translate-y-[615%]">
                  Change image
                </h3>
              </div>
            ) : (
              <div>
                <input
                  className="cursor-pointer"
                  type="file"
                  name="image"
                  id="image"
                  placeholder="change"
                  onChange={handleChange}
                />
              </div>
            )}
          </form>
        ) : (
          /* Renders the post without editing forms. */
          <>
            {/* Renders the avatar of the user. */}
            <div className="flex mb-2.5">
              <Avatar avatarData={avatarData} email={email} page={"post"}/>
              {/* Renders the user's name and adds (you) if the post belongs to current user. */}
              <div className="flex flex-col">
                {email === user.email ? (
                  <div className="flex">
                    <h1 className="text-[18px] m-0">{username}&nbsp;</h1>
                    <p className="text-[14px] text-gray-600">(you)</p>
                  </div>
                ) : (
                  <h1 className="text-[18px] m-0">{username}</h1>
                )}
                {/* If location nonempty, render the fields. */}
                {long !== "" && lat !== "" && (
                  <p className="m-0 text-[14px] text-gray-500">
                    {lat}, {long}
                  </p>
                )}
                <p className="m-0 text-[14px] text-gray-500">
                  {date} {time}
                </p>
              </div>
              {/* Renders the edit button if post belongs to current user to allow 
                editing of the post. */}
              {email !== user.email ? null : (
                <div className="flex self-center ml-auto">
                  <button
                    className="transition duration-150 hover:scale-[1.1] border-0 mb-5"
                    onClick={editPost}
                  >
                    Edit
                  </button>
                  <button
                    className="transition duration-150 hover:scale-[1.1] border-0 mb-5 ml-5 bg-red-600"
                    onClick={showDelete}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
            <div>
              <p style={{ whiteSpace: 'pre-line' }} className="mb-2.5 text-[16px] text-gray-700 self-center ">
                {description}
              </p>
              {imageData ? (
                <img
                  src={`data:${image.contentType};base64,${imageData}`}
                  alt="Post"
                  className="w-full rounded-[8px] self-center"
                />
              ) : (
                <p></p>
              )}
            </div>
          </>
        )}
        <Toaster />
      </div>
    </div>
  );
}

export default DiscussionPost;
