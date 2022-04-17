import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Place.css';

const Place = ({service}) => {
    const {index, name, picture, about, cost, address, isAvailable} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = index =>{
        navigate(`/place/${index}`);
    }
    return (
        <div className='place'>
            <img height={200} width="100%" src={picture} alt="" className='pb-3'/>
            <h2>{name}</h2>
            
            <h5>Estimated cost: <strong>{cost} BDT</strong></h5>
            <h6>Available: <strong>{isAvailable?"Yes":"No"}</strong></h6>

            <p className='text-secondary'>Address: {address}</p>
            <p><small>{about}</small></p>
            <button onClick={() => navigateToServiceDetail(index)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Place;