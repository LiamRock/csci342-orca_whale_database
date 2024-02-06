/* eslint-disable react/prop-types */
import '../button.css'

function SpeciesProfile(props) {
    return (
      <div
        style={{
          backgroundColor: "#a8e0e0",
          padding: "20px",
          margin: "10px",
          width: "300px", // Set a fixed width for the card
          boxSizing: "border-box", // Ensure box-sizing is border-box
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content horizontally
        }}
      >
        <h2>{props.name}</h2>
        <img
          src={props.img}
          alt=""
          style={{
            objectFit: "cover", // Adjust based on your preference
            height: "200px", // Set a fixed height for the image
            width: "100%", // Ensure the image takes up the full width of the container
          }}
        />
        <button className='button'>Learn More</button>
        {/* Add other content as needed */}
      </div>
    );
  }
  
  export default SpeciesProfile;
  