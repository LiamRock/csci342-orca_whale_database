import "../../WhaleBio.css";
import BioDescription from "../../BioDescription/BioDescription";

function ResidentBio() {
  return (
    <div className="bio-page-container">
      <BioDescription
        title="Southern Resident Orcas"
        subtitle="Our fish-eating locals!"
        wiki="https://en.wikipedia.org/wiki/Southern_resident_orcas "
        desc="The Southern Resident Orcas are a distinctive and culturally rich population of killer whales inhabiting the waters of the northeastern Pacific Ocean, particularly the Salish Sea and surrounding coastal areas. Comprising three closely-knit pods—J, K, and L pods—these orcas are renowned for their intricate social structures, unique vocalizations, and diverse hunting techniques. Identified by their striking black and white coloration, these marine mammals are characterized by a strong matrilineal society, led by experienced matriarchs. Facing environmental challenges such as diminishing salmon populations, pollution, and vessel noise, the Southern Resident Orcas have garnered attention for their conservation status, prompting concerted efforts to protect their habitat and ensure the long-term survival of this iconic and culturally significant population."
      />
    </div>
  );
}

export default ResidentBio;
