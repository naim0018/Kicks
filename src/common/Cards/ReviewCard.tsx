import { Star } from "lucide-react";

interface ReviewCardProps {
  title: string;
  text: string;
  rating: number;
  userImage: string;
  shoeImage: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  text,
  rating,
  userImage,
  shoeImage,
}) => {
  return (
    <div className="bg-white rounded-[28px] md:rounded-4xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6 md:p-8 flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="mb-1">{title}</h3>
            <p className="opacity-60 text-sm font-medium leading-relaxed max-w-[200px]">
              {text}
            </p>
          </div>
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-4xl overflow-hidden border-2 border-primary-blue">
            <img
              src={userImage}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex items-center gap-1.5 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < Math.floor(rating)
                  ? "fill-primary-yellow text-primary-yellow"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-primary-text font-bold text-sm ml-1">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="px-0 pb-0">
        <div className="aspect-square w-full overflow-hidden rounded-b-4xl">
          <img
            src={shoeImage}
            alt="Review product"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>
    </div>
  );
};