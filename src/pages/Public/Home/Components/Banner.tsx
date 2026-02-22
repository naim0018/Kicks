import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop",
  "/image2.jpg",
  "/image3.jpg",
];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full">
      <div className="mx-auto w-full">
        {/* Main Heading */}
        <div className="w-full px-4 md:px-0">
          <h1 className="uppercase flex items-center justify-center flex-col md:flex-row md:gap-x-10 py-10 leading-none">
            <span className="text-primary-text text-[220px]">Do it</span>
            <span className="text-primary-blue text-[220px]">right</span>
          </h1>
        </div>

        {/* Hero Card Container */}
        <div className="relative w-full aspect-[16/9] rounded-xl md:rounded-[64px] overflow-hidden bg-primary-bg shadow-2xl">
          {/* Main Background Image */}
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Nike Air Max"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Left Vertical Label */}
          <div className="absolute left-0 top-[12%] z-10">
            <p className="bg-primary-text text-white px-2 py-5 md:px-3 rounded-l-2xl [writing-mode:vertical-lr] rotate-180 flex items-center justify-center text-[8px] md:text-xs uppercase">
              Nike product of the year
            </p>
          </div>

          {/* Content Overlays */}
          <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
            <div className="max-w-2xl">
              <h2 className="text-white mb-2 tracking-tight">
                NIKE AIR MAX
              </h2>
              <p className="text-white/90 mb-6 max-w-md leading-snug">
                Nike introducing the new air max for everyone's comfort
              </p>
              <button className="inline-block bg-primary-blue text-white px-8 py-3 md:px-12 md:py-5 rounded-xl hover:bg-[#3452cf] hover:shadow-2xl transition-all active:scale-95 shadow-lg cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>

          {/* Thumbnail Gallery (Bottom Right) - Only show inactive images */}
          <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex flex-col gap-3 md:gap-4 z-20">
            {images.map((img, idx) => {
              if (idx === currentIndex) return null; // Don't show the active image here
              return (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="w-16 h-16 md:w-32 md:h-32 rounded-xl md:rounded-[24px] border-4 border-white/30 overflow-hidden shadow-2xl cursor-pointer transition-all transform hover:-translate-y-1 hover:border-white"
                >
                  <img src={img} alt={`Shoe angle ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
