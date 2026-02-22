import React from "react";

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col animate-pulse">
      {/* Image Container Skeleton */}
      <div className="relative aspect-square bg-[#ECEEF0] rounded-[28px] md:rounded-3xl mb-4" />

      {/* Title Skeleton */}
      <div className="flex flex-col gap-3 mb-4 min-h-[3rem]">
        <div className="h-5 bg-[#ECEEF0] rounded-lg w-full" />
        <div className="h-5 bg-[#ECEEF0] rounded-lg w-3/4" />
      </div>

      {/* Button Skeleton */}
      <div className="h-[52px] w-full bg-[#ECEEF0] rounded-xl" />
    </div>
  );
};
