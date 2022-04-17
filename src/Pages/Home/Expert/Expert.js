import React from 'react';

const Expert = ({ vehicle }) => {
    const { name, img, fare, description} = vehicle;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} height={250} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#services" className="btn btn-primary">Confirm {name}</a>
                </div>
                <div className='card-footer'>{name} fare: {fare} BDT</div>
            </div>
        </div>

    );
};

export default Expert;