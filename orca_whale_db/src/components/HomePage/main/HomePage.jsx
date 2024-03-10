import CreateDiscussion from "../../CreateDiscussion/CreateDiscussion";
import DiscussionPost from "../../DiscussionPost/DiscussionPost";
import Sightings from "../../Sightings/Sightings";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

function HomePage() {
    return (
      <>
        <Banner title={"Dive into the diverse world of whales with us! Explore a mesmerizing array of magnificent species including Orca, Grey Whale, and more!"} backgroundImage={"./src/assets/banner.jpg"}/>
        <Card/>
      </>
    )
  }
  
  export default HomePage;