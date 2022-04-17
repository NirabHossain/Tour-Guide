import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import tourPlaces from '../../../TourPlaces/TourPlaces';

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tourPlaces[7]?.picture}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{tourPlaces[7]?.name}</h3>
                    <p>{tourPlaces[7]?.address}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tourPlaces[9]?.picture}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h3>{tourPlaces[9]?.name}</h3>
                    <p>{tourPlaces[9]?.address}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tourPlaces[8]?.picture}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h3>{tourPlaces[8]?.name}</h3>
                    <p>{tourPlaces[8]?.address}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;