import React, { useContext, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { use } from "react";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const {user}=useContext(AuthContext)
  console.log(user);

  const images = [
    { src: "https://i.ibb.co.com/JznnXDx/pizza-img.jpg", name: "User 1", desc: "Classic Italian pizza with fresh tomatoes, mozzarella cheese, basil le" },
    { src: "https://i.ibb.co.com/PNfKwWM/Sushi-Platter.png", name: "User 2", desc: "An assortment of sushi rolls made with fresh fish, avocado, and sushi" },
    { src: "https://i.ibb.co.com/BP1vMdq/kachhi.jpg", name: "User 3", desc: "A fragrant rice dish cooked with marinated mutton, potatoes, and aroma" },
    { src: "https://i.ibb.co.com/sy1LH2b/tacos.jpg", name: "User 4", desc: "Marinated pork tacos served with pineapple, onions, cilantro, and sals" },
    { src: "https://i.ibb.co.com/y4nXkx3/Butter-Chicken.webp", name: "User 5", desc: "Creamy and flavorful chicken curry made with tomato-based gravy" },
    { src: "https://i.ibb.co.com/znQmstc/Croissant.jpg", name: "User 6", desc: "Flaky, buttery pastry made with layered dough and baked to perfection" },
    { src: "https://i.ibb.co.com/1T2wq4f/Pad-Thai.jpg", name: "User 7", desc: "Stir-fried rice noodle dish with shrimp, tofu, bean sprouts, peanuts" },
    { src: "https://i.ibb.co.com/y0SM92g/Burger.jpg", name: "User 8", desc: "Classic beef burger served with lettuce, tomato, cheese, and pickles" },
    { src: "https://i.ibb.co.com/GxdxJxs/Paella.jpg", name: "User 9", desc: "Rice dish cooked with saffron, seafood, chicken, and vegetables, burs" },
    { src: "https://i.ibb.co.com/Fwd3f2c/Shawarma.jpg", name: "User 10", desc: "Grilled meat slices wrapped in pita bread with tahini, vegetables" },
  ];

  const handleImageClick = (index) => {
    setCurrentImage(index);
    setOpen(true);
  };

  return (
    <div className="bg-gray-100">
    <div className=" container mx-auto  mt-[270px] md:mt-[170px] lg:mt-[30px]">
      {/* Page Title */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Gallery</h1>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-[320px]  rounded-lg shadow-lg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white rounded-lg transition-opacity duration-300">
              <h2 className="text-lg font-semibold">{user?user.displayName : image.name}</h2>
              <p className="text-sm">{image.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
  open={open}
  close={() => setOpen(false)}
  slides={images.map((image) => ({ src: image.src }))}
  index={currentImage}
  render={{
    slide: ({ slide }) => (
      <img
        src={slide.src}
        alt="Gallery Item"
        className="custom-lightbox-image rounded-lg  h-[600px] shadow-lg"
      />
    ),
  }}
/>

    </div>
    </div>
  );
};

export default Gallery;
