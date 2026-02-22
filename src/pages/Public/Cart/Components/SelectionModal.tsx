import React from "react";
import { X } from "lucide-react";

interface SelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  options: (string | number)[];
  selectedValue: string | number;
  onSelect: (value: any) => void;
}

const SelectionModal: React.FC<SelectionModalProps> = ({
  isOpen,
  onClose,
  title,
  options,
  selectedValue,
  onSelect,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-md rounded-[32px] p-8 shadow-2xl animate-in zoom-in-95 duration-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-primary-text/60"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-black uppercase mb-8 text-primary-text">{title}</h3>

        <div className="grid grid-cols-4 gap-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSelect(option);
                onClose();
              }}
              className={`py-4 rounded-xl text-sm font-bold transition-all border-2 ${
                selectedValue === option
                  ? "bg-primary-text text-white border-primary-text shadow-lg scale-95"
                  : "bg-white text-primary-text border-[#ECEEF0] hover:border-primary-text"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        
        <button
          onClick={onClose}
          className="w-full mt-8 bg-primary-blue text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-lg shadow-primary-blue/20"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SelectionModal;
