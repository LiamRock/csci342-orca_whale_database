import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateDiscussion from "../CreateDiscussion/CreateDiscussion";
import DiscussionPost from "../DiscussionPost/DiscussionPost";
import Banner from "../HomePage/Banner/Banner";
import Sightings from "../Sightings/Sightings";

function PostPage() {
    const [sightings, setSightings] = useState([]);

    useEffect(() => {
        // Fetch sightings data from backend when component mounts
        axios.get('http://localhost:3000/sightings') // Assuming your backend is running on port 5001
            .then(response => {
                setSightings(response.data); // Assuming sightings data is stored in response.data.result
            })
            .catch(error => {
                console.error('Error fetching sightings:', error);
            });
    }, []);

    return (
      <>
        <Banner title={"See what people have been posting!"} backgroundImage={"./src/assets/grey-whale-banner.jpg"} />
        <div className="mt-8"></div>
        <Sightings/>
        <DiscussionPost/>
        {/*sightings.map(sighting => (
                <DiscussionPost
                    key={sighting.id} // Assuming sighting objects have a unique identifier like _id
                    username={sighting.user}
                    location={`${sighting.lat}, ${sighting.long}`}
                    time={sighting.time}
                    description={sighting.description}
                />
        ))*/}
        <CreateDiscussion/>
        <div className="mb-8"></div>
      </>
    )
  }
  
  export default PostPage;