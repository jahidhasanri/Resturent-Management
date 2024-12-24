import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="hero mt-[110px] md:mt-[13px] min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co.com/3M7ppvx/resturant-img.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Food Haven!</h1>
          <p className="mb-5">
            Discover a wide variety of delicious meals. Freshly prepared and delivered to your doorstep. Explore now and satisfy your cravings!
          </p>
          <Link to="/allfoods">
            <button className="btn btn-primary">Explore All Foods</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
