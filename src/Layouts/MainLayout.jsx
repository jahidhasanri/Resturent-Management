import React from 'react';
import Navbar from '../Pages/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
