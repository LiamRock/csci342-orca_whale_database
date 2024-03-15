import "../../WhaleBio.css";
import BioDescription from "../../BioDescription/BioDescription";

function TransientBio() {
  return (
    <div className="bio-page-container">
      <BioDescription
        title="Transient Orcas"
        subtitle="Bigg's Killer Whales"
        wiki="https://georgiastrait.org/work/species-at-risk/orca-protection/killer-whales-pacific-northwest/west-coast-biggs-transient-killer-whales/"
        desc="Transient Orcas, also known as Bigg's Orcas, represent a distinct ecotype of killer whales with behavioral and ecological differences compared to their Southern Resident counterparts. Inhabiting the same northeastern Pacific Ocean region, Transient Orcas are highly nomadic and are characterized by their wide-ranging foraging habits, preying primarily on marine mammals such as seals, sea lions, and even smaller whales. Unlike the fish-feeding Southern Residents, Transients showcase a diverse vocal repertoire and lack the pod-specific vocal traditions observed in resident populations. These orcas are organized into smaller, fluid social groups often centered around maternal bonds. Recognizable by their less defined black and white markings, Transient Orcas are a testament to the ecological diversity within the killer whale species, adapting their behavior and hunting strategies to the abundance and distribution of marine mammals in their dynamic coastal environments."
      />
    </div>
  );
}

export default TransientBio;
