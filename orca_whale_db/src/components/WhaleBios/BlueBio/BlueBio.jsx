import '../WhaleBio.css';
import BioDescription from '../BioDescription/BioDescription.jsx'
import DidYouKnowCarousel from "../../DidYouKnow/DidYouKnowCarousel.jsx"
import { facts } from "./blueData.json"

function BlueBio() {
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
        </div>
    );
}

export default BlueBio;
