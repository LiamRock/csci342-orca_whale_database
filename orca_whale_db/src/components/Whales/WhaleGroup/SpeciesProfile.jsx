/* eslint-disable react/prop-types */
import './SpeciesProfile.css'
import { Link, Outlet } from 'react-router-dom';

function SpeciesProfile(props) {
  return (
    <div className='card-container'>
      <h2 className='card-text'>{props.name}</h2>
      <img
        src={props.img}
        alt=""
        className='card-image'
      />
      <p className='card-description'>{props.description}</p>

      <div className='button-container'>
        <Link to={props.bioLink}>
          <button className='universal-link-button'>Learn More</button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
}
  
  export default SpeciesProfile;
  