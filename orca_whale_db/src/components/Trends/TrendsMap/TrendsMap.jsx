/* eslint-disable react/prop-types */
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";


const containerStyle = {
    width: "100%",
    height: "30rem",
};

const center = {
    lat: 48.2,
    lng: -122.7,
};

const TrendsMap = ({ sightings }) => {
    const [activeSighting, setActiveSighting] = useState(null);

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    });

    if (!isLoaded) {
        return <p className="text-black font-bold">Loading map...</p>;
    }

    return (
        <GoogleMap center={center} zoom={8} mapContainerStyle={containerStyle}>
            {sightings.map((s) => (
                <Marker
                    key={s.entry_id}
                    position={{ lat: Number(s.latitude), lng: Number(s.longitude) }}
                    title={`${s.no_sighted} orca(s) sighted`}
                    onMouseOver={() => setActiveSighting(s)}
                    onMouseOut={() => setActiveSighting(null)}
                />
            ))}

            {activeSighting && (
                <InfoWindow
                    position={{
                        lat: Number(activeSighting.latitude),
                        lng: Number(activeSighting.longitude),
                    }}
                    options={{ pixelOffset: new window.google.maps.Size(0, -35) }}
                    onCloseClick={() => setActiveSighting(null)}
                >
                    <div>
                        <p className="font-semibold text-black">{activeSighting.no_sighted} orca(s) sighted</p>
                        <p className="text-sm text-black">{new Date(activeSighting.created).toLocaleString()}</p>
                        {activeSighting.data_source_comments && (
                            <p className="text-sm italic text-black">{activeSighting.data_source_comments}</p>
                        )}
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
};

export default TrendsMap;