import { Link } from 'react-router-dom'
import './Card.css';
function Card() {
  
    return (
        <div className="card">
            <img src="./src/assets/coast-background.jpg" />
            <div className='card-content'>
                <div className='text'>
                    <h1 >Lorem ipsum dolor sit amet!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
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