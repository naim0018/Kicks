import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { clearCart } from "@/store/features/CartSlice/cartSlice";
import CartItem from "./Components/CartItem";
import OrderSummary from "./Components/OrderSummary";
import YouMayAlsoLike from "@/common/YouMayAlsoLike";
import CommonWrapper from "@/common/CommonWrapper";
import OrderSuccessModal from "./Components/OrderSuccessModal";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setShowSuccessModal(true);
  };

  const onSuccessClose = () => {
    setShowSuccessModal(false);
    dispatch(clearCart());
  };

  return (
    <CommonWrapper className="">
      <div className="bg-primary-bg min-h-screen pt-12 pb-24 space-y-20">
        <div className="">
          {/* Banner Section */}
          <div className="mb-10">
            <h4 className="mb-2 text-primary-text">Saving to celebrate</h4>
            <p className="opacity-70 text-sm md:text-base font-bold mb-4">
              Enjoy up to 60% off thousands of styles during the End of Year
              sale - while supplies last. No code needed.
            </p>
            <div className="flex gap-1.5 font-bold text-sm items-center">
              <Link
                to="/signup"
                className="hover:text-primary-blue transition-colors"
              >
                Join us
              </Link>
              <span className="opacity-70">or</span>
              <Link
                to="/login"
                className="hover:text-primary-blue transition-colors"
              >
                Sign-in
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Main Bag Content */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm transition-all hover:shadow-md">
                <h3 className="mb-2 !text-3xl font-black uppercase text-primary-text">
                  Your Bag
                </h3>
                <p className="text-primary-text/60 font-bold text-sm mb-8">
                  Items in your bag not reserved- check out now to make them
                  yours.
                </p>

                {cartItems.length > 0 ? (
                  <div className="flex flex-col">
                    {cartItems.map((item, idx) => (
                      <CartItem
                        key={`${item.id}-${item.size}-${idx}`}
                        item={item}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center flex flex-col items-center gap-6">
                    <div className="w-20 h-20 bg-primary-bg rounded-full flex items-center justify-center text-primary-text/40">
                      <ShoppingCart size={40} />
                    </div>
                    <div>
                      <h3 className="uppercase text-xl mb-2">
                        Your box is empty
                      </h3>
                      <p className="text-sm opacity-60">
                        Add some products to your bag and they will show up
                        here.
                      </p>
                    </div>
                    <Link
                      to="/"
                      className="bg-primary-text text-white px-8 py-4 rounded-xl uppercase font-bold text-sm hover:bg-black transition-all"
                    >
                      Start Shopping
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Checkout Section */}
            <div className="lg:col-span-4 sticky top-8">
              <OrderSummary 
                items={cartItems} 
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        </div>

        <YouMayAlsoLike />
      </div>

      <OrderSuccessModal 
        isOpen={showSuccessModal}
        onClose={onSuccessClose}
      />
    </CommonWrapper>
  );
};

export default Cart;
