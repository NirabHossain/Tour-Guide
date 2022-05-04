import React from 'react';
import usePlaces from '../../hooks/usePlaces';

const ManagePlaces = () => {
    const [places, setPlaces] = usePlaces();
    const handleDelete = id =>{
        // const proceed = window.confirm('Are you sure?');
        // if(proceed){}
        
        fetch(`http://localhost:5000/places/${id}`,{
            method: 'DELETE'
        }).then(res=>res.json()).then(data=>{
            const remaining = places.filter(place=>place._id!==id);
            setPlaces(remaining);
        })

    }
    return (
        <div>
            <h2>This is manage Places</h2>
            {
                places.map(place=><div key = {place._id}>
                    <h4>{place?.name} <button onClick={()=>handleDelete(place._id)}>X</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManagePlaces;