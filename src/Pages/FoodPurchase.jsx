// FoodPurchase.js
import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UseAxiosSecure from "../Hoks/UseAxiosSecure";

const FoodPurchase = () => {
    const food = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate= useNavigate();
    const useaxious = UseAxiosSecure()

    const [purchaseDetails, setPurchaseDetails] = useState({
        food_Id: food._id,
        foodName: food.food,
        price: food.price,
        quantity: 0 ,
        buyerName: user?.displayName || "Anonymous",
        buyerEmail: user?.email || "No Email",
        buyingDate: new Date().toISOString(),
    });

    const isBuyerOwnFood = user?.email === food?.userEmail; 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPurchaseDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value > 0 ? Math.min(value, food.quantity) : 1, // Ensure quantity is within range
        }));
    };

    const handleQuantityChange = (type) => {
        setPurchaseDetails((prevDetails) => ({
            ...prevDetails,
            quantity:
                type === "increment"
                    ? Math.min(prevDetails.quantity + 1, food.quantity) // Ensure it doesn't exceed available quantity
                    : Math.max(prevDetails.quantity - 1, 1),
        }));
    };

    const handlePurchase = async (e) => {
        e.preventDefault();


        try {
            const response = await useaxious.post("/purchase", purchaseDetails);
            if (response.data.insertedId) {
                toast.success("Purchase successful!");
                navigate('/myorders')
            } else {
                toast.error("Failed to complete purchase!");
            }
        } catch (error) {
            toast.error("Error while processing purchase.");
            console.error(error);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 shadow-lg rounded-lg mt-[100px] mb-12 bg-white">
            <h1 className="text-xl md:text-2xl font-bold mb-4">Complete Your Purchase</h1>
            {food.quantity == 0 ? 
            (<p className="text-red-500 font-semibold mb-4">This item is not available for purchase.</p>)
        :
        ''
        }
        {
            isBuyerOwnFood?
            (<p className="text-red-500 font-semibold mb-4">you can't purchase this food.Because this food owner is you</p>)
            :
            ''
        }
            <form onSubmit={handlePurchase}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Food Name</label>
                    <input
                        type="text"
                        name="foodName"
                        value={purchaseDetails.foodName}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={purchaseDetails.price}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Quantity</label>
                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={() => handleQuantityChange("decrement")}
                            className="btn btn-sm btn-outline mr-2"
                            disabled={purchaseDetails.quantity <= 1}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            name="quantity"
                            value={purchaseDetails.quantity}
                            onChange={handleInputChange}
                            className="input input-bordered w-16 text-center"
                            min={1}
                            max={food.quantity}
                        />
                        <button
                            type="button"
                            onClick={() => handleQuantityChange("increment")}
                            className="btn btn-sm btn-outline ml-2"
                            disabled={purchaseDetails.quantity >= food.quantity}
                        >
                            +
                        </button>
                    </div>
                    {purchaseDetails.quantity > food.quantity && (
                        <p className="text-red-500 text-sm">You can't purchase more than the available quantity.</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Buyer Name</label>
                    <input
                        type="text"
                        name="buyerName"
                        value={purchaseDetails.buyerName}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Buyer Email</label>
                    <input
                        type="email"
                        name="buyerEmail"
                        value={purchaseDetails.buyerEmail}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>
                <button
    type="submit"
    className="btn btn-primary w-full"
    disabled={food.quantity === 0 || purchaseDetails.quantity === 0 || isBuyerOwnFood}
>
    Purchase
</button>

            </form>
        </div>
    );
};

export default FoodPurchase;
