import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Filter } from 'lucide-react';
import CentralParkSkyscrapers from '../../photos/Central Park Sunday Shots Date-1.jpg'
import CentralParkHeadShot from '../../photos/Central Park Sunday Shots Date-13.jpg'
import CentralParkSkyscrapers2 from '../../photos/Central Park Sunday Shots Date-14.jpg'
import CentralParkPole from '../../photos/Central Park Sunday Shots Date-15.jpg'
import CentralParkBridge from '../../photos/Central Park Sunday Shots Date-17.jpg'
import CentralParkPath from '../../photos/Central Park Sunday Shots Date-18.jpg'
import MidtownChurch from '../../photos/Central Park Sunday Shots Date-19.jpg'
import MidTownBuilding from '../../photos/Central Park Sunday Shots Date-24.jpg'
import FordFoundationShotOne from '../../photos/Ford Foundation Building Shots Winter Set 1-1.jpg'
import FordFoundationShotTwo from '../../photos/Ford Foundation Building Shots Winter Set 1-2.jpg'
import FordFoundationShotVertical from '../../photos/Ford Foundation Building Shots Winter Set 1-3.jpg'
import FordFoundationGrassPlants from '../../photos/Ford Foundation Building Shots Winter Set 1-4.jpg'
import FordFoundationWindows from '../../photos/Ford Foundation Building Shots Winter Set 1-5.jpg'
import FordFoundationLights from '../../photos/Ford Foundation Building Shots Winter Set 1-6.jpg'
import FordFoundationSkylight from '../../photos/Ford Foundation Building Shots Winter Set 1-7.jpg'
import FordFoundationCorner from '../../photos/Ford Foundation Building Shots Winter Set 1-8.jpg'
import FordFoundationOutsideCorner from '../../photos/Ford Foundation Building Shots Winter Set 1-9.jpg'
import FordFoundationVerticalOutside from '../../photos/Ford Foundation Building Shots Winter Set 1-10.jpg'
import MidTownNoir from '../../photos/Ford Foundation Building Shots Winter Set 1-11.jpg'
import MidTownNoirTwo from '../../photos/Ford Foundation Building Shots Winter Set 1-12.jpg'
import MidTownMural from '../../photos/Ford Foundation Building Shots Winter Set 1-14.jpg'
import IthacaNightSky from '../../photos/IMG_0135.jpg'
import OrangeBlueCorner from '../../photos/IMG_0299.jpg'
import BKCafe from '../../photos/IMG_0323.jpg'
import TheThinker from '../../photos/IMG_0526.jpg'
import ArrivalToNYC from '../../photos/IMG_0732.jpg'
import ManhantaanGloomySkyline from '../../photos/IMG_0737.jpg'
import MiaGPMclaern from '../../photos/IMG_1312.JPG'
import PowerCanada from '../../photos/IMG_1742.jpg'
import OntoThePark from '../../photos/IMG_1921.jpg'
import UVLens from '../../photos/IMG_1937.jpg'
import StarWarsHyperSpace from '../../photos/IMG_2308.jpg'
import TheMoon from '../../photos/IMG_2780.jpg'
import LICNight from '../../photos/IMG_2863.jpg'
import GothamPoint from '../../photos/IMG_3062.jpg'
import GothamPointTwo from '../../photos/IMG_3063.jpg'
import AerialNYC from '../../photos/IMG_5190.JPG'
import AerialNYCTwo from '../../photos/IMG_5207.JPG'
import LICCoast from '../../photos/IMG_5215.JPG'
import MiaGPHorse from '../../photos/IMG_5274.JPG'
import MiaStadium from '../../photos/IMG_5304.JPG'
import RedbullMiaGP from '../../photos/IMG_5367.JPG'
import MiamiGPTurnAerial from '../../photos/IMG_5397.JPG'
import HawaiiStarOne from '../../photos/IMG_6262.JPG'
import HawaiiStarTwo from '../../photos/IMG_6265.JPG'
import HawaiiStarThree from '../../photos/IMG_6266.JPG'
import HawaiiStarFour from '../../photos/IMG_6267.JPG'
import TheWhiteHouse from '../../photos/IMG_6917.JPG'
import DanielPablo from '../../photos/IMG_6926.JPG'
import DCHorse from '../../photos/IMG_6934.JPG'
import DCVerticalMuseum from '../../photos/IMG_6947.JPG'
import DCShoulder from '../../photos/IMG_6949.JPG'
import DCThinker from '../../photos/IMG_6952.JPG'
import DCDog from '../../photos/IMG_6959.JPG'
import MiaGP2024Patio from '../../photos/IMG_7070.JPG'
import MiaGPWhiteHorse from '../../photos/IMG_7072.JPG'
import MiaGPAlpine from '../../photos/IMG_7087.JPG'
import DarthRedbull from '../../photos/IMG_7114.JPG'
import FerrariRed from '../../photos/IMG_7128.JPG'
import FerrariRedTurn from '../../photos/IMG_7200.JPG'
import FerrariRedTurnTwo from '../../photos/IMG_7250.JPG'
import MiaGPAerialTurnEpic from '../../photos/IMG_7259.JPG'
import MiaGPLongShot from '../../photos/IMG_7266.JPG'
import MiaGPLongShotalt from '../../photos/IMG_7270.JPG'
import MiaGPLongShotTwo from '../../photos/IMG_7272.JPG'
import F1SampleCar from '../../photos/IMG_7276.JPG'
import MiaTarmac from '../../photos/IMG_7286.JPG'
import MiaEngine from '../../photos/IMG_7291.JPG'
import MiaEngineTwo from '../../photos/IMG_7292.JPG'
import MiaEngineThree from '../../photos/IMG_7293.JPG'
import MiaEngineFour from '../../photos/IMG_7294.JPG'
import MiaEngineFive from '../../photos/IMG_7299.JPG'
import MidtownNYC from '../../photos/IMG_7311.JPG'
import ManhantannSkylineMorning from '../../photos/IMG_7315.JPG'
import ManhantannSkyelineMorningTwo from '../../photos/IMG_7317.JPG'
import FerrariCarShot from '../../photos/IMG_7985.JPG'
import FerrariCarShotTwo from '../../photos/IMG_7999.JPG'
import TronCarShot from '../../photos/IMG_80141.JPG'
import TronCarShotTwo from '../../photos/IMG_8014.JPG'
import TronCarShotThree from '../../photos/IMG_8018.JPG'
import TronCarShotFour from '../../photos/IMG_8021.JPG'
import MacroToyCarone from '../../photos/IMG_8040.JPG'
import MacroToyCarTwo from '../../photos/IMG_8044.JPG'
import MacroToyCarThree from '../../photos/IMG_8063.JPG'
import RedMacroToyCarOne from '../../photos/IMG_8101.JPG'
import RedMacroToyCarTwo from '../../photos/IMG_8116.JPG'
import RedMacroToyCarThree from '../../photos/IMG_81181.JPG'
import RedMacroToyCarFour from '../../photos/IMG_8119.JPG'






interface Photo {
  id: number;
  year: number;
  category: string;
  title: string;
  description: string;
  url: string;
}

const photos: Photo[] = [
  {
    id: 1,
    year: 2022,
    category: 'Buildings',
    title: 'Orange Blue Corner',
    description: 'Captured in Brooklyn Greenpoint NYC',
    url: OrangeBlueCorner,
  },
  {
    id: 2,
    year: 2022,
    category: 'Buildings',
    title: 'Cozy French Cafe',
    description: 'Cozy French Cafe in BK, NYC',
    url: BKCafe,
  },
  {
    id: 3,
    year: 2022,
    category: 'People',
    title: 'The Thinker',
    description: 'Modern day thinker',
    url: TheThinker,
  },
  {
    id: 4,
    year: 2022,
    category: 'Buildings',
    title: 'Arrival to NYC',
    description: 'Arriving via car to NYC',
    url: ArrivalToNYC,
  },
  {
    id: 5,
    year: 2022,
    category: 'Buildings',
    title: 'Manhattan Skyline',
    description: 'The Manhattan skyline overcast',
    url: ManhantaanGloomySkyline,
  },
  {
    id: 6,
    year: 2022,
    category: 'People',
    title: 'Power Pose',
    description: 'Friend in a power pose',
    url: PowerCanada,
  },
  {
    id: 7,
    year: 2022,
    category: 'People',
    title: 'Onto the park',
    description: 'Park in Toronto, Sunny day',
    url: OntoThePark,
  },
  {
    id: 8,
    year: 2022,
    category: 'People',
    title: 'UVLens',
    description: 'Playing around with the UV leans',
    url: UVLens,
  },
  {
    id: 9,
    year: 2022,
    category: 'Macro',
    title: 'Jumping to hyperspace',
    description: 'Long exposure test shot of a star wars ship',
    url: StarWarsHyperSpace,
  },
  {
    id: 10,
    year: 2023,
    category: 'Space',
    title: 'The Moon',
    description: 'Night time shot of the moon',
    url: TheMoon,
  },
  {
    id: 11,
    year: 2023,
    category: 'Buildings',
    title: 'Buildings in LIC',
    description: 'View from the bridge crossing into LIC',
    url: LICNight,
  },
  {
    id: 12,
    year: 2023,
    category: 'Buildings',
    title: 'Empire State',
    description: 'Empire state building from across the river',
    url: GothamPoint,
  },
  {
    id: 13,
    year: 2022,
    category: 'Buildings',
    title: 'Gotham Point',
    description: 'Building in LIC',
    url: GothamPointTwo,
  },
  {
    id: 14,
    year: 2022,
    category: 'Buildings',
    title: 'Vertical Central Park Skyscrapers',
    description: 'Testing vertical shots of the skyscrapers in central park',
    url: CentralParkSkyscrapers,
  },
  {
    id: 15,
    year: 2023,
    category: 'People',
    title: 'Me',
    description: 'Portrait of me',
    url: CentralParkHeadShot,
  },
  {
    id: 16,
    year: 2023,
    category: 'Buildings',
    title: 'Central Park Buildings',
    description: 'Views of the buildings in central park',
    url: CentralParkSkyscrapers2,
  },
  {
    id: 17,
    year: 2023,
    category: 'Buildings',
    title: 'Pole in Central Park',
    description: 'Pole in central park',
    url: CentralParkPole,
  },
  {
    id: 18,
    year: 2023,
    category: 'Buildings',
    title: 'Bridge in Central Park',
    description: 'Bridge in central park',
    url: CentralParkBridge,
  },
  {
    id: 19,
    year: 2023,
    category: 'Buildings',
    title: 'Central Park Path',
    description: 'Cold Jan day in central park',
    url: CentralParkPath,
  },
  {
    id: 20,
    year: 2023,
    category: 'Buildings',
    title: 'Dark Church',
    description: 'Church in midtown',
    url: MidtownChurch,
  },
  {
    id: 21,
    year: 2023,
    category: 'Buildings',
    title: 'Midtown Corners',
    description: 'Corner of a building in midtown',
    url: MidTownBuilding,
  },
  {
    id: 22,
    year: 2023,
    category: 'Buildings',
    title: 'Interior of Ford Foundation',
    description: 'Interior of Ford Foundation',
    url: FordFoundationShotOne,
  },
  {
    id: 23,
    year: 2023,
    category: 'Buildings',
    title: 'Interior of Ford Foundation',
    description: 'Interior of Ford Foundation',
    url: FordFoundationShotTwo,
  },
  {
    id: 24,
    year: 2023,
    category: 'Buildings',
    title: 'Vertical Dark Shot',
    description: 'Vertical shot in the ford foundation',
    url: FordFoundationShotVertical,
  },
  {
    id: 25,
    year: 2023,
    category: 'Nature',
    title: 'Grass in concrete jungle',
    description: 'Interior garden of ford foundation',
    url: FordFoundationGrassPlants,
  },
  {
    id: 26,
    year: 2023,
    category: 'Nature',
    title: 'Window Interior of Ford Foundation',
    description: 'Window Interior of Ford Foundation',
    url: FordFoundationWindows,
  },
  {
    id: 27,
    year: 2023,
    category: 'Buildings',
    title: 'Interior of Ford Foundation',
    description: 'Interior of Ford Foundation',
    url: FordFoundationLights,
  },
  {
    id: 28,
    year: 2023,
    category: 'Buildings',
    title: 'Skylight of Ford Foundation',
    description: 'Skylight of Ford Foundation',
    url: FordFoundationSkylight,
  },
  {
    id: 29,
    year: 2023,
    category: 'Buildings',
    title: 'Interior Corner of Ford Foundation',
    description: 'Interior Corner of Ford Foundation',
    url: FordFoundationCorner,
  },
  {
    id: 30,
    year: 2023,
    category: 'Buildings',
    title: 'Outside Corner of Ford Foundation',
    description: 'Outside Corner of Ford Foundation',
    url: FordFoundationOutsideCorner,
  },
  {
    id: 31,
    year: 2022,
    category: 'Buildings',
    title: 'Vertical Outside of Ford Foundation',
    description: 'Vertical Outside of Ford Foundation',
    url: FordFoundationVerticalOutside,
  },
  {
    id: 32,
    year: 2023,
    category: 'Buildings',
    title: 'Midtown Noir',
    description: 'Noir shot of midtown',
    url: MidTownNoir,
  },
  {
    id: 33,
    year: 2023,
    category: 'Buildings',
    title: 'Midtown Noir Two',
    description: 'Noir shot of midtown',
    url: MidTownNoirTwo,
  },
  {
    id: 34,
    year: 2023,
    category: 'Buildings',
    title: 'Conceptual Mural',
    description: 'Midtown Mural',
    url: MidTownMural,
  },
  {
    id: 35,
    year: 2024,
    category: 'Space',
    title: 'Ithaca Starry Night',
    description: 'Starry night in Ithaca',
    url: IthacaNightSky,
  },
  {
    id: 36,
    year: 2023,
    category: 'Flight',
    title: 'Aerial NYC',
    description: 'Manhattan skyline from above',
    url: AerialNYC,
  },
  {
    id: 37,
    year: 2023,
    category: 'Flight',
    title: 'Aerial NYC Two',
    description: 'Manhattan skyline from above',
    url: AerialNYCTwo,
  },
  {
    id: 38,
    year: 2023,
    category: 'Flight',
    title: 'LIC Coast',
    description: 'A picturesque countryside view',
    url: LICCoast,
  },
  {
    id: 39,
    year: 2023,
    category: 'Formula 1',
    title: 'Horse Statue',
    description: 'Statue at the 2023 Miami GP',
    url: MiaGPHorse,
  },
  {
    id: 40,
    year: 2023,
    category: 'Formula 1',
    title: 'Hardrock Stadium',
    description: 'Hardrock stadium at the 2023 Miami GP',
    url: MiaStadium,
  },
  {
    id: 41,
    year: 2023,
    category: 'Formula 1',
    title: 'Redbull F1',
    description: 'Fast shutter shot of a redbull car at the 2023 Miami GP',
    url: RedbullMiaGP,
  },
  {
    id: 42,
    year: 2023,
    category: 'Formula 1',
    title: 'Shot of a MIA GP turn',
    description: 'Redbull car at the 2023 Miami GP',
    url: MiamiGPTurnAerial,
  },
  {
    id: 43,
    year: 2023,
    category: 'Formula 1',
    title: 'McLaren F1',
    description: 'Fast shutter shot of a McLaren car at the 2023 Miami GP',
    url: MiaGPMclaern,
  },
  {
    id: 44,
    year: 2023,
    category: 'Space',
    title: 'Hawaii Stars',
    description: 'Stars in Hawaii',
    url: HawaiiStarOne,
  },
  {
    id: 45,
    year: 2023,
    category: 'Space',
    title: 'Hawaii Stars Two',
    description: 'Stars in Hawaii',
    url: HawaiiStarTwo,
  },
  {
    id: 46,
    year: 2023,
    category: 'Space',
    title: 'Hawaii Stars Three',
    description: 'Stars in Hawaii',
    url: HawaiiStarThree,
  },
  {
    id: 47,
    year: 2023,
    category: 'Space',
    title: 'Hawaii Stars Four',
    description: 'Stars in Hawaii',
    url: HawaiiStarFour,
  },
  {
    id: 48,
    year: 2024,
    category: 'Buildings',
    title: 'Dark White House',
    description: 'Dark shot of the white house',
    url: TheWhiteHouse,
  },
  {
    id: 49,
    year: 2024,
    category: 'People',
    title: 'Daniel or Pablo',
    description: 'Daniel in front of the White House',
    url: DanielPablo,
  },
  {
    id: 50,
    year: 2024,
    category: 'Buildings',
    title: 'Horse Statue',
    description: 'Horse statue in DC',
    url: DCHorse,
  },
  {
    id: 51,
    year: 2024,
    category: 'Buildings',
    title: 'Interior of a Museum',
    description: 'DC museum',
    url: DCVerticalMuseum,
  },
  {
    id: 52,
    year: 2024,
    category: 'People',
    title: 'Lookback',
    description: 'DC Shoulder',
    url: DCShoulder,
  },
  {
    id: 53,
    year: 2024,
    category: 'People',
    title: 'DC Thinker',
    description: 'The thinker in DC',
    url: DCThinker,
  },
  {
    id: 54,
    year: 2023,
    category: 'People',
    title: 'DC Wolf Dog',
    description: 'Dog in DC',
    url: DCDog,
  },
  {
    id: 55,
    year: 2024,
    category: 'Formula 1',
    title: 'Miami F1 GP 2024',
    description: 'Patio at the 2024 Miami GP',
    url: MiaGP2024Patio,
  },
  {
    id: 56,
    year: 2024,
    category: 'Formula 1',
    title: 'White Horse',
    description: 'White horse at the 2023 Miami GP',
    url: MiaGPWhiteHorse,
  },
  {
    id: 57,
    year: 2024,
    category: 'Formula 1',
    title: 'Alpine',
    description: 'Alpine car at the 2024 Miami GP',
    url: MiaGPAlpine,
  },
  {
    id: 58,
    year: 2024,
    category: 'Formula 1',
    title: 'Darth Redbull',
    description: 'Dark shot of a redbull car at the 2024 Miami GP',
    url: DarthRedbull,
  },
  {
    id: 59,
    year: 2024,
    category: 'Formula 1',
    title: 'Ferrari Red',
    description: 'Ferrari red car at the 2024 Miami GP',
    url: FerrariRed,
  },
  {
    id: 60,
    year: 2024,
    category: 'Formula 1',
    title: 'Ferrari Red Turn',
    description: 'Ferrari red car at the 2024 Miami GP',
    url: FerrariRedTurn,
  },
  {
    id: 61,
    year: 2024,
    category: 'Formula 1',
    title: 'Ferrari Red Turn',
    description: 'Ferrari red car at the 2024 Miami GP',
    url: FerrariRedTurnTwo,
  },
  {
    id: 62,
    year: 2024,
    category: 'Formula 1',
    title: 'Aston Martin Turn',
    description: 'Aston Martin car at the 2024 Miami GP',
    url: MiaGPAerialTurnEpic,
  },
  {
    id: 63,
    year: 2024,
    category: 'Formula 1',
    title: 'Mclaren Long Shot',
    description: 'McLaren car at the 2024 Miami GP',
    url: MiaGPLongShot,
  },
  {
    id: 64,
    year: 2024,
    category: 'Formula 1',
    title: 'Haas Long Shot',
    description: 'Haas car at the 2024 Miami GP',
    url: MiaGPLongShotalt,
  },
  {
    id: 65,
    year: 2024,
    category: 'Formula 1',
    title: 'Ferrari Long Shot',
    description: 'Ferrari car at the 2024 Miami GP',
    url: MiaGPLongShotTwo,
  },
  {
    id: 66,
    year: 2024,
    category: 'Formula 1',
    title: 'F1 Sample Car',
    description: 'Prototype F1 car',
    url: F1SampleCar,
  },
  {
    id: 67,
    year: 2024,
    category: 'Flight',
    title: 'MIA Tarmac',
    description: 'Tarmac at the Miami Airport',
    url: MiaTarmac,
  },
  {
    id: 68,
    year: 2024,
    category: 'Flight',
    title: 'Engine over MIA',
    description: 'Miami from above',
    url: MiaEngine,
  },
  {
    id: 69,
    year: 2024,
    category: 'Flight',
    title: 'Engine over MIA II',
    description: 'Miami from above',
    url: MiaEngineTwo,
  },
  {
    id: 70,
    year: 2024,
    category: 'Flight',
    title: 'Engine over MIA III',
    description: 'Miami from above',
    url: MiaEngineThree,
  },
  {
    id: 71,
    year: 2024,
    category: 'Flight',
    title: 'Engine over MIA IV',
    description: 'Miami from above',
    url: MiaEngineFour,
  },
  {
    id: 72,
    year: 2024,
    category: 'Flight',
    title: 'Engine over MIA V',
    description: 'Miami from above',
    url: MiaEngineFive,
  },
  {
    id: 73,
    year: 2024,
    category: 'Buildings',
    title: 'NYC Midtown',
    description: 'Sunset in Midtown',
    url: MidtownNYC,
  },
  {
    id: 74,
    year: 2024,
    category: 'Buildings',
    title: 'Manhattan Skyline from a bus',
    description: 'The Manhattan skyline from a bus',
    url: ManhantannSkylineMorning,
  },
  {
    id: 75,
    year: 2024,
    category: 'Buildings',
    title: 'Manhattan Skyline from a bus II',
    description: 'The Manhattan skyline from a bus',
    url: ManhantannSkyelineMorningTwo,
  },
  {
    id: 76,
    year: 2024,
    category: 'Macro',
    title: 'Ferrari Toy Car',
    description: 'Macro shot of a toy car',
    url: FerrariCarShot,
  },
  {
    id: 77,
    year: 2024,
    category: 'Macro',
    title: 'Ferrari Toy Car',
    description: 'Macro shot of a toy car',
    url: FerrariCarShotTwo,
  },
  {
    id: 78,
    year: 2024,
    category: 'Macro',
    title: 'Tron F1 Long Exposure',
    description: 'Long exposure of a toy car',
    url: TronCarShot,
  },
  {
    id: 79,
    year: 2024,
    category: 'Macro',
    title: 'Tron B&W',
    description: 'Long exposure of a toy car',
    url: TronCarShotTwo,
  },
  {
    id: 80,
    year: 2024,
    category: 'Macro',
    title: 'Ferrari Blue',
    description: 'Long exposure of a toy car',
    url: TronCarShotThree,
  },
  {
    id: 81,
    year: 2024,
    category: 'Macro',
    title: 'Ferrari Long',
    description: 'Long exposure of a toy car',
    url: TronCarShotFour,
  },
  {
    id: 82,
    year: 2024,
    category: 'Macro',
    title: 'Toy Car IRL',
    description: 'Toy car IRL',
    url: MacroToyCarone,
  },
  {
    id: 83,
    year: 2024,
    category: 'Macro',
    title: 'Toy Car Series I',
    description: 'Macro test shots with CO2',
    url: MacroToyCarTwo,
  },
  {
    id: 84,
    year: 2024,
    category: 'Macro',
    title: 'Toy Car Series II',
    description: 'Macro test shots with CO2',
    url: MacroToyCarThree,
  },
  {
    id: 85,
    year: 2024,
    category: 'Macro',
    title: 'Toy Car Series III',
    description: 'Macro test shots with CO2',
    url: RedMacroToyCarOne,
  },
  {
    id: 86,
    year: 2024,
    category: 'Macro',
    title: 'Toy Car Series IV',
    description: 'Macro test shots with CO2',
    url: RedMacroToyCarTwo,
  },
  {
    id: 87,
    year: 2024,
    category: 'Macro',
    title: 'Toy Car Series V',
    description: 'Macro test shots with CO2',
    url: RedMacroToyCarThree,
  },
  {
    id: 88,
    year: 2024,
    category: 'Macro',
    title: 'Toy Car Series VI',
    description: 'Macro test shots with CO2',
    url: RedMacroToyCarFour,
  }
];

const categories = ['All', 'Buildings', 'People', 'Space', 'Macro', 'Nature', 'Flight', 'Formula 1'];
const years = [2024, 2023, 2022];

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredPhotos = photos.filter(photo => {
    const categoryMatch = selectedCategory === 'All' || photo.category === selectedCategory;
    const yearMatch = !selectedYear || photo.year === selectedYear;
    return categoryMatch && yearMatch;
  });

  return (
    <div className="min-h-screen pt-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-space font-bold mb-6 text-cosmic-blue">
            Photography Portfolio
          </h1>
          <p className="text-xl text-gray-300">
            Capturing moments across the universe
          </p>
        </motion.div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full px-4 py-2 bg-space-light/40 rounded-lg flex items-center justify-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <Filter size={20} />
            <span>Filter Gallery</span>
          </button>
        </div>

        {/* Mobile Filters Dropdown */}
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mb-6 bg-space-light/20 backdrop-blur-lg rounded-lg p-4 border border-cosmic-blue/20"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-cosmic-blue text-white'
                          : 'bg-space-light text-gray-300 hover:bg-cosmic-blue/20'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Years</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedYear(null)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      !selectedYear
                        ? 'bg-cosmic-blue text-white'
                        : 'bg-space-light text-gray-300 hover:bg-cosmic-blue/20'
                    }`}
                  >
                    All Years
                  </button>
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedYear === year
                          ? 'bg-cosmic-blue text-white'
                          : 'bg-space-light text-gray-300 hover:bg-cosmic-blue/20'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Desktop Filters */}
        <div className="hidden md:flex mb-8 flex-wrap gap-4 justify-center">
          <div className="space-x-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-cosmic-blue text-white'
                    : 'bg-space-light text-gray-300 hover:bg-cosmic-blue/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="space-x-2">
            <button
              onClick={() => setSelectedYear(null)}
              className={`px-4 py-2 rounded-full transition-colors ${
                !selectedYear
                  ? 'bg-cosmic-blue text-white'
                  : 'bg-space-light text-gray-300 hover:bg-cosmic-blue/20'
              }`}
            >
              All Years
            </button>
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedYear === year
                    ? 'bg-cosmic-blue text-white'
                    : 'bg-space-light text-gray-300 hover:bg-cosmic-blue/20'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          layout
        >
          {filteredPhotos.map(photo => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="gallery-item group cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <h3 className="text-xl font-space font-bold text-white">{photo.title}</h3>
                  <p className="text-gray-200">{photo.category} - {photo.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 p-4 md:p-8 flex items-center justify-center"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-cosmic-blue transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <div className="relative aspect-video md:aspect-auto md:h-[80vh]">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-space font-bold text-white">{selectedPhoto.title}</h3>
                <p className="text-gray-300 mt-2">{selectedPhoto.description}</p>
                <p className="text-cosmic-blue mt-1">{selectedPhoto.category} - {selectedPhoto.year}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;