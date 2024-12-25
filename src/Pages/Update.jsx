import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Update = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

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
    };

    try {
      const response = await axios.put(`https://assignment-11-solution-server.vercel.app/jobs/${data._id}`, updatedFood);

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Update Food</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Food Name</label>
          <input
            type="text"
            name="food"
            className="input input-bordered w-full"
            defaultValue={data.food || ''}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Food Image URL</label>
          <input
            type="text"
            name="img"
            className="input input-bordered w-full"
            defaultValue={data.img || ''}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Category Name</label>
          <input
            type="text"
            name="categoryName"
            className="input input-bordered w-full"
            defaultValue={data.categoryName || ''}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Food Price</label>
          <input
            type="number"
            name="price"
            className="input input-bordered w-full"
            defaultValue={data.price || 0}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            className="input input-bordered w-full"
            defaultValue={data.quantity || 0}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Food Origin</label>
          <input
            type="text"
            name="foodOrigin"
            className="input input-bordered w-full"
            defaultValue={data.foodOrigin || ''}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            defaultValue={data.description || ''}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Update Food
        </button>
      </form>
    </div>
  );
};

export default Update;
