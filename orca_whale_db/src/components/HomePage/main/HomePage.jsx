import CreateDiscussion from "../../CreateDiscussion/CreateDiscussion"
import Sightings from "../../Sightings/Sightings"
import Banner from "../Banner/Banner"
import Card from "../Card/Card"

function HomePage() {
    return (
      <>
        <Banner/>
        <Sightings />
        <CreateDiscussion/>
        <Card/>
      </>
    )
  }
  
  export default HomePage