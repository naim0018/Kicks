import { ReactNode } from "react";

interface CommonWrapperProps {
  children: ReactNode;
  className?: string;
}

const CommonWrapper = ({ children, className = "" }: CommonWrapperProps) => {
  return (
    <div className={`max-w-[1320px] w-full mx-auto px-4 md:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default CommonWrapper;
