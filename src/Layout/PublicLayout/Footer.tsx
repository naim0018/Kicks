import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import JoinKickPlus from "@/pages/Public/Home/Components/JoinKickPlus";

const Footer: React.FC = () => {
  return (
    <footer className="w-[1320px] mx-auto pb-8 pt-0 relative z-20 ">
      <div className="">
        <div className="">
          <JoinKickPlus />
        </div>
        <div className="bg-primary-text rounded-[48px] h-[580px] md:rounded-[64px] overflow-hidden pt-10  text-white relative -mt-24 md:-mt-28">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10 px-8 md:px-16">
            {/* About us */}
            <div className="col-span-2 space-y-4">
              <h4 className="text-primary-yellow ">About us</h4>
              <p className="text-primary-bg/80 text-lg font-medium leading-relaxed max-w-xs">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-primary-yellow ">Categories</h3>
              <ul className="flex flex-col gap-2 text-lg text-white">
                <li>
                  <Link
                    to="/runners"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Runners
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sneakers"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Sneakers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/basketball"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Basketball
                  </Link>
                </li>
                <li>
                  <Link
                    to="/outdoor"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Outdoor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/golf"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Golf
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hiking"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Hiking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-primary-yellow pb-4">Company</h3>
              <ul className="flex flex-col gap-2 text-lg text-primary-bg">
                <li>
                  <Link
                    to="/about"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <h3 className="text-primary-yellow pb-4">Follow us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-white hover:text-primary-blue transition-colors"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary-blue transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary-blue transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary-blue transition-colors"
                >
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>
          </div>
          {/* Massive Background Logo */}
          <div className="relative pt-10 ">
            <h2 className="text-[430px] font-black text-white text-center flex items-center justify-center tracking-[-0.05em] -ml-5">
              KI
              <div className="relative">
                <div className="z-0 absolute top-0 left-4 text-primary-text stroke-text">
                  C
                </div>
                <div className="text-white z-10 relative">C</div>
              </div>
              <span className="-ml-6">KS</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p className="text-primary-text text-sm ">
          © All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
