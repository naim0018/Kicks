import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { CategoryCard } from "@/common/Cards/CategoryCard";
import { useGetCategoriesQuery } from "@/store/Api/CategoriesApi/CategoriesApi";

// Import Swiper styles
import "swiper/css";

const Categories: React.FC = () => {
  const { data: categories = [], isLoading } = useGetCategoriesQuery();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  if (isLoading) {
    return (
      <section className="bg-primary-text py-24 flex items-center justify-center">
        <div className="text-white animate-pulse">Loading Categories...</div>
      </section>
    );
  }

  if (categories.length === 0) return null;
  const categoriesData = categories.slice(0, 4);
  return (
    <section className="bg-primary-text pt-16 md:pt-24 pb-0 overflow-hidden flex flex-col">
      <div className="max-w-[1380px] mx-auto w-full px-4 md:px-8 flex justify-between items-center mb-12">
        <h2 className="text-white">CATEGORIES</h2>
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className={`w-10 h-10 rounded-md flex items-center justify-center transition-all z-50 ${
              isBeginning
                ? "bg-white/5 text-white/10 cursor-not-allowed"
                : "bg-white/10 text-white hover:bg-white/20 active:scale-95"
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className={`w-10 h-10 rounded-md flex items-center justify-center transition-all z-50 ${
              isEnd
                ? "bg-white/5 text-white/10 cursor-not-allowed"
                : "bg-white text-primary-text hover:bg-white/90 active:scale-95"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="max-w-[1380px] mx-auto w-full px-4 md:px-8">
          <div className="w-full relative overflow-visible ">
            <Swiper
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
              className="categories-swiper"
            >
              {categoriesData.map((category, index) => (
                <SwiperSlide key={category.id}>
                  <CategoryCard
                    name={category.name}
                    image={category.image}
                    className={`${index === 0 ? "rounded-tl-[64px]" : ""} ${
                      index === categoriesData.length - 1
                        ? "rounded-tr-[64px]"
                        : ""
                    }`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <style>{`
        .categories-swiper {
          overflow: visible !important;
        }
        .swiper-slide {
          height: auto;
        }
        .swiper-slide:first-child {
          border-left: none;
        }
      `}</style>
    </section>
  );
};

export default Categories;
