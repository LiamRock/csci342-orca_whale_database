/* eslint-disable react/prop-types */
import '../button.css'
import './SpeciesProfile.css'

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

      <br />

      <button className='button'>Learn More</button>
      {/* Add other content as needed */}
    </div>
  );
}
  
  export default SpeciesProfile;
  