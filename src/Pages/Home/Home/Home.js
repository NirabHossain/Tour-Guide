import React from 'react';
import Banner from '../Banner/Banner';
import Vehicles from '../Experts/Experts';
import Places from '../Places/Places';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Places></Places>
            <Vehicles></Vehicles>
        </>
    );
};

export default Home;