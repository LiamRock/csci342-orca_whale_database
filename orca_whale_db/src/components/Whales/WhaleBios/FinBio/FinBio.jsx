import '../WhaleBio.css';
import BioDescription from '../BioDescription/BioDescription.jsx'
import DidYouKnowCarousel from "../../DidYouKnow/DidYouKnowCarousel.jsx"

/* Dynamic img rendering*/
import { useState, useEffect } from 'react';
import UnsplashCarousel from "../../Carousel/UnsplashCarousel.jsx"
import Carousel from "../../Carousel/Carousel.jsx"
import { slides, facts } from "./finData.json"

function FinBio() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await fetch(
            'https://api.unsplash.com/photos/random?query=fin-whale,fin-whales&count=10&orientation=landscape&client_id=i4lZFrSlHGs23XNqRhHNIyg1A2Dzysi-v78ESKvWGPI'
          );
          if (!response.ok) {
            throw new Error('Failed to fetch images');
          }
          const data = await response.json();
          console.log('Fetched images:', data);
          
          const images = data.filter(photo => {
            return photo.alt_description && photo.alt_description.toLowerCase().includes("fin whale") ||
                   photo.description && photo.description.toLowerCase().includes("fin whale") || 
                   photo.alt_description && photo.alt_description.toLowerCase().includes("fin whales") || 
                   photo.description && photo.description.toLowerCase().includes("fin whales");
          });
          
          if (images.length === 0) {
            throw new Error('No images of fin whales found in the response');
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
                title="Fin Whales"
                subtitle="Balaenoptera physalus"
                wiki="https://en.wikipedia.org/wiki/Fin_whale"
                desc="In the expanse of the Pacific Northwest, the graceful presence of fin whales adds to the region's marine splendor. As the second-largest animals on Earth, fin whales navigate coastal waters with elegance, distinguished by their slender bodies and a distinctive chevron pattern on their backs. Renowned for their swift swimming capabilities, fin whales employ a filter-feeding technique, engulfing vast quantities of small fish and krill. Unlike orcas with their ecotypes or humpbacks with acrobatics, fin whales exhibit a more reserved nature, often seen alone or in small groups. Their low-frequency vocalizations, a form of communication, resonate across the ocean depths. Conservation efforts are essential to protect fin whales from threats like ship strikes and habitat disturbances, ensuring the continued presence of these magnificent beings, enriching the Pacific Northwest's diverse marine tapestry."
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

export default FinBio;
