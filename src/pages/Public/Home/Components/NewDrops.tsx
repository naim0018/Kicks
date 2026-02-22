import { ProductCardSkeleton } from "@/common/Skeleton/ProductCardSkeleton";
import { ProductCard } from "@/common/Cards/ProductCard";
import { useGetProductsQuery } from "@/store/Api/ProductsApi/ProductsApi";
import React from "react";

const NewDrops: React.FC = () => {
  const { data, isLoading } = useGetProductsQuery({
    categorySlug: "shoes",
    offset: 0,
    limit: 4,
  });
  const products = data || [];
  return (
    <section className="w-full py-12 md:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16 relative">
          <h2 className="relative z-10">
            Don't miss out <br /> New Drops
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <button className="bg-primary-blue text-white px-8 py-4 rounded-xl hover:bg-[#3452cf] transition-all active:scale-95 shadow-lg">
              Shop New Drops
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : products?.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default NewDrops;
