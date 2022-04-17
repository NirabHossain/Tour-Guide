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
                    src={tourPlaces[0]?.picture}
                    alt="First slide"
                    height={400}
                />
                <Carousel.Caption>
                    <h3>{tourPlaces[0]?.name}</h3>
                    <p>{tourPlaces[0]?.address}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tourPlaces[1]?.picture}
                    alt="Second slide"
                    height={400}
                />

                <Carousel.Caption>
                <h3>{tourPlaces[1]?.name}</h3>
                    <p>{tourPlaces[1]?.address}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tourPlaces[2]?.picture}
                    alt="Second slide"
                    height={400}
                />

                <Carousel.Caption>
                <h3>{tourPlaces[2]?.name}</h3>
                    <p>{tourPlaces[2]?.address}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;