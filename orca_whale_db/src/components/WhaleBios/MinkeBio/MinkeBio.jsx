import '../WhaleBio.css';
import BioDescription from '../BioDescription/BioDescription.jsx'

function MinkeBio() {
    return (
        <div className='bio-page-container'>
            <BioDescription 
                title="Common Minke Whales"
                subtitle="Balaenoptera acutorostrata"
                wiki="https://en.wikipedia.org/wiki/Common_minke_whale"
                desc="Within the Pacific Northwest's marine expanse, the common Minke whales add a touch of enchantment to the coastal waters. Characterized by their modest size and streamlined bodies, these whales navigate with agility, contributing to the region's diverse marine tapestry. Displaying a relatively solitary lifestyle, common Minke whales engage in gentle surface behaviors such as breaching and porpoising. Versatile feeders, they consume small fish, krill, and other marine organisms. Unlike orcas with intricate ecotypes or humpbacks known for acrobatics, common Minke whales are subtle in their presence, often eluding attention. Their vocalizations, though less complex than some counterparts, echo through the ocean depths. Conservation endeavors are crucial to safeguard common Minke whales from potential threats, ensuring the continued enchantment of these understated yet vital contributors to the diverse marine life of the Pacific Northwest."
            />   
        </div>
    );
}

export default MinkeBio;
