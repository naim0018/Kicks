import React, { useEffect, useRef, useState } from "react";
import { Search, X, Loader2 } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";
import { useGetProductsQuery } from "@/store/Api/ProductsApi/ProductsApi";
import { useNavigate } from "react-router-dom";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { data: results, isFetching } = useGetProductsQuery(
    { title: debouncedSearch, limit: 5 },
    { skip: debouncedSearch.length < 2 },
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    } else {
      setSearchTerm("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        containerRef.current.contains(event.target as Node)
      ) {
        return;
      }

      if (
        (event.target as HTMLElement).closest('[data-search-trigger="true"]')
      ) {
        return;
      }

      onClose();
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleProductClick = (id: number) => {
    navigate(`/product-details/${id}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="absolute top-full right-0 mt-2 w-[300px] md:w-[450px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-[100] animate-in fade-in slide-in-from-top-2 duration-200"
    >
      <div className="relative">
        <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus-within:border-primary-blue transition-colors">
          <Search size={20} className="text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="bg-transparent border-none outline-none w-full text-sm font-medium text-primary-text"
          />
          {isFetching ? (
            <Loader2 size={18} className="text-primary-blue animate-spin" />
          ) : searchTerm ? (
            <button
              onClick={() => setSearchTerm("")}
              className="text-gray-400 hover:text-primary-text transition-colors"
            >
              <X size={18} />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-primary-text transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div className="mt-4 max-h-[400px] overflow-y-auto custom-scrollbar">
          {debouncedSearch.length >= 2 ? (
            <div className="space-y-2">
              <p className="text-[10px] uppercase font-black tracking-widest text-gray-400 mb-2 px-1">
                {isFetching
                  ? "Searching..."
                  : `Results for "${debouncedSearch}"`}
              </p>
              {results && results.length > 0
                ? results.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-xl transition-colors group text-left"
                    >
                      <div className="w-12 h-12 bg-[#ECEEF0] rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-1">
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold truncate text-primary-text uppercase">
                          {product.title}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black text-primary-blue">
                            ${product.price.toFixed(2)}
                          </span>
                          <span className="text-[10px] text-gray-400 uppercase font-bold">
                            {product.category.name}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))
                : !isFetching && (
                    <p className="text-sm font-medium text-gray-400 px-1 py-4 text-center">
                      No products found matching your search.
                    </p>
                  )}
            </div>
          ) : (
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-gray-400 mb-2 px-1">
                Trending Now
              </p>
              <div className="flex flex-wrap gap-2">
                {["Jordan 1", "Air Max", "Dunk", "Running"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setSearchTerm(item)}
                    className="text-xs font-bold px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-primary-text"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
