import React from "react";
import Attraction from "./Attraction";

import ParkImage from '../assets/Park.jpg';
import AquariumImage from '../assets/Aquarium.jpg';
import ColaImage from '../assets/CocaCola.jpg';
import CNNImage from '../assets/CNN.jpg';
import MuseumImage from '../assets/Museum.jpg';
import GardenImage from '../assets/Garden.jpg';
import ZooImage from '../assets/Zoo.jpg';
import HistoryCenterImage from '../assets/HistoryCenter.jpg';
import FBankImage from '../assets/FBank.jpg';


const attractions = [
    { id: 1, name: 'Centennial Park', color: 'green', image: ParkImage },
    { id: 2, name: 'Georgia Aquarium', color: 'blue', image: AquariumImage },
    { id: 3, name: 'World of Coca-Cola', color: 'red', image: ColaImage },
    { id: 4, name: 'CNN Studio', color: 'violet', image: CNNImage },
    { id: 5, name: 'Atlanta Civil Rights Museum', color: 'yellow', image: MuseumImage },
    { id: 6, name: 'Atlanta Botanical Garden', color: 'white', image: GardenImage },
    { id: 7, name: 'Atlanta Zoo', color: 'orange', image: ZooImage },
    { id: 8, name: 'Atlanta History Center', color: 'grey', image: HistoryCenterImage },
    { id: 9, name: 'Fernbank Museum', color: 'brown', image: FBankImage }
  
];

const Page = () => {
    return (
        <div className="Page">
            <div className="attractions-container">
                {attractions.map(attraction => (
                    <Attraction key={attraction.id} attraction={attraction.name} color={attraction.color} />
                ))}
            </div>
        </div>
    );
}

export default Page;
