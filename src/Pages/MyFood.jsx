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
                <title>Resto | myfood</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-4 text-center  ">My Foods</h1>
            {foods.length > 0 ? (
                <ul className="space-y-4">
                    {foods.map((food) => (
                        <li
                            key={food._id}
                            className="p-4 border rounded-lg shadow-md bg-white"
                        >
                            <div className='md:flex justify-around items-center text-black'>
                                <div>
                                    <img src={food.img} alt={food.food} className="w-full rounded-2xl md:w-[400px] h-[250px]  mb-4" />
                                </div>
                                <div>
                            <h2 className="text-lg font-semibold  text-black">{food.food}</h2>
                            <p className=' text-black'>Price: ${food.price}</p>
                            <p className=' text-black'>Quantity: {food.quantity}</p>
                            <Link to={`/update/${food._id}`}
                                className="mt-2 btn text-blue-500 hover:underline"
                            >
                                Update
                            </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No foods found for {users}.</p>
            )}
        </div>
    );
};

export default MyFood;
