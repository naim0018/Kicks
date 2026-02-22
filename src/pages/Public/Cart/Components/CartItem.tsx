import React, { useState } from "react";
import { Trash2, Heart, ChevronDown } from "lucide-react";
import { CartItemData } from "../types";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { removeFromCart, updateCartItem, toggleWishlist } from "@/store/features/CartSlice/cartSlice";
import InlineStepper from "./InlineStepper";
import { toast } from "sonner";

interface CartItemProps {
  item: CartItemData;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const isWishlisted = useAppSelector((state) => state.cart.wishlist.includes(item.id));
  
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [showQtyModal, setShowQtyModal] = useState(false);

  const availableSizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleRemove = () => {
    dispatch(removeFromCart({ id: item.id, size: item.size }));
    toast.info("Item removed from bag");
  };

  const handleSizeSelect = (newSize: number) => {
    dispatch(updateCartItem({ id: item.id, oldSize: item.size, newSize }));
    // toast.success("Size updated");
  };

  const handleQtySelect = (newQuantity: number) => {
    dispatch(updateCartItem({ id: item.id, oldSize: item.size, newQuantity }));
    // toast.success("Quantity updated");
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(item.id));
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <div className="flex gap-4 md:gap-6 py-6 border-b border-gray-100 last:border-0 items-start">
      <div className="w-24 h-24 sm:w-40 sm:h-40 bg-[#ECEEF0] rounded-2xl overflow-hidden flex items-center justify-center shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex justify-between items-start gap-4 mb-2">
          <div className="min-w-0">
            <h4 className="text-lg md:text-xl font-bold uppercase truncate leading-tight mb-1">
              {item.name}
            </h4>
            <p className="text-primary-text/60 text-sm font-bold mb-1">
              {item.category}
            </p>
            <p className="text-primary-text/60 text-sm font-bold">
              {item.color}
            </p>
          </div>
          <div className="text-primary-blue text-lg md:text-xl font-semibold shrink-0">
            ${item.price.toFixed(2)}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 mt-2">
          <div className="relative">
            <div 
              onClick={() => setShowSizeModal(!showSizeModal)}
              data-stepper-trigger="true"
              className="flex items-center gap-2 cursor-pointer group"
            >
              <span className="text-primary-text/70 font-bold text-sm">
                Size {item.size}
              </span>
              <ChevronDown
                size={16}
                className={`text-primary-text/40 group-hover:text-primary-blue transition-all ${showSizeModal ? 'rotate-180' : ''}`}
              />
            </div>
            <InlineStepper 
              isOpen={showSizeModal}
              onClose={() => setShowSizeModal(false)}
              options={availableSizes}
              selectedValue={item.size}
              onSelect={handleSizeSelect}
              variant="grid"
            />
          </div>
          
          <div className="relative">
            <div 
              onClick={() => setShowQtyModal(!showQtyModal)}
              data-stepper-trigger="true"
              className="flex items-center gap-2 cursor-pointer group"
            >
              <span className="text-primary-text/70 font-bold text-sm">
                Quantity {item.quantity}
              </span>
              <ChevronDown
                size={16}
                className={`text-primary-text/40 group-hover:text-primary-blue transition-all ${showQtyModal ? 'rotate-180' : ''}`}
              />
            </div>
            <InlineStepper 
              isOpen={showQtyModal}
              onClose={() => setShowQtyModal(false)}
              options={quantities}
              selectedValue={item.quantity}
              onSelect={handleQtySelect}
            />
          </div>
        </div>

        <div className="flex gap-4 mt-auto">
          <button 
            onClick={handleToggleWishlist}
            className={`transition-colors ${isWishlisted ? "text-red-500 fill-red-500" : "text-primary-text hover:text-primary-blue"}`}
          >
            <Heart size={22} />
          </button>
          <button
            onClick={handleRemove}
            className="text-primary-text hover:text-red-500 transition-colors"
          >
            <Trash2 size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
