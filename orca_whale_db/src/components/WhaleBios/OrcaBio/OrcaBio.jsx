import "../WhaleBio.css";
import "./OrcaBio.css"
import SpeciesProfile from "../../WhaleGroup/SpeciesProfile";
import "../../WhaleGroup/SpeciesProfile.css"
import DidYouKnow from "../../DidYouKnow/DidYouKnow"
import Carousel from "../../Carousel/Carousel.jsx"
import { slides } from "./orcaSlidesData.json"

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
      <div className="description-container">
        <div className="header-container">
          <h1 className="bio-title">Orca Whales</h1>
        </div>
        
        <hr/>

        <p className="bio-white-text">
          The Pacific Northwest is home to diverse orcas, each with unique
          eco-types. Resident Orcas, known for familial bonds, mainly eat
          salmon and inhabit specific regions. Transient Orcas, preferring
          marine mammals, lead nomadic lives in smaller, less stable groups.
          Offshore Orcas, less studied, inhabit deeper waters with a broader
          diet. These orca variations highlight adaptability to different
          environments. Conservation is crucial due to challenges like
          declining salmon, pollution, and vessel noise, impacting their
          health in the rich PNW ecosystems.
        </p>
      </div>

      <div className="orca-box-1">
        <div className="info-style">
            <img className="img-style" src="/src/assets/orcaTypes.png" />
            <div className="desc-text">
                <h1 style={{color:'white'}}>Orca</h1>
                <h2 style={{color:'white'}}>Killer Whale</h2>
                <p style={{color:'white'}}>Orcinus orca</p>
                <p style={{color:'white'}}>For more info, you can check the <a href="https://en.wikipedia.org/wiki/Orca" target="_blank" rel="noopener noreferrer">Wikipedia page</a>.</p>
            </div>
        </div>

        <div>
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

          <div>
              <DidYouKnow fact="Orcas are the largets species of Dolphin in the world!" img="../src/assets/orcaSizeCompare.jpg"/>
          </div>
        </div>
      </div>

      <div className="carousel-container">
        <Carousel data={slides}/>
      </div>
    </div>
    
  );
}

export default OrcaBio;
