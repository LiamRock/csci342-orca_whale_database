/* Whales.js */
import React from 'react';
import SpeciesProfile from '../WhaleGroup/SpeciesProfile';
import './Whales.css';

const whaleDataAPI = [
  {
    id: 1,
    img: 'https://media.fisheries.noaa.gov/dam-migration/1100x750-graywhale-swfsc-mmtd-chrisjohnson.jpg',
    name: 'Gray Whale',
  },
  {
    id: 2,
    img: 'https://www.fisheries.noaa.gov/s3/dam-migration/2160x1440_humpbackwhale_noaa.jpg',
    name: 'Humpback Whale',
  },
  {
    id: 3,
    img: 'https://cdn.theatlantic.com/thumbor/ydanvjFnPfr7mUXDeAJFBw_oMH4=/0x214:4114x2528/960x540/media/img/mt/2019/04/shutterstock_554899423_1/original.jpg',
    name: 'Orca',
  },
];

function Whales() {
  const cardStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'left',
    justifyContent: 'center', // Center content horizontally
  };

  return (
    <div className="page-container">
      <br />
      <h1 className="page-header">Whales of the Pacific Northwest!</h1>
      <br />
      <div style={cardStyle}>
        {whaleDataAPI.map((whale) => (
          <SpeciesProfile key={whale.id} img={whale.img} name={whale.name} />
        ))}
      </div>
    </div>
  );
}

export default Whales;
