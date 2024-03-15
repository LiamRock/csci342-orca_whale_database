import { Link } from 'react-router-dom'
import './Card.css';
function Card() {
  
    return (
        <div className="card">
            <img src="./src/assets/coast-background.jpg" />
            <div className='card-content'>
                <div className='text'>
                    <h1 >See what people have posted!</h1>
                    <p>
                    Explore the wonders of the ocean with us! Share your extraordinary whale sightings 
                    and dive into a world of marine marvels. Click below to share your experiences and 
                    discover breathtaking encounters with our community!
                    </p>
                    <button className="button">
                        <Link to="/posts" className="text-black">See Posts</Link>
                    </button>
                </div>
                <img src="./src/assets/card.jpg"/>
            </div>
        </div>
    )
  }
  
  export default Card