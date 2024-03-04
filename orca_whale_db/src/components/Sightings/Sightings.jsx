import React, { useState, useEffect } from "react";
// import OrcaInfo from "../OrcaInfo/OrcaInfo";
import MapComponent from "../MapComponent/MapComponent";

const Sightings = () => {
  return (
    <div className="Sightings p-[20px] content-center items-center justify-center text-center">
      <h1 className="font-bold mb-5">Reported Sightings!</h1>
      <MapComponent />
      <br />
    </div>
  );
};

export default Sightings;
