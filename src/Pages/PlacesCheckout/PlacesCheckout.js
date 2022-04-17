import React from 'react';
import { Link, useParams } from 'react-router-dom';
import tourPlaces from '../../TourPlaces/TourPlaces';

const PlacesCheckout = () => {
    const { placeId } = useParams();
    let determinedPlace;

    tourPlaces.forEach(place => {
        if ((+place.index)===(+placeId)) determinedPlace = place;
    });

    const { name, cost, about, picture, isAvailable, address } = determinedPlace;


    return (
        <div>
            <div className='text-center mb-5 pb-5'>
                <div className='place'>
                    <img src={picture} alt="" className='pb-3' />
                    <h2>{name}</h2>

                    <h5>Estimated cost: <strong>{cost} BDT</strong></h5>

                    <p className='text-secondary'>Address: {address}</p>
                    <p><small>{about}</small></p>
                </div>
                {
                    isAvailable ?
                        <Link to="/checkout">
                            <button className='btn btn-primary'>Make Payment</button>
                        </Link> 
                        :
                        <h3 className='text-danger'>The tour place is currently booked, please try again after some days</h3>
                }

            </div>
        </div>
    );
};

export default PlacesCheckout;