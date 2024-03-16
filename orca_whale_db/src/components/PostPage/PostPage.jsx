import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateDiscussion from "../CreateDiscussion/CreateDiscussion";
import DiscussionPost from "../DiscussionPost/DiscussionPost";
import Banner from "../HomePage/Banner/Banner";
import Sightings from "../Sightings/Sightings";

function PostPage() {
    const [posts, setPosts] = useState([]);
    const [filterDate, setFilterDate] = useState('');
    const [reverseOrder, setReverseOrder] = useState(false);

    useEffect(() => {
        // Fetch sightings data from backend when component mounts
        axios.get('http://localhost:3000/posts') // Assuming your backend is running on port 5001
            .then(response => {
              console.log(response.data.result);
                setPosts(response.data.result); // Assuming sightings data is stored in response.data.result
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
            // Set the initial value of filterDate to the current date
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
            const day = currentDate.getDate().toString().padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            setFilterDate(formattedDate);
    }, []);

  const handleFilterChange = (e) => {
   setFilterDate(e.target.value);
  };

  const handleReverseOrder = () => {
    setReverseOrder(!reverseOrder); // Toggle the state to reverse the order
};

  const filteredPosts = posts.filter(post => new Date(post.date) <= new Date(filterDate));
    
    return (
      <>
        <Banner title={"See what people have been posting!"} backgroundImage={"./src/assets/grey-whale-banner.jpg"} />
        <div className="mt-8"></div>
        <Sightings/>
        <form>
          <label htmlFor="filterDate" className="text-gray-700 ml-2 md:ml-[345px]">Filter up to a Date: </label>
          <input className="text-gray-700" type="date" id="filterDate" name="filterDate" value={filterDate} onChange={handleFilterChange} />
        </form>
        <div className="mt-6"></div>
        <button
        onClick={handleReverseOrder}
        className="block w-36 h-10 text-black text-sm bg-white p-12px rounded-2rem font-bold text-lg text-decoration-none border border-gray-700 ml-2 md:ml-[345px]
        active:bg-gray-100"
        >
          Reverse Order
        </button>
        <div className="mt-6"></div>
        {reverseOrder ? (
          filteredPosts.map(post => (
                  <DiscussionPost
                      key={post._id} // Assuming sighting objects have a unique identifier like _id
                      username={post.user}
                      lat={post.lat}
                      long={post.long}
                      time={post.time}
                      date={post.date}
                      description={post.description}
                      image={post.image}
                  />
          ))
          ) : (
            filteredPosts.slice().reverse().map(post => (
              <DiscussionPost
                  key={post._id} // Assuming sighting objects have a unique identifier like _id
                  username={post.user}
                  lat={post.lat}
                  long={post.long}
                  time={post.time}
                  date={post.date}
                  description={post.description}
                  image={post.image}
              />
          ))
        )}
        <CreateDiscussion/>
        <div className="mb-8"></div>
      </>
    )
  }
  
  export default PostPage;