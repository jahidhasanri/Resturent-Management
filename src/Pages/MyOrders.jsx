import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';
import UseAxiosSecure from '../Hoks/UseAxiosSecure';
import { Helmet } from 'react-helmet';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const user = useContext(AuthContext);
  const userEmail = user?.user?.email;
  const useAxiosSecure = UseAxiosSecure();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await useAxiosSecure.get(`/purchase?email=${userEmail}`);
        setOrders(response.data);
      } catch (error) {
        toast.error('Failed to fetch orders');
      }
    };
    fetchOrders();
  }, [userEmail]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://assignment-11-solution-server.vercel.app/purchase/${id}`, {
        withCredentials: true, // Include the cookies for authorization
      });
      if (response.data.deletedCount > 0) {
        toast.success('Order deleted successfully');
        setOrders(orders.filter((order) => order._id !== id)); // Remove the deleted order from the state
      } else {
        toast.error('Failed to delete order');
      }
    } catch (error) {
      toast.error('An error occurred while deleting the order');
    }
  };

  return (
    <div className="mt-[110px] md:mt-2 p-6 container mx-auto">
      <Helmet>
        <title>Resto | My Orders</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>

      {orders.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left text-sm font-medium text-gray-700">Food</th>
              <th className="p-4 text-left text-sm font-medium text-gray-700">Price</th>
              <th className="p-4 text-left text-sm font-medium text-gray-700">Owner Name</th>
              <th className="p-4 text-left text-sm font-medium text-gray-700">Ordered On</th>
              <th className="p-4 text-left text-sm font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-b">
                <td className="p-4 text-sm text-gray-700 flex items-center">
                  <img src={order.food_img} alt={order.food_Name} className="w-[80px] h-[80px] rounded-2xl mr-2" />
                  {order.foodName}
                </td>
                <td className="p-4 text-sm text-gray-700">${order.price}</td>
                <td className="p-4 text-sm text-gray-700">{order.owner_Name}</td>
                <td className="p-4 text-sm text-gray-700">
                  {moment(order.buyingDate).format("MMMM Do YYYY, h:mm:ss A")}
                </td>
                <td className="p-4 text-sm text-gray-700">
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-error"
                  >
                    Delete Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found for {userEmail}.</p>
      )}
    </div>
  );
};

export default MyOrders;
