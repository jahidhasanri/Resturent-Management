import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import UseAxiosSecure from '../Hoks/UseAxiosSecure';

const AddFoodPage = () => {
  const { user } = useContext(AuthContext);
  const navigate=useNavigate();
  const axiosSecure =UseAxiosSecure();

  const handleAddEquipment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const info = new FormData(form);
    const allInfo = Object.fromEntries(info.entries());

    try {
      const { data } = await axiosSecure.post('/jobs', allInfo);
      
      if (data) {
        toast.success('Food item added successfully'); // Toast on success
        form.reset(); 
        navigate('/')
      } else {
        toast.error('Failed to add food item'); // Toast on failure
      }
    } catch (error) {
      console.error(error);
      toast.error('Error adding food item'); // Toast on error
    }
  };

  return (
    <div className="flex mt-[110px] md:mt-[30px] lg:mt-[10px] flex-col min-h-screen">
      <div className="w-11/12 mx-auto flex-grow text-black p-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-black">Add Equipment</h2>
        <div className="card bg-base-100 w-full shadow-2xl">
          <form onSubmit={handleAddEquipment} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                name="food"
                placeholder="Food Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Image</span>
              </label>
              <input
                type="text"
                name="img"
                placeholder="Food Image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Category</span>
              </label>
              <input
                type="text"
                name="categoryName"
                placeholder="Food Category"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Origin (Country)</span>
              </label>
              <input
                type="text"
                name="foodOrigin"
                placeholder="Food Origin (Country)"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                value={user?.email || ''}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="userName"
                value={user?.displayName || ''}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                placeholder="Description (ingredients, making procedure, etc.)"
                className="textarea textarea-bordered"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFoodPage;
