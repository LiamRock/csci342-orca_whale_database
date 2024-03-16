import "../WhaleBio.css";
import "./OrcaBio.css"
import SpeciesProfile from "../../WhaleGroup/SpeciesProfile";
import "../../WhaleGroup/SpeciesProfile.css"
//import DidYouKnow from "../../DidYouKnow/DidYouKnow"
import DidYouKnowCarousel from "../../DidYouKnow/DidYouKnowCarousel.jsx"
import UnsplashCarousel from "../../Carousel/UnsplashCarousel.jsx"
import Carousel from "../../Carousel/Carousel.jsx"
import { slides, facts } from "./orcaSlidesData.json"
import BioDescription from '../BioDescription/BioDescription.jsx'
import React, { useState, useEffect } from 'react';

const ecotypeDataAPI = [
  {
    id: 1,
    img: '/src/assets/SRKW.jpg',
    name: "Southern Resident Orcas",
    description:
      "Resident orcas are known for their strong family bonds and social structures. They primarily feed on fish, with a particular emphasis on salmon.",
    bioLink: "/whales/orcas/residents",
  },
  {
    id: 2,
    img: '/src/assets/transient.jpg',
    name: "Transient Orcas",
    description:
      "Transient orcas have a more nomadic lifestyle compared to residents. They prefer marine mammals as their primary prey, such as seals and sea lions.",
    bioLink: "/whales/orcas/transients",
  },
  {
    id: 3,
    img: '/src/assets/offshore.jpg',
    name: "Offshore Orcas",
    description:
      " Offshore orcas are less studied than residents and transients. They are known to inhabit deeper waters and have a more varied diet, including fish and squid.",
    bioLink: "/whales/orcas/offshore",
  },
];

function OrcaBio() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchOrcaImages = async () => {
      try {
        const response = await fetch(
          'https://api.unsplash.com/photos/random?query=orca,killer-whale&count=20&orientation=landscape&client_id=i4lZFrSlHGs23XNqRhHNIyg1A2Dzysi-v78ESKvWGPI'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        console.log('Fetched images:', data);
        
        // Filter images to only include those containing orcas
        const orcaImages = data.filter(photo => {
          // Check if description or alt contains "orca"
          return photo.alt_description && photo.alt_description.toLowerCase().includes("orca") ||
                 photo.description && photo.description.toLowerCase().includes("orca") || 
                 photo.alt_description && photo.alt_description.toLowerCase().includes("killer whale") || 
                 photo.description && photo.description.toLowerCase().includes("killer whale");
        });
        
        // Check if any images containing orcas are found
        if (orcaImages.length === 0) {
          throw new Error('No images of orcas found in the response');
        }
        
        // Map filtered images to URLs
        const urls = orcaImages.map(photo => photo.urls.regular);
        
        setImageUrls(urls);
  
        // Print name and description of filtered photos
        orcaImages.forEach(photo => {
          console.log('Name:', photo.alt_description || photo.description);
          console.log('Description:', photo.description || photo.alt_description);
        });
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    
    fetchOrcaImages(); // Call the fetchOrcaImages function here
  }, []);
  

  return (
    <div className="bio-page-container">
      <BioDescription 
        title="Orca Whales"
        subtitle="Orcinus orca"
        wiki="https://en.wikipedia.org/wiki/Orca"
        desc="The Pacific Northwest is home to diverse orcas, each with unique
        eco-types. Resident Orcas, known for familial bonds, mainly eat
        salmon and inhabit specific regions. Transient Orcas, preferring
        marine mammals, lead nomadic lives in smaller, less stable groups.
        Offshore Orcas, less studied, inhabit deeper waters with a broader
        diet. These orca variations highlight adaptability to different
        environments. Conservation is crucial due to challenges like
        declining salmon, pollution, and vessel noise, impacting their
        health in the rich PNW ecosystems."
      />

      <div className="orca-conservation-container">
        <h1 className="bio-title">Conservation</h1>
        <hr/>
        <p className="bio-white-text">Orca conservation in the Pacific Northwest (PNW) represents a multifaceted effort to protect and restore the region's iconic killer whale populations. With a particular focus on the critically endangered Southern Resident Killer Whales, conservation initiatives in the PNW aim to address the complex challenges threatening their survival. Key components of these efforts include habitat restoration and protection, especially for critical Chinook salmon spawning grounds, the primary food source for Southern Residents. Collaborative research endeavors seek to enhance our understanding of orca behavior, health, and the impacts of human activities on their environment. Stricter regulations on vessel traffic, noise reduction measures, and pollution control strategies contribute to minimizing disturbances to these whales. Public engagement and education play a crucial role, fostering a collective responsibility for the marine ecosystem's well-being. The Pacific Northwest's commitment to orca conservation underscores the interconnectedness of ecological health and human actions, emphasizing the need for sustainable practices to ensure the long-term survival of these majestic marine species.</p>
        <a className="bio-moreinfo-link" href="https://www.orcaconservancy.org/donate" target="_blank" rel="noreferrer">Donate</a>
      </div>

      <div className="card-style">
        {ecotypeDataAPI.map((whale) => (
          <SpeciesProfile
            key={whale.id}
            img={whale.img}
            name={whale.name}
            description={whale.description}
            bioLink={whale.bioLink}
          />
        ))}
      </div>

      <div className="carousel-container">
        <DidYouKnowCarousel data={facts}/>
      </div>

      {imageUrls.length > 0 ? (
        <div className="carousel-container">
          <UnsplashCarousel data={imageUrls}/>
        </div>
      ) : (
        <div className="carousel-container">
          <Carousel data={slides}/>
        </div>
      )}

    </div>
  );
}

export default OrcaBio;
