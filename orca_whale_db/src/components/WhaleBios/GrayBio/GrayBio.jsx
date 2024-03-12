import '../WhaleBio.css';
import BioDescription from '../BioDescription/BioDescription.jsx'
import DidYouKnowCarousel from "../../DidYouKnow/DidYouKnowCarousel.jsx"
import { facts } from "./grayData.json"

function GrayBio() {
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
        </div>
    );
}

export default GrayBio;
