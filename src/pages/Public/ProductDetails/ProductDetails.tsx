import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, ShoppingCart, ChevronLeft } from "lucide-react";
import { useGetProductByIdQuery } from "@/store/Api/ProductsApi/ProductsApi";
import YouMayAlsoLike from "@/common/YouMayAlsoLike";
import { toast } from "sonner";
import { useAppDispatch } from "@/hooks/useRedux";
import { addToCart } from "@/store/features/CartSlice/cartSlice";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(id!);
  const [selectedSize, setSelectedSize] = useState<number>(41);
  const [activeImage, setActiveImage] = useState<number>(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  const handleAddToCart = () => {
    if (!product) return;

    try {
      const cartItem = {
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.images[0],
        category: product.category.name,
        size: selectedSize,
        quantity: 1,
        color: "Standard", // Defaulting as API doesn't provide colors
      };

      dispatch(addToCart(cartItem));
      
      toast.success(`${product.title} added to bag!`, {
        description: `Size: ${selectedSize}`,
      });
    } catch (error) {
      toast.error("Failed to add product to cart");
      console.error("Cart Error:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-primary-bg min-h-screen pt-12 pb-24 px-4 md:px-8">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 animate-pulse">
          {/* Image skeleton */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-[#ECEEF0] rounded-[32px]"
              />
            ))}
          </div>
          {/* Info skeleton */}
          <div className="lg:col-span-5 flex flex-col gap-6 pt-4">
            <div className="h-6 w-24 bg-[#ECEEF0] rounded-full" />
            <div className="h-16 w-full bg-[#ECEEF0] rounded-xl" />
            <div className="h-8 w-28 bg-[#ECEEF0] rounded-xl" />
            <div className="h-40 bg-[#ECEEF0] rounded-xl" />
            <div className="h-14 bg-[#ECEEF0] rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="bg-primary-bg min-h-screen flex flex-col items-center justify-center gap-4 text-primary-text">
        <p className="text-2xl font-bold">Product not found.</p>
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-primary-blue font-bold hover:underline"
        >
          <ChevronLeft size={20} />
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-primary-bg min-h-screen pt-12 pb-24 px-4 md:px-8">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* ── Image Gallery ─────────────────────────────── */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative aspect-square bg-[#ECEEF0] overflow-hidden flex items-center justify-center  group transition-all duration-300 ${
                  idx === 0 ? "rounded-tl-[32px] md:rounded-tl-[48px]" : ""
                } ${
                  idx === 1 ? "rounded-tr-[32px] md:rounded-tr-[48px]" : ""
                } ${
                  idx === 2 ? "rounded-bl-[32px] md:rounded-bl-[48px]" : ""
                } ${
                  idx === product.images.length - 1 || idx === 3
                    ? "rounded-br-[32px] md:rounded-br-[48px]"
                    : ""
                } ${activeImage === idx ? "" : "hover:brightness-95"}`}
              >
                <img
                  src={img}
                  alt={`${product.title} view ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>

        {/* ── Product Info ───────────────────────────────── */}
        <div className="lg:col-span-5 flex flex-col pt-4 text-primary-text">
          {/* Badge + Title + Price */}
          <div className="mb-8">
            <span className="bg-primary-blue text-white text-xs font-bold px-4 py-2 rounded-xl uppercase tracking-widest inline-block mb-4">
              {product.category.name}
            </span>
            <h4 className="leading-none mb-4 uppercase">{product.title}</h4>
            <p className="text-primary-blue text-3xl font-[900]">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Size Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="uppercase">Size</h3>
              <button className="text-primary-text text-xs font-bold uppercase underline tracking-widest">
                Size Chart
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 rounded-xl text-sm font-bold transition-all border-2 ${
                    selectedSize === size
                      ? "bg-primary-text text-white border-primary-text"
                      : "bg-white text-primary-text border-transparent hover:border-primary-text"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-3 bg-primary-text text-white font-bold py-5 rounded-xl uppercase tracking-widest hover:bg-black transition-colors"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button
              onClick={() => setIsWishlisted((prev) => !prev)}
              className={`p-5 rounded-xl border-2 transition-all  ${
                isWishlisted
                  ? "bg-primary-text text-white"
                  : "bg-white border-[#ECEEF0] text-primary-text hover:border-primary-text"
              }`}
            >
              <Heart
                size={24}
                className={isWishlisted ? "fill-primary-text border-white" : ""}
              />
            </button>
          </div>

          <button className="w-full bg-primary-blue text-white font-bold py-5 rounded-xl uppercase tracking-widest hover:bg-[#3452cf] transition-colors mb-10 shadow-lg shadow-primary-blue/20">
            Buy it Now
          </button>

          {/* Product Description */}
          <div className="border-t border-[#ECEEF0] pt-8">
            <h3 className="mb-4 uppercase">About the Product</h3>
            <p className="opacity-60 text-sm leading-relaxed font-medium">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* ── You May Also Like ───────────────────────── */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 border-t border-[#ECEEF0] mt-16">
        <YouMayAlsoLike currentProductId={product!.id} />
      </div>
    </div>
  );
};

export default ProductDetails;
