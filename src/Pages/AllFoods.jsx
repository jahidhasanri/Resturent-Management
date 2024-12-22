import { useLoaderData, Link } from "react-router-dom";

const AllFoods = () => {
  const foods = useLoaderData(); // Fetching all food data

  return (
    <div className="container mx-auto p-4">
      {/* Page Title */}
      <div className="relative h-32 flex justify-center items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-100 absolute">Demo</h1>
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <div
            key={food.id}
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
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
