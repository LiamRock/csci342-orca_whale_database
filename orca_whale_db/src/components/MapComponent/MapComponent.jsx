import { Fragment } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "80rem",
  height: "40rem",
};

const center = {
  lat: 48.749997,
  lng: -122.4833314,
};

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

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
            {/* Markers here */}
          </GoogleMap>
        ) : null}
      </div>
    </Fragment>
  );
}

export default MapComponent;
