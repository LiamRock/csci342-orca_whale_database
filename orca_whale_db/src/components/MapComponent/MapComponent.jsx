import { Fragment, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const speciesIcons = {
  orca: "../assets/orcaIcon.png",
  gray: "../assets/grayIcon.png",
  humpback: "../assets/humpbackIcon.png",
  blue: "../assets/blueIcon.jpg",
  fin: "../assets/finIcon.png",
  minke: "../assets/minkeIcon.png",
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
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  useEffect(() => {
    const getSightings = async () => {
      await fetch(`http://localhost:3000/sightings`)
        .then(async (response) => await response.json())
        .then((response) => {
          setMarkers(response);
        });
    };
    getSightings();
  }, []);

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
              markers.map(({ _id, lat, long, species, date, time }) => (
                <Marker
                  key={_id}
                  position={{ lat: parseFloat(lat), lng: parseFloat(long) }}
                  icon={{
                    url: speciesIcons[species],
                    scaledSize: new window.google.maps.Size(30, 30),
                  }}
                  title={`Spotted on ${date} at ${time}`}
                />
              ))}
          </GoogleMap>
        ) : null}
      </div>
    </Fragment>
  );
}

export default MapComponent;
