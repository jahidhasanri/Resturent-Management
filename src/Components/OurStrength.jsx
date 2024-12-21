import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const OurStrength = () => {
  const strengths = [
    {
      id: 1,
      title: "Catering",
      description:
        "Our catering services are tailored to meet the unique needs of each client. From intimate gatherings to large-scale events, we provide delicious, high-quality food that will leave your guests satisfied and impressed.",
      icon: "🍴",
    },
    {
      id: 2,
      title: "Dinner",
      description:
        "We specialize in creating exceptional dining experiences that elevate any occasion. Our expertly crafted menus are designed to delight your taste buds with every bite, providing a memorable dining experience.",
      icon: "🍽️",
    },
    {
      id: 3,
      title: "Wedding",
      description:
        "Make your special day unforgettable with our bespoke wedding services. We ensure every detail is taken care of, so you can focus on celebrating your love with family and friends.",
      icon: "🎉",
    },
    {
      id: 4,
      title: "Corporate Events",
      description:
        "Our corporate event services are designed to create impactful experiences for your team or clients. We provide professional and efficient event management, catering, and more to ensure success.",
      icon: "🏢",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 w-8/12 mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-orange-500 mb-2">Our Strength</h2>
        <p className="text-gray-600">Discover what makes us unique and valuable!</p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {strengths.map((strength) => (
          <SwiperSlide key={strength.id}>
            <div
              className="bg-white shadow-md p-6 rounded-lg text-center border hover:shadow-xl hover:scale-105 transform transition-all duration-300 w-full h-full flex flex-col items-center justify-between"
              style={{ height: "320px", width: "100%" }}
            >
              <div className="text-5xl text-orange-500 mb-4">{strength.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{strength.title}</h3>
              <p className="text-gray-500 flex-grow">{strength.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination mt-6"></div>
    </div>
  );
};

export default OurStrength;
