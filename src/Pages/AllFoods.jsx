import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import { Helmet } from "react-helmet";

const AllFoods = () => {
  const [foods, setFoods] = useState([]); // State for food data
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order

  // Fetch all foods with search and sorting
  const fetchFoods = async (searchValue, sort) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://assignment-11-solution-server.vercel.app/jobs?search=${searchValue}&sort=${sort}`,
        {
          withCredentials: true
        }
      );
      setFoods(data);
    } catch (error) {
      console.error("Error fetching foods:", error);
    } finally {
      setLoading(false);
    }
  };

  // Debounced function for search
  const debouncedFetchFoods = useMemo(
    () =>
      debounce((value) => {
        fetchFoods(value, sortOrder);
      }, 500), // Wait 500ms after user stops typing
    [sortOrder]
  );

  useEffect(() => {
    debouncedFetchFoods(searchTerm);
    // Cleanup the debounce function
    return () => {
      debouncedFetchFoods.cancel();
    };
  }, [searchTerm, debouncedFetchFoods]);

  // Handle sort change
  const handleSortChange = (event) => {
    const newSortOrder = event.target.value;
    setSortOrder(newSortOrder);
    fetchFoods(searchTerm, newSortOrder); // Refetch foods with new sort order
  };

  return (
    <div className="container mx-auto p-6 mb-6 mt-[110px] md:mt-[150px] lg:mt-[10px]">
      <Helmet>
        <title>Restu | All Foods</title>
      </Helmet>
      {/* Page Title */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-10 mb-6">
        <h1 className="text-4xl font-bold">All Foods</h1>
      </div>

      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search foods by name..."
          className="input input-bordered w-full max-w-md"
        />
      </div>

      {/* Sort Dropdown */}
      <div className="mb-6 flex justify-center">
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="select select-bordered w-full max-w-md"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : foods.length > 0 ? (
          foods.map((food) => (
            <div
              key={food._id}
              className="card bg-base-100 shadow-lg transform transition duration-300 hover:scale-95 hover:shadow-2xl rounded-lg overflow-hidden"
            >
              <figure className="overflow-hidden">
                <img
                  src={food.img}
                  alt={food.food}
                  className="h-[300px] w-full p-4 rounded-3xl"
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
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold text-gray-800">Origin:</span>{" "}
                  {food.foodOrigin}
                </p>
                <div className="card-actions justify-start">
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
