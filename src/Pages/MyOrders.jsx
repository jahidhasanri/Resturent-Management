import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const user=useContext(AuthContext)
  const userEmail =user?.user?.email;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`https://assignment-11-solution-server.vercel.app/purchase?email=${userEmail}`);
        setOrders(response.data);
      } catch (error) {
        // console.error(error);
        toast.error('Failed to fetch orders');
      }
    };
    fetchOrders();
  }, [userEmail]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://assignment-11-solution-server.vercel.app/purchase/${id}`,{
        withCredentials: true, // Include the cookies for authorization
      });
      if (response.data.deletedCount > 0) {
        toast.success('Order deleted successfully');
        setOrders(orders.filter((order) => order._id !== id)); // Remove the deleted order from the state
      } else {
        toast.error('Failed to delete order');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while deleting the order');
    }
  };

  return (
    <div className="mt-[110px] md:mt-2 p-6 container mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <div key={order._id} className="card bg-base-100 shadow-lg">
            <figure>
              <img src={order.food_img} alt={order.food_Name} className="w-full h-[300px] " />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{order.foodName}</h2>
              <p>Price: ${order.price}</p>
              <p>Owner Name: {order.buyerName}</p>
              <p>Owner Email: {order.buyerEmail}</p>
              <p>
                Ordered on: <span className="font-semibold">{moment(order.date).format('MMMM Do YYYY, h:mm:ss a')}</span>
              </p>
              <button
                onClick={() => handleDelete(order._id)}
                className="btn btn-error mt-4"
              >
                Delete Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
