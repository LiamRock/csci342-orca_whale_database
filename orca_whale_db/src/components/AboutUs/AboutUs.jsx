import { Link } from 'react-router-dom';
import Banner from '../HomePage/Banner/Banner';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <Banner title={"About Us"} backgroundImage={"./src/assets/day-tours-banner.jpg"}/>
            <div className='content'>
                <h1>Who are we? What is our mission?</h1>
                <p className='text-black text-center'>
                We are students at Western Washington Univerity and we noticed that within the whale-watchong community, there lacks a central place where people with simlar interests 
                can interact with one another and discuss about sighting while also learning about the biology of the whales they are sight seeing. Our team has decided to create a such an application.
                Our project , the Orca/Whale Database App, is an interactive and social database for those interested in following information about the Southern Resident orcas 
                (pods J, K, and L) of the Pacific Northwest. The app will contain information and pictures of the various orca individuals of each pod to make 
                whale-watching in the PNW easier and more engaging for users. 
                </p>
            </div>
        </div>
    )
}

export default AboutUs