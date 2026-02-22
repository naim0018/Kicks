import { Link } from "react-router-dom";
import { Product } from "@/store/Api/ProductsApi/types";

export const ProductCard: React.FC<Product> = ({
  id,
  title,
  price,
  images,
  creationAt,
}) => {
  // Logic to determine if it's a new drop (e.g., created in the last 7 days)
  const isNew = creationAt
    ? new Date().getTime() - new Date(creationAt).getTime() <
      7 * 24 * 60 * 60 * 1000
    : false;
  const image = images?.[0] || "";

  return (
    <div className="flex flex-col group cursor-pointer">
      {/* Image Container */}
      <Link
        to={`/product-details/${id}`}
        className="relative aspect-square bg-[#ECEEF0] rounded-[28px] md:rounded-3xl overflow-hidden p-2 mb-4"
      >
        {isNew && (
          <div className="absolute top-2 left-2 group-hover:top-0 group-hover:left-0 transition-all duration-500 rounded-tl-2xl overflow-hidden z-10">
            <div className="bg-primary-blue text-white text-[10px] md:text-sm font-bold px-4 py-2 rounded-br-2xl uppercase tracking-wider">
              New
            </div>
          </div>
        )}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform rounded-2xl duration-500"
        />
      </Link>

      {/* Info */}
      <h3 className="mb-4 leading-tight uppercase line-clamp-2 min-h-[4rem]">
        {title}
      </h3>

      {/* Action Button */}
      <Link
        to={`/product-details/${id}`}
        className="w-full bg-primary-text text-white py-4 rounded-xl text-center uppercase tracking-widest text-xs md:text-sm font-medium hover:bg-black transition-colors"
      >
        View Product - <span className="text-primary-yellow">${price}</span>
      </Link>
    </div>
  );
};
