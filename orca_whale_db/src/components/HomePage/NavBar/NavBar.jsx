import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
import "./Navbar.css"

function Navbar(){
const navRef = useRef();

const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav");
}
    return(
        <header>
            <a href="/">
                <img src="./src/assets/orcaLogo.png" className="logo-image"></img>
            </a>
                <nav ref={navRef}>
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/" className="last-nav-a">Account</a>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes>

                        </FaTimes>
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