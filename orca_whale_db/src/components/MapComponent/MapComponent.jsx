import { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import orcaIcon from "../../assets/orcaIcon.png";
import grayIcon from "../../assets/grayIcon.png";
import humbackIcon from "../../assets/humpbackIcon.png";
import blueIcon from "../../assets/blueIcon.jpg";
import finIcon from "../../assets/finIcon.png";
import minkeIcon from "../../assets/minkeIcon.png";
import uncertainIcon from "../../assets/uncertainIcon.png";

const speciesIcons = {
  orca: orcaIcon,
  gray: grayIcon,
  humpback: humbackIcon,
  blue: blueIcon,
  fin: finIcon,
  minke: minkeIcon,
  uncertain: uncertainIcon,
};

const containerStyle = {
  width: "80rem",
  height: "40rem",
};

const center = {
  lat: 48.749997,
  lng: -122.4833314,
};

function MapComponent() {
  const [markers, setMarkers] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const { isLoaded, map } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  useEffect(() => {
    // Fetch sightings data from backend when component mounts
    axios.get('http://localhost:3000/sightings') // Assuming your backend route for sightings is '/sightings'
      .then(response => {
        console.log(response.data.result);
        setMarkers(response.data.result); // Assuming sightings data is stored in response.data.result
      })
      .catch(error => {
        console.error('Error fetching sightings:', error);
      });
  }, []);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    console.log(marker.description);
  };

  const handleCloseInfoWindow = () => {
    setSelectedMarker(null);
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center max-w-[95vw]">
        {isLoaded ? (
          <GoogleMap
            center={center}
            zoom={10}
            mapContainerStyle={containerStyle}
            mapId={"3878aad1a59aef57"}
          >
            {markers &&
              markers.map(
                ({ _id, lat, long, species, date, time, description }) => {
                  // Check if species exists in speciesIcons
                  const iconUrl = Object.prototype.hasOwnProperty.call(
                    speciesIcons,
                    species
                  )
                    ? speciesIcons[species]
                    : uncertainIcon;

                  return (
                    <Marker
                      key={_id}
                      position={{ lat: parseFloat(lat), lng: parseFloat(long) }}
                      icon={{
                        url: iconUrl,
                        scaledSize: new window.google.maps.Size(30, 30),
                      }}
                      onClick={() =>
                        handleMarkerClick({
                          _id,
                          lat,
                          long,
                          species,
                          date,
                          time,
                          description,
                        })
                      }
                      title={`Spotted ${species} on ${date} at ${time}`}
                    />
                  );
                }
              )}

            {selectedMarker && (
              <InfoWindow
                map={map}
                position={{
                  lat: parseFloat(selectedMarker.lat),
                  lng: parseFloat(selectedMarker.long),
                }}
                onCloseClick={handleCloseInfoWindow}
              >
                <div className="info-window px-4 py-3 rounded-lg bg-white shadow-md flex flex-col text-start">
                  <h1 className="text-xl font-bold text-gray-800">{`Spotted on ${selectedMarker.date} at ${selectedMarker.time}`}</h1>
                  <h2 className="text-base font-medium text-gray-600">
                    Species: {selectedMarker.species}
                  </h2>
                  <p className="text-sm text-gray-500">{`Description: ${selectedMarker.description}`}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        ) : null}
      </div>
    </Fragment>
  );
}

export default MapComponent;
