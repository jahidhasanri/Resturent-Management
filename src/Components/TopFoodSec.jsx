import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TopFoodSec = () => {
    const [foods, setFoods] = useState([]);
    const navigate = useNavigate();

    // Fetch data from API
    useEffect(() => {
        fetchTopFoods();
    }, []);

    const fetchTopFoods = () => {
        axios
            .get('https://assignment-11-solution-server.vercel.app/jobs') // Replace with your API endpoint
            .then(response => {
                const allFoods = response.data;

                // Sort foods by PurchaseCount in descending order
                const sortedFoods = allFoods
                    .sort((a, b) => (b.PurchaseCount || 0) - (a.PurchaseCount || 0));

                // Ensure at least 6 items are shown
                const topSixFoods = sortedFoods.slice(0, 8);

                setFoods(topSixFoods);
            })
            .catch(error => {
                console.error('Error fetching foods:', error);
            });
    };

    const handleDetails = (id) => {
        navigate(`/singlefood/${id}`); // Navigate to Single Food Page
    };

    const handleSeeAll = () => {
        navigate('/allfoods'); // Redirect to All Foods Page
    };

    return (
       <div className='bg-slate-100'>
         <div className=" md:container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-10 mt-6 text-black">Top Selling Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {foods.map(food => (
                    <div
                        key={food._id}
                        className="card bg-base-100 shadow-lg rounded-lg hover:shadow-xl hover:bg-gray-100 transition duration-200"
                    >
                        <figure>
                            <img
                                src={food.img}
                                alt={food.food}
                                className="h-[300px] w-full rounded-3xl p-3"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="text-xl font-semibold text-black">{food.food}</h3>
                            <p className='text-black'>
                                <span className="font-semibold text-black">Category:</span> {food.categoryName}
                            </p>
                            <p className='text-black'>
                                <span className="font-semibold">Price:</span> ${food.price}
                            </p>
                            <p className='text-black'>
                                <span className="font-semibold">Purchase Count:</span> {food.PurchaseCount || 0}
                            </p>
                            <button
                                onClick={() => handleDetails(food._id)}
                                className="btn btn-primary mt-4 hover:bg-blue-600"
                            >
                                Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <button
                    onClick={handleSeeAll}
                    className="btn w-[100px] btn-primary mt-4 hover:bg-gray-500"
                >
                    See All
                </button>
            </div>
        </div>
       </div>
    );
};

export default TopFoodSec;
