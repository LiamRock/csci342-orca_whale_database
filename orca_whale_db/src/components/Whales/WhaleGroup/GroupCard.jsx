/* eslint-disable react/prop-types */
//sfc//ffc//rcfe
import './GroupCard.css'

function GroupCard(props) {
    return (
      <>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            height: "300px", // Set a fixed height for the card container
            boxSizing: "border-box", // Ensure box-sizing is border-box
          }}
        >
          <h2>{props.title}</h2>
          <img
            src={props.imgURL}
            alt=""
            style={{
              objectFit: "contain", // Adjust based on your preference
              height: "100%", // Ensure the image takes up the full height of the container
              width: "100%", // Ensure the image takes up the full width of the container
            }}
          />

          <a href={props.Link}>{props.LinkText}</a>
        </div>
      </>
    );
  }
  
  export default GroupCard;
  