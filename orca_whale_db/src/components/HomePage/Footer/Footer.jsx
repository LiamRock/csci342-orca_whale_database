import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return(
    <footer className="footer">
        <div className='footer-content'>
            <img src='./src/assets/orcaLogo.png'/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
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