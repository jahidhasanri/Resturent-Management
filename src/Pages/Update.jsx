import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import UseAxiosSecure from '../Hoks/UseAxiosSecure';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Update = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const useaxious= UseAxiosSecure();
  const {user}=useContext(AuthContext)
  console.log(user.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Collect form data
    const updatedFood = {
      food: form.food.value.trim(),
      img: form.img.value.trim(),
      categoryName: form.categoryName.value.trim(),
      price: parseFloat(form.price.value),
      quantity: parseInt(form.quantity.value, 10),
      foodOrigin: form.foodOrigin.value.trim(),
      description: form.description.value.trim(),
      userEmail: user.email,
    };

    try {
      const response = await useaxious.put(`/jobs/${data._id}`, updatedFood);

      if (response.data.modifiedCount > 0) {
        toast.success('Food item updated successfully');
        form.reset();
        navigate('/allfoods'); // Redirect to food list
      } else {
        toast.warn('No changes were made to the food item');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error updating food item');
    }
  };

  return (
    <div className="bg-gray-300 p-6 mt-[100px] md:mt-[40px] lg:mt-[10px]">
      <h1 className="text-2xl font-bold mb-4 text-center  text-black">Update Food</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1  text-black">Food Name</label>
          <input
            type="text"
            name="food"
            className="input input-bordered w-full  text-black"
            defaultValue={data.food || ''}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1  text-black">Food Image URL</label>
          <input
            type="text"
            name="img"
            className="input input-bordered w-full  text-black"
            defaultValue={data.img || ''}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1  text-black">Category Name</label>
          <input
            type="text"
            name="categoryName"
            className="input input-bordered w-full  text-black"
            defaultValue={data.categoryName || ''}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1  text-black">Food Price</label>
          <input
            type="number"
            name="price"
            className="input input-bordered w-full  text-black"
            defaultValue={data.price || 0}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1  text-black">Quantity</label>
          <input
            type="number"
            name="quantity"
            className="input input-bordered w-full  text-black"
            defaultValue={data.quantity || 0}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1  text-black">Food Origin</label>
          <input
            type="text"
            name="foodOrigin"
            className="input input-bordered w-full  text-black"
            defaultValue={data.foodOrigin || ''}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1  text-black">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full  text-black"
            defaultValue={data.description || ''}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full  ">
          Update Food
        </button>
      </form>
    </div>
  );
};

export default Update;
