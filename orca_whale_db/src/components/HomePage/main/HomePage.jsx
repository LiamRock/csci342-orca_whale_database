import CreateDiscussion from "../../CreateDiscussion/CreateDiscussion"
import Sightings from "../../Sightings/Sightings"
import Banner from "../Banner/Banner"
import Card from "../Card/Card"

function HomePage() {
    return (
      <>
        <Banner title={"Welcome to our Website"} backgroundImage={"./src/assets/banner.jpg"}/>
        <Card/>
        <Sightings/>
        <CreateDiscussion/>
      </>
    )
  }
  
  export default HomePage