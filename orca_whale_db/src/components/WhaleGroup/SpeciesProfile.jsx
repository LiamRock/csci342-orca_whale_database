/* eslint-disable react/prop-types */
import '../button.css'
import './SpeciesProfile.css'
import { Link, Outlet } from 'react-router-dom';

function SpeciesProfile(props) {
  return (
    <div className='card-container'>
      <h2 className='card-text'>{props.name}</h2>
      <img
        src={props.img}
        alt=""
        style={{
          objectFit: "cover", // Adjust based on your preference
          height: "200px", // Set a fixed height for the image
          width: "100%", // Ensure the image takes up the full width of the container
        }}
      />
      <p className='card-description'>{props.description}</p>
      <Link className="rounded-button" to={props.bioLink}>Learn More</Link>
      {/* Add other content as needed */}
      <Outlet />
    </div>
  );
}
  
  export default SpeciesProfile;
  