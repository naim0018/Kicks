import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import JoinKickPlus from "@/pages/Public/Home/Components/JoinKickPlus";

const Footer: React.FC = () => {
  return (
    <footer className="max-w-[1320px] w-full mx-auto pb-8 pt-0 relative z-20 px-4 md:px-0">
      <div className="">
        <div className="">
          <JoinKickPlus />
        </div>
        <div className="bg-primary-text rounded-[48px] h-[530px] sm:h-[500px] md:h-[580px] md:rounded-[64px] overflow-hidden pt-10 md:pt-16 text-white relative -mt-32 md:-mt-28">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 relative z-10 px-8 md:px-16">
            {/* About us */}
            <div className="col-span-2 lg:col-span-2 space-y-4">
              <h4 className="text-primary-yellow ">About us</h4>
              <p className="text-primary-bg/80 text-sm md:text-lg font-medium leading-relaxed max-w-xs">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-primary-yellow ">Categories</h3>
              <ul className="flex flex-col gap-1 md:gap-2 text-sm md:text-lg text-white">
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Runners
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Sneakers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Basketball
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Outdoor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Golf
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Hiking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-primary-yellow">Company</h3>
              <ul className="flex flex-col gap-1 md:gap-2 text-sm md:text-lg text-primary-bg">
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div className="col-span-2 lg:col-span-1 space-y-4">
              <h3 className="text-primary-yellow">Follow us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-white hover:text-primary-blue transition-colors"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary-blue transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary-blue transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary-blue transition-colors"
                >
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>
          </div>
          {/* Massive Background Logo */}
          <div className="absolute bottom-[-9%] md:bottom-[-30%] left-0 right-0 z-0 pointer-events-none">
            <h2 className="text-[120px] sm:text-[200px] md:text-[300px] lg:text-[380px] xl:text-[420px] font-black text-white text-center flex items-center justify-center tracking-[-0.05em] leading-none -ml-2 md:-ml-5">
              KI
              <div className="relative">
                <div className="z-0 absolute top-0 left-1.5 md:left-4 text-primary-text stroke-text">
                  C
                </div>
                <div className="text-white z-10 relative">C</div>
              </div>
              <span className="-ml-2 md:-ml-6">KS</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p className="text-primary-text text-sm ">© All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
