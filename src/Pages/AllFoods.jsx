import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";

const AllFoods = () => {
  const foods = useLoaderData(); // Fetching all food data
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [filteredFoods, setFilteredFoods] = useState(foods); // State for filtered foods

  // Handle search
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = foods.filter((food) =>
      food.food.toLowerCase().includes(value)
    );
    setFilteredFoods(filtered);
  };

  return (
    <div className="container mx-auto p-5 mt-[110px] md:mt-2">
      {/* Page Title */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-10 mb-6">
        <h1 className="text-4xl font-bold">All Foods</h1>
      </div>

      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search foods by name..."
          className="input input-bordered w-full max-w-md"
        />
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <div
              key={food._id}
              className="card bg-base-100 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden"
            >
              <figure className="overflow-hidden">
                <img
                  src={food.img}
                  alt={food.food}
                  className="h-[300px] w-11/12 p-3 rounded-3xl transition-transform duration-300 hover:scale-110"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg font-bold text-gray-800 hover:text-primary">
                  {food.food}
                </h2>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Category:</span>{" "}
                  {food.categoryName}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Price:</span> $
                  {food.price}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Quantity:</span>{" "}
                  {food.quantity}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Origin:</span>{" "}
                  {food.foodOrigin}
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/singlefood/${food._id}`}>
                    <button className="btn btn-primary transition-transform duration-200 hover:scale-105">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No foods found.</p>
        )}
      </div>
    </div>
  );
};

export default AllFoods;
