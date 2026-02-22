import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { logOut } from "@/store/features/AuthSlice/authSlice";
import { Search, User, ChevronDown, Menu, X } from "lucide-react";
import SearchModal from "./Components/SearchModal";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const cartItemsCount = useAppSelector((state) => state.cart.items.length);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.hash === "#new-drops") {
      const element = document.getElementById("new-drops");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen) return;

      if (menuRef.current && menuRef.current.contains(event.target as Node)) {
        return;
      }

      if ((event.target as HTMLElement).closest('[data-menu-trigger="true"]')) {
        return;
      }

      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="w-full px-4 py-6 md:px-8 relative z-[100]">
      <nav className="mx-auto max-w-[1320px] bg-white rounded-xl md:rounded-2xl px-6 py-4 md:px-8 flex items-center justify-between shadow-sm border border-gray-100">
        <div className="hidden md:flex items-center gap-8 text-primary-text font-semibold text-sm tracking-wide">
          <Link
            to="/#new-drops"
            className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                document
                  .getElementById("new-drops")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            New Drops <span className="text-base">🔥</span>
          </Link>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:opacity-70 transition-opacity">
            <Link
              to="/#new-drops"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  document
                    .getElementById("new-drops")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Men
            </Link>
            <ChevronDown size={14} className="mt-0.5" />
          </div>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:opacity-70 transition-opacity">
            <Link
              to="/#new-drops"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  document
                    .getElementById("new-drops")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Women
            </Link>
            <ChevronDown size={14} className="mt-0.5" />
          </div>
        </div>

        <button
          onClick={toggleMenu}
          data-menu-trigger="true"
          className="md:hidden text-primary-text hover:opacity-70"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link
          to="/"
          className="text-primary-text translate-x-4 md:translate-x-0"
        >
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
          <div className="relative">
            <button
              onClick={() => setShowSearch(!showSearch)}
              data-search-trigger="true"
              className={`hover:opacity-70 transition-all hidden sm:block ${showSearch ? "text-primary-blue scale-110" : ""}`}
            >
              <Search size={22} strokeWidth={2.5} />
            </button>
            <SearchModal
              isOpen={showSearch}
              onClose={() => setShowSearch(false)}
            />
          </div>

          <div className="relative group">
            <button className="hover:opacity-70 transition-opacity py-2">
              <User size={22} strokeWidth={2.5} />
            </button>
            <div className="absolute right-0 top-full pt-1.5 hidden group-hover:block z-50">
              <div className="w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-3 text-left text-sm font-semibold uppercase tracking-widest hover:bg-gray-50 text-red-600 transition-colors"
                >
                  Logout
                </button>
              </div>
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

      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-[calc(100%-1.5rem)] left-4 right-4 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 flex flex-col gap-5 animate-in fade-in zoom-in-95 duration-200 z-[110]"
        >
          <Link
            to="/#new-drops"
            className="font-semibold uppercase tracking-widest text-lg flex items-center gap-2 text-primary-text hover:text-primary-blue transition-colors"
            onClick={() => {
              setIsOpen(false);
              if (location.pathname === "/") {
                document
                  .getElementById("new-drops")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            New Drops 🔥
          </Link>
          <Link
            to="/#new-drops"
            className="font-semibold uppercase tracking-widest text-lg flex items-center justify-between text-primary-text hover:text-primary-blue transition-colors"
            onClick={(e) => {
              setIsOpen(false);
              if (location.pathname === "/") {
                e.preventDefault();
                document
                  .getElementById("new-drops")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Men <ChevronDown size={18} />
          </Link>
          <Link
            to="/#new-drops"
            className="font-semibold uppercase tracking-widest text-lg flex items-center justify-between text-primary-text hover:text-primary-blue transition-colors"
            onClick={(e) => {
              setIsOpen(false);
              if (location.pathname === "/") {
                e.preventDefault();
                document
                  .getElementById("new-drops")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Women <ChevronDown size={18} />
          </Link>
          <hr className="border-gray-100" />
          <button
            onClick={handleLogout}
            className="text-left font-semibold uppercase tracking-widest text-lg text-red-600 hover:opacity-70 transition-opacity"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
