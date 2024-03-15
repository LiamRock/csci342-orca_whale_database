/* Whales.js */
import SpeciesProfile from './WhaleGroup/SpeciesProfile';

const whaleDataAPI = [
  {
    id: 1,
    img: 'https://cdn.theatlantic.com/thumbor/ydanvjFnPfr7mUXDeAJFBw_oMH4=/0x214:4114x2528/960x540/media/img/mt/2019/04/shutterstock_554899423_1/original.jpg',
    name: 'Orca',
    description: 'Highly intelligent and social marine mammals known for their distinctive black and white coloration, exceptional hunting skills, and complex social structures within tightly-knit family pods.',
    bioLink: "/whales/orcas",
  },
  {
    id: 2,
    img: 'https://media.fisheries.noaa.gov/dam-migration/1100x750-graywhale-swfsc-mmtd-chrisjohnson.jpg',
    name: 'Gray Whale',
    description: 'A baleen whale recognized for its mottled gray coloration and distinctive heart-shaped blow, primarily inhabiting the coastal waters of the North Pacific.',
    bioLink: "/whales/grays",
  },
  {
    id: 3,
    img: 'https://www.fisheries.noaa.gov/s3/dam-migration/2160x1440_humpbackwhale_noaa.jpg',
    name: 'Humpback Whale',
    description: 'A large baleen whale characterized by its distinctive humped back, long pectoral fins, and complex vocalizations, often engaging in acrobatic behaviors such as breaching and tail-slapping.',
    bioLink: "/whales/humpbacks",
  },
  {
    id: 4,
    img: 'src/assets/blueWhale.jpg',
    name: 'Blue Whale',
    description: 'The Blue Whale, the largest animal on Earth, is a highly intelligent and social marine mammal known for its distinctive blue-gray coloration and remarkable size, exhibiting a peaceful nature as it traverses the vast oceans.',
    bioLink: "/whales/blues",
  },
  {
    id: 5,
    img: 'src/assets/finWhale.jpg',
    name: 'Fin Whale',
    description: 'The Fin Whale, the second-largest whale species, is characterized by its sleek, streamlined body and distinctive asymmetrical coloring on its lower jaw, known for its impressive size and gracefulness in the open ocean.',
    bioLink: "/whales/fins",
  },
  {
    id: 6,
    img: 'src/assets/minkeWhale.jpg',
    name: 'Common Minke Whale',
    description: "The Minke Whale, a smaller baleen whale species, is recognized for its modest size, streamlined appearance, and often elusive nature, contributing to the diversity of marine life with its subtle yet fascinating presence in the world's oceans.",
    bioLink: "/whales/minkes",
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
    <div className="pt-[9rem] flex flex-col text-center bg-[url('../src/assets/speciesBackground.jpg')]
    bg-cover bg-no-repeat bg-center top-0 items-center w-[100vw] min-h-[100vh]">
      <div className='shadow-[0_8px_16px_rgba(0, 0, 0, 1)] rounded-[10px] bg-[#0F1035] p-[12px]'>
        <h1 className="text-white">Whales of the Pacific Northwest!</h1>
      </div>

      <div className='mt-[30px]'>
        <div style={cardStyle}>
          {whaleDataAPI.map((whale) => (
            <SpeciesProfile key={whale.id} img={whale.img} name={whale.name} description={whale.description} bioLink={whale.bioLink} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whales;
