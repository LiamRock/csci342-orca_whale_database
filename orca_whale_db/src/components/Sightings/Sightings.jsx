import React, {useState, useEffect} from 'react';
import './Sightings.css';
import OrcaInfo from '../OrcaInfo/OrcaInfo';
import MapComponent from '../MapComponent/MapComponent';

const Sightings = () => {

    //potential methods for fetching stuff
    //const [data, setData] = useState(null); //-> post data?

    /*
    function fetchPost(){
        //fetch here
    }

    useEffect(() => {fetchPost()}, []);
    */

    return (
        <div className = "Sightings">
            
            <h1>Reported Sightings!</h1>
            
            <div className = 'Sightings-map'>
                <p className = 'Sightings-para'><MapComponent/></p>
            </div>

            {/* Here, we may want to consider filling contents with fields connected to a GET request from a database, depending on what was clicked -> dynamically add discussions since there's a view more button?*/}
            
            {/* BUG: IF ORCAINFO DOES NOT LOAD, THE PAGE WILL SNAP TO A SMALL WIDTH BECAUSE OF THE FLEX ELEMENT */}
            <OrcaInfo/>

            <div className = 'buttonContainer'>
                <button className = 'btn1'>
                    <p>VIEW DISCUSSION POSTS</p>
                </button>
            </div>

            <div className = 'Sightings-bottom-padding'>
                <p></p>
            </div>


        </div>
    );
};

export default Sightings;