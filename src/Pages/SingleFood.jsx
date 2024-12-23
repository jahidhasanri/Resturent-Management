import React, { useState } from 'react';
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
        <div className="lg:w-4/12 mx-auto p-6 mt-2">
            <div className="card bg-base-100 shadow-lg rounded-lg">
                <figure>
                    <img src={food.img} alt={food.food} className="h-[500px] w-[500px] object-cover rounded-t-lg" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{food.food}</h2>
                    <p>
                        <span className="font-semibold">Category:</span> {food.categoryName}
                    </p>
                    <p>
                        <span className="font-semibold">Price:</span> ${food.price}
                    </p>
                    <p>
                        <span className="font-semibold">Quantity:</span> {food.quantity}
                    </p>
                    <p>
                        <span className="font-semibold">Origin:</span> {food.foodOrigin}
                    </p>
                    <p>
                        <span className="font-semibold">Description:</span> {food.description}
                    </p>
                    <p>
                        <span className="font-semibold">Purchase Count:</span> {purchaseCount}
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
