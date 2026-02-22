import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { logOut } from "@/store/features/AuthSlice/authSlice";
import { Search, User, ChevronDown, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItemsCount = useAppSelector((state) => state.cart.items.length);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
    setIsOpen(false);
  };

  return (
    <header className="w-full px-4 py-6 md:px-8">
      <nav className="mx-auto max-w-[1320px] bg-white rounded-xl md:rounded-2xl px-6 py-4 md:px-8 flex items-center justify-between shadow-sm border border-gray-100">
        {/* Left Navigation: Desktop */}
        <div className="hidden md:flex items-center gap-8 text-primary-text font-semibold text-sm tracking-wide">
          <Link
            to="/#"
            className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
          >
            New Drops <span className="text-base">🔥</span>
          </Link>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:opacity-70 transition-opacity">
            <span>Men</span>
            <ChevronDown size={14} className="mt-0.5" />
          </div>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:opacity-70 transition-opacity">
            <span>Women</span>
            <ChevronDown size={14} className="mt-0.5" />
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary-text hover:opacity-70"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center: Logo */}
        <Link to="/" className="text-primary-text">
          <div className="relative ">
            <h2 className="text-[50px] font-black text-primary-text text-center flex items-center justify-center tracking-[-0.05em] -ml-5">
              KI
              <div className="relative">
                <div className="z-0 absolute top-0 left-0.5 text-white stroke-text-small">
                  C
                </div>
                <div className="text-primary-text z-10 relative">C</div>
              </div>
              <span className="-ml-0.5">KS</span>
            </h2>
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-6 text-primary-text">
          <button className="hover:opacity-70 transition-opacity hidden sm:block">
            <Search size={22} strokeWidth={2.5} />
          </button>

          <div className="relative group">
            <button className="hover:opacity-70 transition-opacity">
              <User size={22} strokeWidth={2.5} />
            </button>
            <div className="absolute right-0 mt-2 w-40 hidden group-hover:block bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 text-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          <Link
            to="/cart"
            className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-primary-yellow rounded-full text-primary-text font-bold text-sm hover:scale-105 transition-transform"
          >
            {cartItemsCount}
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden mt-4 mx-auto max-w-7xl bg-[#F8F9FA] rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          <Link
            to="/new-drops"
            className="font-semibold text-lg flex items-center gap-2 text-primary-text"
            onClick={() => setIsOpen(false)}
          >
            New Drops 🔥
          </Link>
          <div className="font-semibold text-lg flex items-center justify-between text-primary-text">
            Men <ChevronDown size={18} />
          </div>
          <div className="font-semibold text-lg flex items-center justify-between text-primary-text">
            Women <ChevronDown size={18} />
          </div>
          <hr className="border-gray-200" />
          <button
            onClick={handleLogout}
            className="text-left font-semibold text-lg text-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
