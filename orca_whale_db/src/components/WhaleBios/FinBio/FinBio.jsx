import '../WhaleBio.css';
import BioDescription from '../BioDescription/BioDescription.jsx'
import DidYouKnowCarousel from "../../DidYouKnow/DidYouKnowCarousel.jsx"

function FinBio() {
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
        </div>
    );
}

export default FinBio;
