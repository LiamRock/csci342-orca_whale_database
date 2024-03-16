import '../WhaleBio.css';
import BioDescription from '../BioDescription/BioDescription.jsx'
import DidYouKnowCarousel from "../../DidYouKnow/DidYouKnowCarousel.jsx"

/* Dynamic img rendering*/
import { useState, useEffect } from 'react';
import UnsplashCarousel from "../../Carousel/UnsplashCarousel.jsx"
import Carousel from "../../Carousel/Carousel.jsx"
import { slides, facts } from "./minkeData.json"

function MinkeBio() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await fetch(
            'https://api.unsplash.com/photos/random?query=minke-whale,minke-whales&count=10&orientation=landscape&client_id=i4lZFrSlHGs23XNqRhHNIyg1A2Dzysi-v78ESKvWGPI'
          );
          if (!response.ok) {
            throw new Error('Failed to fetch images');
          }
          const data = await response.json();
          console.log('Fetched images:', data);
          
          const images = data.filter(photo => {
            return photo.alt_description && photo.alt_description.toLowerCase().includes("minke whale") ||
                   photo.description && photo.description.toLowerCase().includes("minke whale") || 
                   photo.alt_description && photo.alt_description.toLowerCase().includes("minke") || 
                   photo.description && photo.description.toLowerCase().includes("minke");
          });
          
          if (images.length === 0) {
            throw new Error('No images of minke whales found in the response');
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
                title="Common Minke Whales"
                subtitle="Balaenoptera acutorostrata"
                wiki="https://en.wikipedia.org/wiki/Common_minke_whale"
                desc="Within the Pacific Northwest's marine expanse, the common Minke whales add a touch of enchantment to the coastal waters. Characterized by their modest size and streamlined bodies, these whales navigate with agility, contributing to the region's diverse marine tapestry. Displaying a relatively solitary lifestyle, common Minke whales engage in gentle surface behaviors such as breaching and porpoising. Versatile feeders, they consume small fish, krill, and other marine organisms. Unlike orcas with intricate ecotypes or humpbacks known for acrobatics, common Minke whales are subtle in their presence, often eluding attention. Their vocalizations, though less complex than some counterparts, echo through the ocean depths. Conservation endeavors are crucial to safeguard common Minke whales from potential threats, ensuring the continued enchantment of these understated yet vital contributors to the diverse marine life of the Pacific Northwest."
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

export default MinkeBio;
