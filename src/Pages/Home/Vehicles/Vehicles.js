import React from 'react';

import bus from '../../../images/vehicles/bus.png';
import train from '../../../images/vehicles/train.png';
import car from '../../../images/vehicles/car.png';
import plane from '../../../images/vehicles/plane.png';
import bike from '../../../images/vehicles/bike.png';
import Vehicle from '../Vehicle/Vehicle';

const vehicles = [
    {id: 1, name: 'Bus', img: bus, fare: 1500, description: "Go with cheap cost"},
    {id: 3, name: 'Car', img: car, fare: 7000, description: "You can go privately with car"},
    {id: 4, name: 'Airplane', img: plane, fare: 6000, description: "Go fast and smooth with plane"},
    {id: 5, name: 'Bike', img: bike, fare: 3000, description: "If you enjoy adventure, let's go"},
    {id: 2, name: 'Train', img: train, fare: 800, description: "Cost is cheapest, but unavailable somewhere"}
];

const Vehicles = () => {
    return (
        <div id="vehicles" className='container mb-5 pb-5 experts'>
            <h2 className='text-primary text-center mt-5'>Offered Vehicle Types</h2>
            <div className="row">
                {vehicles.map(vehicle => <Vehicle key={vehicle.id} vehicle= {vehicle}></Vehicle>)}
            </div>
        </div>
    );
};

export default Vehicles;