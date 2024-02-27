import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
import "./NavBar.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {logout} from '../../../store/slices/authSlices'

function Navbar(){
    const navRef = useRef();
    const{user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
    const logoutHandler = () => {
        dispatch(logout());
        localStorage.removeItem('user');
    }
    return(
        <header>
            <Link to="/">
                <img src="./src/assets/orcaLogo.png" className="logo-image"></img>
            </Link>
                <nav ref={navRef}>
                    {user.email ? (
                    <>
                        <Link to="/whales">Species</Link>
                        <Link to="/aboutus">About Us</Link>
                        <Link to="/account">Account</Link>
                        <button className="last-nav-a bg-inherit" onClick={logoutHandler}>Log out</button >

                        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                            <FaTimes>
    
                            </FaTimes>
                        </button>
                    </>
                    ) : (
                        <>
                            <Link to="/whales">Species</Link>
                            <Link to="/aboutus">About Us</Link>
                            <Link to="/login" className="last-nav-a">Sign in</Link>
                            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                                <FaTimes>

                                </FaTimes>
                            </button>
                        </>
                    )}
                    
                </nav>
                
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaBars>

                    </FaBars>
                </button>
        </header>
         
    );

}


export default Navbar;