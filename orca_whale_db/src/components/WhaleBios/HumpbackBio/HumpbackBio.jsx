import '../WhaleBio.css';
import BioDescription from '../BioDescription/BioDescription.jsx'

function HumpbackBio() {
    return (
        <div className='bio-page-container'>
            <BioDescription 
                title="Humpback Whales"
                subtitle="Megaptera novaeangliae"
                wiki="https://en.wikipedia.org/wiki/Humpback_whale"
                desc="The Pacific Northwest is graced by the enchanting presence of humpback whales, charismatic giants that captivate with their majestic behaviors. Renowned for their acrobatic displays, humpback whales are known to breach, slap their tails, and sing intricate songs, creating an awe-inspiring spectacle for onlookers. Unlike orcas with distinct ecotypes or gray whales with specific feeding habits, humpbacks display a remarkable degree of flexibility in their behaviors and feeding strategies. Their diverse diet primarily consists of small fish like herring and krill, employing cooperative techniques such as bubble-netting to corral prey. Ambassadors of long-distance migration, these whales embark on epic journeys between colder feeding grounds and warmer breeding areas, with the Pacific Northwest serving as a vital corridor for these incredible migrations. Conservation efforts are crucial to safeguard humpback whales from threats such as entanglement, habitat degradation, and the impact of climate change, ensuring the continued grace and grandeur of these marine marvels in the rich tapestry of the region's ecosystems."
            />
        </div>
    );
}

export default HumpbackBio;
