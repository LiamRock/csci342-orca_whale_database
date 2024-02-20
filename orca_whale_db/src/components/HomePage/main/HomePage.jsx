import CreateDiscussion from "../../CreateDiscussion/CreateDiscussion"
import Sightings from "../../Sightings/Sightings"
import Banner from "../Banner/Banner"

function HomePage() {
    return (
      <>
        <Banner/>
        <Sightings />
        <CreateDiscussion/>
      </>
    )
  }
  
  export default HomePage