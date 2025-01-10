import React from 'react';
import Banner from '../Components/Banner';
import TopFoodSec from '../Components/TopFoodSec';
import OurStrength from '../Components/OurStrength';
import WhyChooseUs from '../Components/WhyChooseUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopFoodSec></TopFoodSec>
            <OurStrength></OurStrength>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;