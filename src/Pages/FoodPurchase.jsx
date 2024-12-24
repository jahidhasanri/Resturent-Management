import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const FoodPurchase = () => {
    const food = useLoaderData();
    console.log(food._id);
    const { user } = useContext(AuthContext);
    const [purchaseDetails, setPurchaseDetails] = useState({
        food_Id:food._id,
        foodName: food.food,
        price: food.price,
        quantity: 1,
        buyerName: user?.displayName || "Anonymous",
        buyerEmail: user?.email || "No Email",
        buyingDate: new Date().toISOString(),
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPurchaseDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value > 0 ? value : 1, // Ensure quantity is positive
        }));
    };

    // Handle increment and decrement
    const handleQuantityChange = (type) => {
        setPurchaseDetails((prevDetails) => ({
            ...prevDetails,
            quantity:
                type === "increment"
                    ? prevDetails.quantity + 1
                    : Math.max(prevDetails.quantity - 1, 1), // Prevent going below 1
        }));
    };

    const handlePurchase = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/purchase", purchaseDetails);
            if (response.data.insertedId) {
                toast.success("Purchase successful!");
            } else {
                toast.error("Failed to complete purchase!");
            }
        } catch (error) {
            toast.error("Error while processing purchase.");
            console.error(error);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 shadow-lg rounded-lg mt-10 mb-12 bg-white">
            <h1 className="text-2xl font-bold mb-4">Complete Your Purchase</h1>
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
                        >
                            -
                        </button>
                        <input
                            type="number"
                            name="quantity"
                            value={purchaseDetails.quantity}
                            onChange={handleInputChange}
                            className="input input-bordered w-16 text-center"
                            min={1} // Ensure minimum quantity is 1
                        />
                        <button
                            type="button"
                            onClick={() => handleQuantityChange("increment")}
                            className="btn btn-sm btn-outline ml-2"
                        >
                            +
                        </button>
                    </div>
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
                <button type="submit" className="btn btn-primary w-full">
                    Purchase
                </button>
            </form>
        </div>
    );
};

export default FoodPurchase;
