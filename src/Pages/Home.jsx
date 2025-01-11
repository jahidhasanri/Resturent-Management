import React from 'react';
import Banner from '../Components/Banner';
import TopFoodSec from '../Components/TopFoodSec';
import OurStrength from '../Components/OurStrength';
import WhyChooseUs from '../Components/WhyChooseUs';
import Blog from '../Components/Blog';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Restu | Home</title>
            </Helmet>
            <Banner></Banner>
            <TopFoodSec></TopFoodSec>
            <OurStrength></OurStrength>
            <WhyChooseUs></WhyChooseUs>
            <Blog></Blog>
        </div>
    );
};

export default Home;