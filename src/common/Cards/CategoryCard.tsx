import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

interface CategoryCardProps {
  name: string;
  image: string;
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  image,
  className = "",
}) => {
  return (
    <div
      className={`w-full min-h-[600px] bg-[#ECEEF0] relative group flex flex-col justify-between transition-colors hover:bg-[#E2E4E6] overflow-hidden ${className}`}
    >
      <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden ">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-102 ${className}`}
        />
      </div>

      <div className="flex justify-between items-center gap-10 p-8 pt-5">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-[0.9] uppercase">
          {name}
        </h3>
        <Link 
          to="/#new-drops"
          onClick={(e: React.MouseEvent) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              document.getElementById("new-drops")?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-primary-text text-white w-12 h-12 rounded-lg transform transition-transform group-hover:rotate-45 cursor-pointer flex items-center justify-center flex-shrink-0"
        >
          <ArrowUpRight size={24} />
        </Link>
      </div>
    </div>
  );
};
