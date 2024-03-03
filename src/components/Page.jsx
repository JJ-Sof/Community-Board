import React from "react";
import Attraction from "./Attraction";

// Example list of attractions
const attractions = [
    { id: 1, name: 'Centennial Park', color: 'green', image: '/path/to/centennial-park-image.jpg'},
    { id: 2, name: 'Georgia Aquarium', color: 'blue', image: '/path/to/centennial-park-image.jpg' },
    { id: 3, name: 'World of Coca-Cola', color: 'red', image: '/path/to/centennial-park-image.jpg' },
    { id: 3, name: 'CNN', color: 'black', image: '/path/to/centennial-park-image.jpg' },
    { id: 3, name: 'MLK Museum', color: 'yellow', image: '/path/to/centennial-park-image.jpg' },
    { id: 3, name: 'Atlanta Botanical Garden', color: 'white', image: '/path/to/centennial-park-image.jpg' },
    { id: 3, name: 'Atlanta Zoo', color: 'orange', image: '/path/to/centennial-park-image.jpg' },
    { id: 3, name: 'Atlanta History Center', color: 'grey', image: '/path/to/centennial-park-image.jpg' },
    { id: 3, name: 'Fernbank Museum', color: 'brown', image: '/path/to/centennial-park-image.jpg' }
  
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
