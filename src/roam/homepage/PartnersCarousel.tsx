"use client"
import { motion, useAnimationFrame } from 'framer-motion';
import React, { useRef, useState } from 'react';

const PartnersCarousel: React.FC = () => {
  const partnerUrl = "https://a.storyblok.com/f/153121/272x71/32626f4b5c/home_womenshealth.png/m/0x35";
  const images = Array(10).fill(0).map((v,i) => i%2 == 0 ? "https://a.storyblok.com/f/153121/272x70/19221d8766/home_marieclaire.png/m/0x35" : partnerUrl );
  
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
          <div key={index} className="flex-none mx-4 ">
            <img className="h-10 mx-auto max-w-[100px]" src={src} alt={`partner-${index}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PartnersCarousel;
