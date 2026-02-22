import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="bg-white w-full max-w-lg rounded-[48px] p-10 md:p-16 text-center shadow-2xl animate-in slide-in-from-bottom-8 duration-300 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 animate-bounce">
            <CheckCircle2 size={56} strokeWidth={2.5} />
          </div>
        </div>

        <h2 className="text-4xl font-black uppercase mb-4 text-primary-text leading-tight">
          ORDER SUCCESSFUL!
        </h2>
        <p className="text-primary-text/60 font-bold mb-10 leading-relaxed">
          Your style is on its way. We've sent a confirmation email with all the details of your purchase.
        </p>

        <div className="space-y-4">
          <button
            onClick={onClose}
            className="w-full bg-primary-text text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-2 group shadow-xl active:scale-[0.98]"
          >
            Continue Shopping
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={onClose}
            className="w-full text-primary-text font-bold text-sm uppercase underline tracking-wider hover:text-primary-blue transition-colors"
          >
            Track your order
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
