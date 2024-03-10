import CreateDiscussion from "../CreateDiscussion/CreateDiscussion";
import DiscussionPost from "../DiscussionPost/DiscussionPost";
import Banner from "../HomePage/Banner/Banner";
import Sightings from "../Sightings/Sightings";

function PostPage() {
    return (
      <>
        <Banner title={"See what people have been posting!"} backgroundImage={"./src/assets/grey-whale-banner.jpg"} />
        <div className="mt-8"></div>
        <Sightings/>
        <DiscussionPost/>
        <CreateDiscussion/>
        <div className="mb-8"></div>
      </>
    )
  }
  
  export default PostPage;