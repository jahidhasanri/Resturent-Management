import React from 'react';
import { Link } from 'react-router-dom';
import { easeOut, motion } from "motion/react"

const Banner = () => {
  return (
    <div className="hero mt-[110px] md:mt-[13px]  bg-cover bg-center " style={{ backgroundImage: 'url(https://i.ibb.co.com/3M7ppvx/resturant-img.jpg)',
      height: '600px',
     }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <motion.h1
          animate={{x:10 , color:['#0ea3d6','#9e8850','#9b349a ']}}
          transition={{duration: 2, delay: 1, case: easeOut, repeat: Infinity}}
           className="mb-5 text-5xl font-bold">Welcome to Food Haven!
           </motion.h1>
          <p className="mb-5  primary">
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
