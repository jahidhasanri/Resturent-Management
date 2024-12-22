import React from 'react';
import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const food = useLoaderData();
    return (
        <div className="container mx-auto p-4">
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
          </div>
        </div>
      </div>
    
    );
  };


export default SingleFood;