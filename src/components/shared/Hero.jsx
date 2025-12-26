"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200",
      title: "Trusted Care for Your Loved Ones 💕",
      subtitle:
        "Professional babysitting and elderly care services at your doorstep",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200",
      title: "Expert Baby Care Services 👶",
      subtitle: "Qualified caretakers to keep your little ones safe and happy",
    },
    {
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200",
      title: "Compassionate Elderly Care 👴",
      subtitle: "Dignity and comfort for your aging family members",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200",
      title: "Specialized Medical Care 🏥",
      subtitle: "Professional support for sick and recovering patients",
    },
    {
      image:
        "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200",
      title: "Available 24/7 for Your Family 🌟",
      subtitle: "Round-the-clock care services whenever you need us",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-[60vh] md:h-[70vh] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[60vh] md:h-[70vh] w-full bg-center bg-cover flex flex-col justify-center items-center text-white relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg animate-fade-in">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg lg:text-xl mb-8 drop-shadow-md max-w-2xl mx-auto">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/services"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition transform hover:scale-105 shadow-lg"
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="/about"
                    className="border-2 border-white hover:bg-white hover:text-orange-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(255, 255, 255, 0.2);
          padding: 20px;
          border-radius: 50%;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 87, 34, 0.8);
        }

        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background: #ff5722 !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
