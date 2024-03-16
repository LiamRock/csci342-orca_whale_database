import '../WhaleBio.css';
import BioDescription from '../BioDescription/BioDescription.jsx'
import DidYouKnowCarousel from "../../DidYouKnow/DidYouKnowCarousel.jsx"

/* Dynamic img rendering*/
import { useState, useEffect } from 'react';
import UnsplashCarousel from "../../Carousel/UnsplashCarousel.jsx"
import Carousel from "../../Carousel/Carousel.jsx"
import { slides, facts } from "./grayData.json"

function GrayBio() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await fetch(
            'https://api.unsplash.com/photos/random?query=gray-whale,grey-whale&count=10&orientation=landscape&client_id=i4lZFrSlHGs23XNqRhHNIyg1A2Dzysi-v78ESKvWGPI'
          );
          if (!response.ok) {
            throw new Error('Failed to fetch images');
          }
          const data = await response.json();
          console.log('Fetched images:', data);
          
          const images = data.filter(photo => {
            return photo.alt_description && photo.alt_description.toLowerCase().includes("gray whale") ||
                   photo.description && photo.description.toLowerCase().includes("gray whale") || 
                   photo.alt_description && photo.alt_description.toLowerCase().includes("grey whale") || 
                   photo.description && photo.description.toLowerCase().includes("grey whale");
          });
          
          if (images.length === 0) {
            throw new Error('No images of gray whales found in the response');
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
                title="Gray Whales"
                subtitle="Eschrichtius robustus"
                wiki="https://en.wikipedia.org/wiki/Gray_whale"
                desc="The Pacific Northwest is graced by the presence of magnificent gray whales, captivating inhabitants of its expansive coastal waters. Known for their remarkable migration journeys, gray whales embark on one of the longest migrations of any mammal, traveling thousands of miles between their Arctic feeding grounds and the warm lagoons of Baja California where they give birth. Their feeding habits predominantly involve bottom-feeding on benthic organisms in shallow coastal areas, showcasing a distinct behavior that sets them apart. These gentle giants, without the complex ecotypes observed in orcas, captivate onlookers with their awe-inspiring movements and contribute to the rich marine tapestry of the Pacific Northwest. Conservation efforts remain essential to protect these majestic creatures from various threats and ensure the continued harmony of their habitats."
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

export default GrayBio;
