import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return(
    <footer className="footer">
        <div className='footer-content'>
            <img src='./src/assets/orcaLogo.png'/>
            <p>
            Discover awe-inspiring sightings, fascinating facts, and captivating stories about these 
            majestic marine creatures. Join our community of enthusiasts and conservationists as we 
            celebrate the beauty and wonder of whales together. 
            </p>
            <img src=''/>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/account">Account</Link>
        </div>
    </footer>
    )
}
export default Footer;