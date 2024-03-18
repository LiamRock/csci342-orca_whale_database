import Banner from "../Banner/Banner";
import Card from "../Card/Card";

function HomePage() {
    return (
      <div>
        <Banner title={"Dive into the diverse world of whales with us! Explore a mesmerizing array of magnificent species including Orca, Grey Whale, and more!"} backgroundImage={"./src/assets/banner.jpg"}/>
        <Card/>
      </div>
    )
  }
  
  export default HomePage;