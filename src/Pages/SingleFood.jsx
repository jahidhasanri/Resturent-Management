import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useNavigate } from "react-router-dom";

const SingleFood = () => {
    const food = useLoaderData();
    const navigate = useNavigate();
    const [purchaseCount, setPurchaseCount] = useState(0); // Default count = 0

    const handlePurchase = () => {
        setPurchaseCount(prevCount => prevCount + 1); // Increment Purchase Count
        navigate(`/foodpurchase/${food._id}`); // Redirect to purchase page
    };

    return (
        <div className="mt-[100px] mb-10 lg:mt-[50px] lg:w-4/12 mx-auto p-6 ">
            <Helmet>
                <title>Restu | singlefood</title>
            </Helmet>
            <div className="card bg-base-100 shadow-lg rounded-lg">
                <figure>
                    <img src={food.img} alt={food.food} className="h-[400px] w-full p-6 rounded-2xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-black">{food.food}</h2>
                    <p className='text-black'>
                        <span className="font-semibold text-black">Category:</span> {food.categoryName}
                    </p>
                    <p className='text-black'>
                        <span className="font-semibold text-black">Price:</span> ${food.price}
                    </p>
                    <p className='text-black'>
                        <span className="font-semibold">Quantity:</span> {food.quantity}
                    </p>
                    <p className='text-black'>
                        <span className="font-semibold">Origin:</span> {food.foodOrigin}
                    </p>
                    <p className='text-black'>
                        <span className="font-semibold">Description:</span> {food.description}
                    </p>
                    <p className='text-black'>
                        <span className="font-semibold">Purchase Count:</span> {food.PurchaseCount ? food.PurchaseCount : '0' } {/* Show 0 if purchaseCount is 0, otherwise show the actual value */}
                    </p>
                    <button 
                        onClick={handlePurchase} 
                        className="btn btn-primary mt-4"
                    >
                        Purchase Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;
