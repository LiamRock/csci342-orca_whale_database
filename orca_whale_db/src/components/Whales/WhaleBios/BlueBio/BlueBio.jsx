import '../WhaleBio.css';
import BioDescription from '../BioDescription/BioDescription.jsx'
import DidYouKnowCarousel from "../../DidYouKnow/DidYouKnowCarousel.jsx"

/* Dynamic img rendering*/
import { useState, useEffect } from 'react';
import UnsplashCarousel from "../../Carousel/UnsplashCarousel.jsx"
import Carousel from "../../Carousel/Carousel.jsx"
import { slides, facts } from "./blueData.json"

function BlueBio() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await fetch(
            'https://api.unsplash.com/photos/random?query=blue-whale,blue-whales&count=10&orientation=landscape&client_id=i4lZFrSlHGs23XNqRhHNIyg1A2Dzysi-v78ESKvWGPI'
          );
          if (!response.ok) {
            throw new Error('Failed to fetch images');
          }
          const data = await response.json();
          console.log('Fetched images:', data);
          
          const images = data.filter(photo => {
            return photo.alt_description && photo.alt_description.toLowerCase().includes("blue whale") ||
                   photo.description && photo.description.toLowerCase().includes("blue whale");
          });
          
          if (images.length === 0) {
            throw new Error('No images of blue whales found in the response');
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
                title="Blue Whales"
                subtitle="Balaenoptera musculus"
                wiki="https://en.wikipedia.org/wiki/Blue_whale"
                desc="The Pacific Northwest is graced by the awe-inspiring presence of blue whales, the largest creatures on Earth. Known for their immense size and distinct mottled blue-gray coloration, these gentle giants navigate the region's coastal waters with majestic grace. Blue whales exhibit a unique baleen feeding strategy, filtering vast quantities of krill through their massive mouths, underscoring their crucial role in maintaining marine ecosystem balance. Unlike orcas with ecotypes or humpbacks with acrobatic displays, blue whales are characterized by a more solitary and tranquil demeanor. Their hauntingly beautiful songs, a form of long-distance communication, resonate through the ocean depths. Conservation efforts are paramount to protect these magnificent creatures from threats such as ship strikes, ocean noise, and climate-related changes, ensuring the enduring presence of these extraordinary beings in the Pacific Northwest's marine wonderland."
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

export default BlueBio;
