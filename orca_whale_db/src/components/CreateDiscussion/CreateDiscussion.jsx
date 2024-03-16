import React, { useState, useEffect } from 'react';
import { Toaster, toast } from "react-hot-toast";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateDiscussion(){
  const [formData, setFormData] = useState({
    lat: '',
    long: '',
    species: '',
    description: '',
    user: '',
    image: ''
});

const user = useSelector(state => state.auth.user);
const navigate = useNavigate();

const handleChange = (e) => {
  if (e.target.name === 'image') {
    // If the input is for an image file, set the state to the selected file
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  } else {
    // For other input fields, update the form data as usual
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!user.userName) {
    // If the user is not logged in, display an error toast
    toast.error('You need to sign in before posting.');
    return;
  }

  const formDataToSend = new FormData();
  formDataToSend.append('user', user.userName);
 // If lat and long are not empty, append them to formDataToSend
 if (formData.lat.trim() !== '') {
  formDataToSend.append('lat', formData.lat);
} else {
  // Provide a default value for lat if it's empty
  formDataToSend.append('lat', '');
}

if (formData.long.trim() !== '') {
  formDataToSend.append('long', formData.long);
} else {
  // Provide a default value for long if it's empty
  formDataToSend.append('long', '');
}
  formDataToSend.append('species', formData.species);
  formDataToSend.append('description', formData.description);
  if (formData.image) {
    formDataToSend.append('image', formData.image);
  }

  axios.post('http://localhost:3000/posts', formDataToSend)
    .then(response => {
      console.log('Post created successfully:', response.data.result);
      // Optionally, you can reset the form fields after successful submission
      setFormData({
        lat: '',
        long: '',
        species: '',
        description: '',
        image: null
      });
      // Refresh the page
      toast.success("Post created successful! See post in account");
      navigate('/account');
    })
    .catch(error => {
      console.error('Error creating Post:', error);
      toast.error('Error creating post');
    });
};

const handleCancel = () => {
  // Clear all form fields
  setFormData({
    lat: '',
    long: '',
    species: '',
    description: '',
    image: null // Reset image to null
  });
};
  return(
    <>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">New Sighting</div>
        <form className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl" onSubmit={handleSubmit}>
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellCheck="false"
            placeholder="Latitude (optional)"
            type="text"
            name="lat"
            value={formData.lat}
            onChange={handleChange}
          />
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellCheck="false"
            placeholder="Longitude (optional)"
            type="text"
            name="long"
            value={formData.long}
            onChange={handleChange}
          />
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellCheck="false"
            placeholder="Species (optional)"
            type="text"
            name="species"
            value={formData.species}
            onChange={handleChange}
          />
          <textarea
            className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
            spellCheck="false"
            placeholder="Description (required)"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <input
          type="file" name="image"
          onChange={handleChange}
        />
        <p>Image not required*</p>

          <div className="buttons flex">
            <button
              type="button"
              className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
              onClick={handleCancel}
            >Cancel</button>
            <button
              type="submit"
              className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            >Post</button>
          </div>
        </form>
        <Toaster/>
      </>
    );
  }

export default CreateDiscussion;