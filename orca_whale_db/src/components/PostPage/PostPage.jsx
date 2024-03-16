import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateDiscussion from "../CreateDiscussion/CreateDiscussion";
import DiscussionPost from "../DiscussionPost/DiscussionPost";
import Banner from "../HomePage/Banner/Banner";
import Sightings from "../Sightings/Sightings";

function PostPage() {
    const [posts, setPosts] = useState([]);

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
    }, []);

    return (
      <>
        <Banner title={"See what people have been posting!"} backgroundImage={"./src/assets/grey-whale-banner.jpg"} />
        <div className="mt-8"></div>
        <Sightings/>
        {posts.slice().reverse().map(post => (
                <DiscussionPost
                    key={post._id} // Assuming sighting objects have a unique identifier like _id
                    username={post.user}
                    location={`${post.lat}, ${post.long}`}
                    time={post.time}
                    date={post.date}
                    description={post.description}
                    image={post.image}
                />
        ))}
        <CreateDiscussion/>
        <div className="mb-8"></div>
      </>
    )
  }
  
  export default PostPage;