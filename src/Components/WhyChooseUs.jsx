const WhyChooseUs = () => {
    const features = [
      {
        id: 1,
        title: "30,000 Restaurants Menus",
        description:
          "We’re working with many restaurants in your city to put food all in one place.",
      },
      {
        id: 2,
        title: "Easy Ordering by Phone",
        description:
          "This allows you to order quickly and easily. Accessible at any time.",
      },
      {
        id: 3,
        title: "Free Mobile Application",
        description:
          "Mobile App allows you to choose a restaurant, view prices, and check orders.",
      },
      {
        id: 4,
        title: "Easy Online Ordering",
        description:
          "Once logged in, you can easily navigate around the site to complete your order.",
      },
      {
        id: 5,
        title: "100% Positive Feedbacks",
        description:
          "We care about our customers, that is why we get 100% positive feedback.",
      },
      {
        id: 6,
        title: "Fast Guaranteed Delivery",
        description:
          "We take responsibility for making sure that orders are delivered safely.",
      },
    ];
  
    return (
      <div className="w-full bg-gray-50">
        <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            WHY PEOPLE CHOOSE US
          </h2>
          <p className="text-gray-500">Clients' Most Popular Choice</p>
        </div>
  
        <div className="flex justify-center mb-10">
          <img
            src="https://i.ibb.co.com/dpGDw01/high-angle-person-taking-photo-food-plate-with-smartphone.jpg" 
            alt="Phone app display"
            className=" md:w-8/12 md:h-[300px] lg:w-6/12 lg:h-[400px] rounded-lg shadow-md"
          />
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={feature.id} className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white font-bold rounded-full">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  };
  
  export default WhyChooseUs;
  