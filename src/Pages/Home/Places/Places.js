import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Places.css';

const Services = () => {

    const [places, setPlaces] = useState([]);

    useEffect( ()=>{
        fetch('tour-places.json')
        .then(res => res.json())
        .then(data => setPlaces(data));
    }, [])

    return (
        <div id="places" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Offered Tour Spots</h1>
            <div className="places-container">
            {
                places.map(service => <Place
                    key={service._id}
                    service={service}
                >
                </Place>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;