import { Fragment, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
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
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  useEffect(() => {
    const getSightings = async () => {
      try {
        const response = await fetch(`http://localhost:3000/sightings`);
        if (!response.ok) {
          throw new Error(`Error fetching sightings: ${response.statusText}`);
        }
        const responseJson = await response.json();
        setMarkers(responseJson);
      } catch (error) {
        console.error("Error fetching sightings:", error);
        // Handle errors here, like displaying an error message to the user
      }
    };
    getSightings();
  }, []);

  return (
    <Fragment>
      <div className="flex justify-center items-center max-w-[95vw]">
        {/* Test rendering of uncertainIcon */}
        <img
          src={speciesIcons["uncertain"]}
          alt="Uncertain sighting icon"
          style={{ width: 30, height: 30 }}
        />
        {isLoaded ? (
          <GoogleMap
            center={center}
            zoom={10}
            mapContainerStyle={containerStyle}
            mapId={"3878aad1a59aef57"}
          >
            {markers &&
              markers.map(({ _id, lat, long, species, date, time }) => {
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
                    title={`Spotted on ${date} at ${time}`}
                  />
                );
              })}
          </GoogleMap>
        ) : null}
      </div>
    </Fragment>
  );
}

export default MapComponent;
