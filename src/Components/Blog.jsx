import React from 'react';

const Blog = () => {
    const blogPosts = [
        {
            title: "The Best Dining Experience at Resto",
            image: "https://i.ibb.co.com/R2rj7y7/photo-1517248135467-4c7edcad34c4.jpg",
            description: "Discover why Resto is the best place to enjoy exquisite cuisine and create unforgettable memories with your loved ones.",
           
        },
        {
            title: "Our Secret to Perfectly Grilled Dishes",
            image: "https://i.ibb.co.com/gvLHsM1/k-Photo-Recipes-2019-05-how-to-grill-vegetables-HTGrill-Any-Veggie-The-Kitchn042919-76.jpg",
            description: "Learn about the secrets behind our perfectly grilled dishes that keep customers coming back for more.",
            
        },
        {
            title: "Resto's Seasonal Menu: A Taste of Fresh Ingredients",
            image: "https://i.ibb.co.com/KNkyJzb/01g5bj8ymje0p40kn8a2.webp",
            description: "Explore our seasonal menu filled with fresh, locally sourced ingredients that bring the flavors of the season to your table.",
           
        }
    ];

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-4xl font-bold text-center mb-8">Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <img src={post.image} alt={post.title} className="w-full h-[300px]  rounded-t-lg" />
                        <h3 className="text-2xl font-semibold mt-4">{post.title}</h3>
                        <p className="text-gray-700 mt-2">{post.description}</p>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
