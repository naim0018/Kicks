import { ReviewCard } from "@/common/Cards/ReviewCard";
import React from "react";




const Reviews: React.FC = () => {
  // ... reviewData array
  const reviewData = [
    {
      title: "Good Quality",
      text: "I highly recommend shopping from kicks",
      rating: 5.0,
      userImage:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop",
      shoeImage:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1887&auto=format&fit=crop",
    },
    {
      title: "Good Quality",
      text: "I highly recommend shopping from kicks",
      rating: 5.0,
      userImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
      shoeImage:
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1887&auto=format&fit=crop",
    },
    {
      title: "Good Quality",
      text: "I highly recommend shopping from kicks",
      rating: 5.0,
      userImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
      shoeImage:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1898&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-primary-bg/30 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-10 md:mb-16">
          <h2 className="uppercase">Reviews</h2>
          <button className="bg-primary-blue text-white px-6 py-3 rounded-xl hover:bg-[#3452cf] transition-colors">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviewData.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
