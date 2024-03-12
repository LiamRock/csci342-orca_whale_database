import { useState, useEffect } from "react";
// import OrcaInfo from "../OrcaInfo/OrcaInfo";
import MapComponent from "../MapComponent/MapComponent";

const Sightings = () => {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    const fetchSightings = async () => {
      const res = await fetch(
        import.meta.env.VITE_SERVER_URL + "/sightings"
      ).catch((err) => {
        console.log("Error: " + err);
      });
      const data = await res.json();
      setSightings(data);
    };
    fetchSightings();
  }, []);

  return (
    <div className="Sightings p-[20px] content-center items-center justify-center text-center">
      <h1 className="font-bold mb-5">Reported Sightings!</h1>
      <MapComponent sightings={sightings} />
      <br />
    </div>
  );
};

export default Sightings;
