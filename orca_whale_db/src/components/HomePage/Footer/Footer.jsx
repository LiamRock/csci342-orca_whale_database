import './Footer.css';

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
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Account</a>
        </div>
        
    </footer>
    )
}
export default Footer;