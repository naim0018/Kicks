import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ProductCard } from "@/common/Cards/ProductCard";
import { useGetProductsQuery } from "@/store/Api/ProductsApi/ProductsApi";

import "swiper/css";
import "swiper/css/pagination";

interface YouMayAlsoLikeProps {
  currentProductId?: number;
}

const YouMayAlsoLike: React.FC<YouMayAlsoLikeProps> = ({
  currentProductId,
}) => {
  const { data: allProducts = [], isLoading } = useGetProductsQuery({
    offset: 0,
    limit: 10,
  });

  const swiperRef = useRef<SwiperType | null>(null);

  const products = allProducts.filter((p) => p.id !== currentProductId);

  if (isLoading) {
    return (
      <div className="py-12 md:py-16">
        <div className="flex justify-between items-center mb-8">
          <div className="h-10 w-56 bg-[#ECEEF0] rounded-xl animate-pulse" />
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-[#ECEEF0] rounded-xl animate-pulse" />
            <div className="w-10 h-10 bg-[#ECEEF0] rounded-xl animate-pulse" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col gap-3 animate-pulse">
              <div className="aspect-square bg-[#ECEEF0] rounded-3xl" />
              <div className="h-5 bg-[#ECEEF0] rounded-lg" />
              <div className="h-12 bg-[#ECEEF0] rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) return null;

  return (
    <div className="py-12 md:py-16 relative">
      <style>{`
        .you-may-also-like-swiper .swiper-pagination {
          position: relative;
          bottom: 0;
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .you-may-also-like-swiper .swiper-pagination-bullet {
          width: 48px;
          height: 8px;
          border-radius: 4px;
          background: #B4B4B4;
          opacity: 1;
          margin: 0 !important;
          transition: all 0.3s ease;
        }
        .you-may-also-like-swiper .swiper-pagination-bullet-active {
          background: #4A69E2;
          width: 56px;
        }
      `}</style>

      <div className="flex justify-between items-center mb-8">
        <h4 className="text-primary-text text-5xl">You may also like</h4>
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-primary-text text-white hover:bg-black active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-primary-text text-white hover:bg-black active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 12 },
          480: { slidesPerView: 2.2, spaceBetween: 14 },
          768: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="you-may-also-like-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default YouMayAlsoLike;
