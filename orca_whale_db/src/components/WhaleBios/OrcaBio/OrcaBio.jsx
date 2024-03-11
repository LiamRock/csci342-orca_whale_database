import "../WhaleBio.css";
import "./OrcaBio.css"
import SpeciesProfile from "../../WhaleGroup/SpeciesProfile";
import "../../WhaleGroup/SpeciesProfile.css"
// import DidYouKnow from "../../DidYouKnow/DidYouKnow"
import DidYouKnowCarousel from "../../DidYouKnow/DidYouKnowCarousel.jsx"
// import Carousel from "../../Carousel/Carousel.jsx"
import { facts } from "./orcaSlidesData.json"
import BioDescription from '../BioDescription/BioDescription.jsx'

const ecotypeDataAPI = [
  {
    id: 1,
    img: '/src/assets/SRKW.jpg',
    name: "Resident Orcas",
    description:
      "Resident orcas are known for their strong family bonds and social structures. They primarily feed on fish, with a particular emphasis on salmon.",
    bioLink: "/whales/orcas",
  },
  {
    id: 2,
    img: '/src/assets/transient.jpg',
    name: "Transient Orcas",
    description:
      "Transient orcas have a more nomadic lifestyle compared to residents. They prefer marine mammals as their primary prey, such as seals and sea lions.",
    bioLink: "/whales/orcas",
  },
  {
    id: 3,
    img: '/src/assets/offshore.jpg',
    name: "Offshore Orcas",
    description:
      " Offshore orcas are less studied than residents and transients. They are known to inhabit deeper waters and have a more varied diet, including fish and squid.",
    bioLink: "/whales/orcas",
  },
];

function OrcaBio() {
  return (
    <div className="bio-page-container">
      <BioDescription 
        title="Orca Whales"
        subtitle="Orcinus orca"
        wiki="https://en.wikipedia.org/wiki/Orca"
        desc="The Pacific Northwest is home to diverse orcas, each with unique
        eco-types. Resident Orcas, known for familial bonds, mainly eat
        salmon and inhabit specific regions. Transient Orcas, preferring
        marine mammals, lead nomadic lives in smaller, less stable groups.
        Offshore Orcas, less studied, inhabit deeper waters with a broader
        diet. These orca variations highlight adaptability to different
        environments. Conservation is crucial due to challenges like
        declining salmon, pollution, and vessel noise, impacting their
        health in the rich PNW ecosystems."
      />

      <div className="card-style">
        {ecotypeDataAPI.map((whale) => (
          <SpeciesProfile
            key={whale.id}
            img={whale.img}
            name={whale.name}
            description={whale.description}
            bioLink={whale.bioLink}
          />
        ))}
      </div>

      <div className="carousel-container">
        <DidYouKnowCarousel data={facts}/>
      </div>
    </div>
  );
}

export default OrcaBio;
