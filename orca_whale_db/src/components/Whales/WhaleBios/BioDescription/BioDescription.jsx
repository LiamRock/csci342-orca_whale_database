/* eslint-disable react/prop-types */
import './BioDescription.css'


function BioDescription(props) {
    return (
    <div className="bio-description-container">
        <div className="bio-header-container">
          <h1 className="bio-title">{props.title}</h1>
          <p className="subtitle">{props.subtitle}</p>
          <a className="bio-link" href={props.wiki} target="_blank" rel="noreferrer">Wikipedia Page</a>
        </div>
        
        <hr/>

        <p className="bio-white-text">
            {props.desc}
        </p>
      </div>
    );
}

export default BioDescription;