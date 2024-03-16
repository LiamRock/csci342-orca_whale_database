import '../WhaleBio.css';
import BioDescription from '../BioDescription/BioDescription.jsx'
import DidYouKnowCarousel from "../../DidYouKnow/DidYouKnowCarousel.jsx"

/* Dynamic img rendering*/
import { useState, useEffect } from 'react';
import UnsplashCarousel from "../../Carousel/UnsplashCarousel.jsx"
import Carousel from "../../Carousel/Carousel.jsx"
import { slides, facts } from "./humpbackData.json"

function HumpbackBio() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await fetch(
            'https://api.unsplash.com/photos/random?query=humpback-whale,humpback&count=10&orientation=landscape&client_id=i4lZFrSlHGs23XNqRhHNIyg1A2Dzysi-v78ESKvWGPI'
          );
          if (!response.ok) {
            throw new Error('Failed to fetch images');
          }
          const data = await response.json();
          console.log('Fetched images:', data);
          
          const images = data.filter(photo => {
            return photo.alt_description && photo.alt_description.toLowerCase().includes("humpback whale") ||
                   photo.description && photo.description.toLowerCase().includes("humpback whale") || 
                   photo.alt_description && photo.alt_description.toLowerCase().includes("humpback") || 
                   photo.description && photo.description.toLowerCase().includes("humpback");
          });
          
          if (images.length === 0) {
            throw new Error('No images of humpback whales found in the response');
          }
          
          const urls = images.map(photo => photo.urls.regular);
          
          setImageUrls(urls);
    
          images.forEach(photo => {
            console.log('Name:', photo.alt_description || photo.description);
            console.log('Description:', photo.description || photo.alt_description);
          });
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
      
      fetchImages();
    }, []);

    return (
        <div className='bio-page-container'>
            <BioDescription 
                title="Humpback Whales"
                subtitle="Megaptera novaeangliae"
                wiki="https://en.wikipedia.org/wiki/Humpback_whale"
                desc="The Pacific Northwest is graced by the enchanting presence of humpback whales, charismatic giants that captivate with their majestic behaviors. Renowned for their acrobatic displays, humpback whales are known to breach, slap their tails, and sing intricate songs, creating an awe-inspiring spectacle for onlookers. Unlike orcas with distinct ecotypes or gray whales with specific feeding habits, humpbacks display a remarkable degree of flexibility in their behaviors and feeding strategies. Their diverse diet primarily consists of small fish like herring and krill, employing cooperative techniques such as bubble-netting to corral prey. Ambassadors of long-distance migration, these whales embark on epic journeys between colder feeding grounds and warmer breeding areas, with the Pacific Northwest serving as a vital corridor for these incredible migrations. Conservation efforts are crucial to safeguard humpback whales from threats such as entanglement, habitat degradation, and the impact of climate change, ensuring the continued grace and grandeur of these marine marvels in the rich tapestry of the region's ecosystems."
            />

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

export default HumpbackBio;
