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
                <img src="../src/assets/orcaLogo.png" className="logo-image"></img>
            </Link>
                <nav ref={navRef}>
                    {user.email ? (
                    <>
                        <Link to="/whales">Species</Link>
                        <div className="border h-8 border-black border-l-0"></div>
                        <Link to="/posts">Posts</Link>
                        <div className="border h-8 border-black border-l-0"></div>
                        <Link to="/aboutus">About Us</Link>
                        <div className="border h-8 border-black border-l-0"></div>
                        <Link to="/account">Account</Link>
                        <div className="border h-8 border-black border-l-0"></div>
                        <button className="bg-inherit hover:text-[var(--secondaryColor)]
                        border-none m-[30px] p-0" onClick={logoutHandler}>Log out</button>

                        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                            <FaTimes>
    
                            </FaTimes>
                        </button>
                    </>
                    ) : (
                        <>
                            <Link to="/whales">Species</Link>
                            <div className="border h-8 border-black border-l-0"></div>
                            <Link to="/posts">Posts</Link>
                            <div className="border h-8 border-black border-l-0"></div>
                            <Link to="/aboutus">About Us</Link>
                            <div className="border h-8 border-black border-l-0"></div>
                            <Link to="/login">Sign in</Link>
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