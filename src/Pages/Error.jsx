import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Error = () => {
    return (
       <div>
        <Navbar></Navbar>
         <div className='text-center mt-[300px]'>
        <div className='w-full md:w-[500px] lg:h-[500px] mx-auto '>
            <img className='' src="https://i.ibb.co.com/PQXhmKJ/404-page-not-found-1024x576.webp" alt="" />
        </div>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Error;