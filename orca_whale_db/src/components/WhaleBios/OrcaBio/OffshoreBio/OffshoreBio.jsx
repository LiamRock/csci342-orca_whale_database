import "../../WhaleBio.css";
import BioDescription from "../../BioDescription/BioDescription";

function OffshoreBio() {
  return (
    <div className="bio-page-container">
      <BioDescription
        title="Offshore Orcas"
        subtitle="A great white shark's worst nightmare..."
        wiki="https://en.wikipedia.org/wiki/Southern_resident_orcas "
        desc="The North Pacific Offshore killer whales, a captivating and elusive population, 
        were first sighted off Haida Gwaii in 1979, marking the beginning of the discovery of this unique group. 
        Spanning the waters between Southern California and the Aleutian Islands, 
        their offshore habitat and wariness of boats have shrouded them in mystery, 
        making them one of the least understood killer whale populations. 
        Listed as a Species of Special Concern under the Species at Risk Act (SARA) in 2003, 
        their vulnerability to becoming threatened or endangered has prompted conservation efforts. 
        Research has unveiled their genetic affinity with Resident killer whales and distinctive traits, 
        including rounded dorsal fin tips and a penchant for vocalizing like fish-eating killer whales. 
        With a diet primarily consisting of fish and sharks, the Offshore killer whales present a fascinating aspect of marine ecology. 
        Despite challenges in studying them due to their offshore habits, ongoing research and increased sightings offer hope for a better understanding of and conservation strategies for this enigmatic population."
      />
    </div>
  );
}

export default OffshoreBio;
