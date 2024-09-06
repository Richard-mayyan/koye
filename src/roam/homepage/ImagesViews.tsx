"use client"
// import React from 'react'

// function ImagesViews({imgs} : {imgs : string[]}) {

//   return (
//     <div>
//           <Carousel plugins={[
//           Autoplay({
//             delay: 2000,
//           }),]} className='mt-5'  opts={{align : "center"}}>
//         <CarouselContent>
//             {imgs.map((v,index) => {
//             return  <CarouselItem key={index} className="  ">
//                        <img className='object-cover   w-full h-[500px]'  src={v} />
//                   </CarouselItem>
//             })}
//         </CarouselContent>
//     </Carousel>
//     </div>
//   )
// }

// export default ImagesViews


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
// import Autoplay from 'embla-carousel-autoplay'

const testimonials = [
  { id: 1, text: "This product has changed my life. Absolutely wonderful!" },
  { id: 2, text: "Amazing customer service and an outstanding experience." },
  { id: 3, text: "I can't recommend this enough. It exceeded my expectations!" },
  { id: 4, text: "High quality and easy to use. A must-have for everyone!" }
];

const ImagesViews = ({imgs} : {imgs : string[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-40 flex items-center justify-center mt-40 mb-52">
      <AnimatePresence>
        {imgs.map((v, index) => (
          currentIndex === index && (
            <motion.div
            style={{backgroundImage : `url('${v}')`,backgroundSize : "cover",backgroundPosition : "center",backgroundRepeat :"no-repeat"}}

              key={index}
              className="absolute text-center text-2xl font-light text-gray-800 h-[500px] w-full bg-red-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
                {/* <p>kjbvkjerbfkj</p> */}
                {/* {imgs.map((v,index) => {
                    return  <div key={index} className="  ">
                               <img className='object-cover   w-full h-[500px]'  src={v} />
                          </div>
                    })} */}
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ImagesViews;
