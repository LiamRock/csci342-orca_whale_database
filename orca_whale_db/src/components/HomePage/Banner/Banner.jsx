import './Banner.css';
function Banner() {
  
    return (
        <div>
            <img src="./src/assets/orca.jpeg" className="banner"/>
            <div className='banner-content'>
                <div className='banner-text'>
                    {/*<h1>Welcome to Our Website</h1>*/}
                </div>
                <button className="banner-button">Learn More</button>
            </div>
        </div>
    )
  }
  
  export default Banner