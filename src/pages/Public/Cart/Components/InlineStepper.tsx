import React, { useRef, useEffect } from "react";
import { Minus, Plus } from "lucide-react";

interface InlineStepperProps {
  isOpen: boolean;
  onClose: () => void;
  options: (string | number)[];
  selectedValue: string | number;
  onSelect: (value: any) => void;
  variant?: "stepper" | "grid";
}

const InlineStepper: React.FC<InlineStepperProps> = ({
  isOpen,
  onClose,
  options,
  selectedValue,
  onSelect,
  variant = "stepper",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the click is on the container or a child, don't close
      if (containerRef.current && containerRef.current.contains(event.target as Node)) {
        return;
      }
      
      // If the click is on the trigger element (the one that toggles the modal), 
      // let the trigger's own toggle logic handle it.
      // We can identify triggers by a data attribute.
      if ((event.target as HTMLElement).closest('[data-stepper-trigger="true"]')) {
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

  if (!isOpen) return null;

  const handleIncrement = () => {
    const currentIndex = options.indexOf(selectedValue);
    if (currentIndex < options.length - 1) {
      onSelect(options[currentIndex + 1]);
    }
  };

  const handleDecrement = () => {
    const currentIndex = options.indexOf(selectedValue);
    if (currentIndex > 0) {
      onSelect(options[currentIndex - 1]);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`absolute top-full left-0 mt-2 z-50 bg-white border border-gray-200 p-1 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-200 ${
        variant === "grid" ? "w-[240px]" : "min-w-[100px]"
      }`}
    >
      {variant === "stepper" ? (
        <div className="flex items-center justify-between gap-3 px-2 py-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDecrement();
            }}
            disabled={options.indexOf(selectedValue) === 0}
            className="text-[#232321] hover:bg-gray-100 p-1 disabled:opacity-20 transition-colors"
          >
            <Minus size={14} strokeWidth={3} />
          </button>

          <span className="text-sm font-semibold text-[#232321] tabular-nums">
            {selectedValue}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleIncrement();
            }}
            disabled={options.indexOf(selectedValue) === options.length - 1}
            className="text-[#232321] hover:bg-gray-100 p-1 disabled:opacity-20 transition-colors"
          >
            <Plus size={14} strokeWidth={3} />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-1 p-1">
          {options.map((option) => (
            <button
              key={option}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(option);
                onClose();
              }}
              className={`py-2 text-[10px] font-semibold tracking-tighter border ${
                selectedValue === option
                  ? "bg-[#232321] text-white border-[#232321]"
                  : "bg-white text-[#232321] border-[#ECEEF0] hover:border-[#232321]"
              } transition-colors`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default InlineStepper;
