import React from "react";
import { CartItemData } from "../types";

interface OrderSummaryProps {
  items: CartItemData[];
  onCheckout: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, onCheckout }) => {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const delivery = subtotal > 0 ? 6.99 : 0;
  const tax = "-";
  const total = subtotal + delivery;

  return (
    <div className="text-primary-text">
      <h3 className="mb-8 uppercase font-bold text-2xl">Order Summary</h3>

      <div className="flex flex-col gap-5 mb-8">
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm uppercase opacity-70">
            {items.length} ITEM{items.length !== 1 ? "S" : ""}
          </span>
          <span className="font-bold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center font-bold text-sm">
          <span className="uppercase opacity-70">Delivery</span>
          <span>${delivery.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center font-bold text-sm">
          <span className="uppercase opacity-70">Sales Tax</span>
          <span>{tax}</span>
        </div>
        <div className="flex justify-between items-center text-xl font-black pt-5 border-t border-gray-100">
          <span className="uppercase">Total</span>
          <span className="font-semibold text-[#232321]/80">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <button
        onClick={onCheckout}
        className="w-full bg-primary-text text-white py-5 rounded-xl uppercase font-bold tracking-widest hover:bg-black transition-all mb-6 shadow-lg active:scale-[0.98]"
      >
        Checkout
      </button>

      <button className="w-full text-primary-text font-bold text-sm uppercase underline tracking-wider hover:text-primary-blue transition-colors">
        Use a promo code
      </button>
    </div>
  );
};

export default OrderSummary;
