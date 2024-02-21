import './Banner.css';
function Banner({title, backgroundImage}) {
    return (
        <div className="banner-container" style={{backgroundImage : `url(${backgroundImage})`}}>
            <div className='banner-content'>
                <div className='banner-text'>
                    <h1>{title}</h1>
                </div>
                <button className="banner-button">Learn More</button>
            </div>
        </div>
    )
}
  
  export default Banner