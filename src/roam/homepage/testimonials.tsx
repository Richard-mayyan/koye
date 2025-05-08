"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { config } from "../config";

const testimonials = [
  {
    id: 1,
    text: "Lube is soft, dosn't cause any irritation whatsoever & doesn't leave a sticky residue behind",
  },
  { id: 2, text: "Amazing customer service and an outstanding experience." },
  {
    id: 3,
    text: "I can't recommend this enough. It exceeded my expectations!",
  },
  { id: 4, text: "High quality and easy to use. A must-have for everyone!" },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  //   }, 5000); // Change testimonial every 5 seconds
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="relative w-full lg:h-full  flex items-center justify-center  h-full text-center">
      {/* <div className="h-full bg-yellow-700 w-full"></div> */}
      <AnimatePresence>
        {testimonials.map(
          (testimonial, index) =>
            currentIndex === index && (
              <motion.div
                key={testimonial.id}
                className=" lg:leading-[4rem] font-light text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-textColor  uppercase font-semibold mb-10 hidden lg:block text-lg">
                  Verified {config.siteName} reviews
                </p>

                <p className="mb-10 text-[2rem] lg:text-[2rem] px-4 text-center ">
                  "{testimonial.text}"
                </p>
                <div className="flex w-fit mx-auto ">
                  <div className="flex space-x-1">
                    {Array(5)
                      .fill(0)
                      .map((v, index) => (
                        <Star
                          key={index}
                          className="w-4 h-4 text-textColor fill-textColor"
                        />
                      ))}
                  </div>
                  <p className="text-textColor text-xs ml-4 ">
                    GEORGE ON <a href="">TRUSTPILOT</a>{" "}
                  </p>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialSlider;
