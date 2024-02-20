import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
import "./NavBar.css"
import { Link } from 'react-router-dom'

function Navbar(){
const navRef = useRef();

const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav");
}
    return(
        <header>
            <Link to="/">
                <img src="./src/assets/orcaLogo.png" className="logo-image"></img>
            </Link>
                <nav ref={navRef}>
                    <Link to="/whales">Species</Link>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/account" className="last-nav-a">Account</Link>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        {/* <FaTimes>

                        </FaTimes> */}
                    </button>
                </nav>
                
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaBars>

                    </FaBars>
                </button>
        </header>
         
    );

}


export default Navbar;