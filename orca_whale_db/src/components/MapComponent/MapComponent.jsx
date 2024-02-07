import React, { Component } from 'react';
//import './MapComponent.css';

/* NOTE:
    This google maps embed is temporary; I don't know if we're even using google maps, or if it functions for what we need.  
*/

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    // Load the Google Maps JavaScript API script
    const script = document.createElement('script');
    const apiKey = "insert API key here";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.defer = true;
    script.async = true;
    script.onload = this.initMap;
    document.head.appendChild(script);
  }

  initMap = () => {
    // Initialize the map
    const map = new window.google.maps.Map(this.mapRef.current, {
      center: { lat: 48.7697688, lng: -122.485886 },
      zoom: 9
    });

    // This code adds a marker on the map
    const marker = new window.google.maps.Marker({
      position: { lat: 48.769768, lng: -122.485886 },
      map: map,
      title: 'Bellingham'
    });
  };

  render() {
    return <div ref={this.mapRef} style={{
        margin: '0 auto',
        width: '60rem',
        height: '30rem' 
    }} />;
  }
}

export default MapComponent;
