"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { config } from '../config';

const testimonials = [
  { id: 1, text: "This product has changed my life. Absolutely wonderful!" },
  { id: 2, text: "Amazing customer service and an outstanding experience." },
  { id: 3, text: "I can't recommend this enough. It exceeded my expectations!" },
  { id: 4, text: "High quality and easy to use. A must-have for everyone!" }
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-40 lg:h-full  flex items-center justify-center">
      <AnimatePresence>
        {testimonials.map((testimonial, index) => (
          currentIndex === index && (
            <motion.div
              key={testimonial.id}
              className="absolute lg:leading-[4rem] font-light text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
              <p className='text-textColor  uppercase font-semibold mb-10 hidden lg:block text-lg'>Verified {config.siteName} reviews</p>

                <p className='mb-10 text-[2rem] lg:text-[3rem] px-4 text-center lg:text-left '>"{testimonial.text}"</p>
                <div className='flex w-fit mx-auto lg:mx-0'>
                    <div className='flex space-x-1'>
                        {Array(5).fill(0).map((v,index) => <Star key={index} fill='#9b3920'  className='w-4 h-4 text-textColor' />)}
                    </div>
                    <p className='text-textColor text-xs ml-4 '>CA on  <a href="">TRUSTPILOT</a> </p>

                </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialSlider;
