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
        <header className="absolute top-[30px] left-[15%] flex items-center justify-between h-[80px] py-0 px-[2rem] bg-black bg-opacity-20 text-[#202020] w-[70%] gap-[141px] rounded-[100px] z-[2]  ">
            <Link to="/">
                <img src="../src/assets/orcaLogo.png" className="w-[60px] h-[60px] min-w-[60px] min-h-[60px] "></img>
            </Link>
                <nav className="flex items-center " ref={navRef}>
                    {user.email ? (
                    <>
                        <Link className="m-[30px] text-[#202020] no-underline relative text-center" to="/whales">Species</Link>
                        <div className="border h-8 border-black border-l-0"></div>
                        <Link className="m-[30px] text-[#202020] no-underline relative text-center" to="/posts">Posts</Link>
                        <div className="border h-8 border-black border-l-0"></div>
                        <Link className="m-[30px] text-[#202020] no-underline relative text-center" to="/aboutus">About Us</Link>
                        <div className="border h-8 border-black border-l-0"></div>
                        <Link className="m-[30px] text-[#202020] no-underline relative text-center" to="/account">Account</Link>
                        <div className="border h-8 border-black border-l-0"></div>
                        <button className="bg-inherit hover:text-[var(--secondaryColor)]
                        border-none m-[30px] p-0 drop-shadow-[0_0_8px_white]" onClick={logoutHandler}>Log out</button>

                        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                            <FaTimes>
    
                            </FaTimes>
                        </button>
                    </>
                    ) : (
                        <>
                            <Link className="m-[30px] text-[#202020] no-underline relative text-center" to="/whales">Species</Link>
                            <div className="border h-8 border-black border-l-0"></div>
                            <Link className="m-[30px] text-[#202020] no-underline relative text-center" to="/posts">Posts</Link>
                            <div className="border h-8 border-black border-l-0"></div>
                            <Link className="m-[30px] text-[#202020] no-underline relative text-center" to="/aboutus">About Us</Link>
                            <div className="border h-8 border-black border-l-0"></div>
                            <Link className="m-[30px] text-[#202020] no-underline relative text-center" to="/login">Sign in</Link>
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