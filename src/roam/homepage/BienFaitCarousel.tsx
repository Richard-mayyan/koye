"use client"
import { motion, useAnimationFrame } from 'framer-motion';
import React, { useRef, useState } from 'react';

const BienFaitCarousel: React.FC = () => {
  const partnerUrl = "https://a.storyblok.com/f/153121/x/abe2445031/recycle.svg/m/0x35";
  const images = Array(10).fill(partnerUrl);
  
  // Ref pour la vitesse de défilement
  const [xOffset, setXOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    // Ajuster la vitesse de défilement
    // setXOffset(prev => prev - (delta * 10)); // plus la valeur est petite, plus c'est lent
  });

  return (
    <div className="relative overflow-hidden w-full py-2">
      <motion.div
        ref={containerRef}
        style={{ x: xOffset }}
        className="flex"
        animate={{ x: [0, -2000] }} // Ajuster la distance de défilement pour un effet continu
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 60, // Plus la durée est grande, plus le défilement est lent
        }}
      >
        {/* Répéter les images pour assurer un effet infini */}
        {images.concat(images).map((src, index) => (
          <div key={index} className="flex items-center space-x-2 mx-4 ">
            <img className="h-8 mx-auto max-w-[100px]" src={src} alt={`partner-${index}`} />
            <p>RECYCLABLE</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BienFaitCarousel;
