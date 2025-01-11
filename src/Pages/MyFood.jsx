import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import UseAxiosSecure from '../Hoks/UseAxiosSecure';
import { Helmet } from 'react-helmet';

const MyFood = () => {
    const [foods, setFoods] = useState([]);
    const user = useContext(AuthContext);
    const users = user?.user?.email; // Extract the email of the logged-in user
    const navigate = useNavigate();
    const axiosSecure = UseAxiosSecure();

    useEffect(() => {
        if (users) { // Only fetch if user email exists
            const fetchFoods = async () => {
                try {
                    const response = await axiosSecure.get(`/myfoods?email=${users}`);
                    setFoods(response.data); // Set fetched data to state
                } catch (error) {
                    console.error("Error fetching foods:", error);
                }
            };
            fetchFoods();
        }
    }, [users]); // Dependency array with users to trigger the effect when user changes

    return (
        <div className="p-6 mt-[100px] md:mt-[40px] lg:mt-[10px]">
            <Helmet>
                <title>Resto | My Foods</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-4 text-center">My Foods</h1>
            {foods.length > 0 ? (
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-4 text-left text-sm font-medium text-gray-700">Food</th>
                            <th className="p-4 text-left text-sm font-medium text-gray-700">Price</th>
                            <th className="p-4 text-left text-sm font-medium text-gray-700">Quantity</th>
                            <th className="p-4 text-left text-sm font-medium text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map((food) => (
                            <tr key={food._id} className="border-b">
                                <td className="p-4 text-sm text-gray-700">
                                    <img src={food.img} alt={food.food} className="w-[100px] h-[80px] rounded-2xl" />
                                    <span className="ml-2">{food.food}</span>
                                </td>
                                <td className="p-4 text-sm text-gray-700">${food.price}</td>
                                <td className="p-4 text-sm text-gray-700">{food.quantity}</td>
                                <td className="p-4 text-sm text-gray-700">
                                    <Link to={`/update/${food._id}`} className="text-blue-500 hover:underline">
                                        Update
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No foods found for {users}.</p>
            )}
        </div>
    );
};

export default MyFood;
