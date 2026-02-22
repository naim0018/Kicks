import React from "react";

const JoinKickPlus: React.FC = () => {
  return (
    <div className="bg-primary-blue rounded-[48px] md:rounded-[64px] p-8 md:p-16 relative ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 pb-22">
        <div className="">
          <h2 className="text-white text-4xl md:text-5xl leading-none uppercase pb-6">
            Join our KicksPlus <br /> Club & get 15% off
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-medium mb-8">
            Sign up for free! Join the community.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-2 border-white/30 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors flex-1"
            />
            <button
              type="submit"
              className="bg-primary-text text-white px-8 py-4 rounded-xl uppercase hover:bg-black transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="relative pt-6 md:pt-10 ">
          <h2 className="text-[80px] sm:text-[120px] md:text-[160px] font-black text-white text-center flex items-center justify-center tracking-[-0.04em] -ml-2 md:-ml-5 leading-none">
            KI
            <div className="relative">
              <div className="z-0 absolute top-0 left-0.5 md:left-1 text-primary-blue stroke-text2">
                C
              </div>
              <div className="text-white z-10 relative">C</div>
            </div>
            <span className="-ml-1.5 md:-ml-3">KS</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default JoinKickPlus;
