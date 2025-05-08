"use client";
import { motion, useAnimationFrame } from "framer-motion";
import React, { useRef, useState } from "react";

const BienFaitCarousel: React.FC = () => {
  const partnerUrl =
    "https://a.storyblok.com/f/153121/x/abe2445031/recycle.svg/m/0x35";
  const images = Array(10).fill(partnerUrl);

  // Ref pour la vitesse de défilement
  const [xOffset, setXOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    // Ajuster la vitesse de défilement
    // setXOffset(prev => prev - (delta * 10)); // plus la valeur est petite, plus c'est lent
  });

  return (
    <div className="relative overflow-hidden w-full py-2 bg-[#40DEFE]">
      <motion.div
        ref={containerRef}
        style={{ x: xOffset }}
        className="flex overflow-x-scroll hideScrollbar "
        // animate={{ x: [0, -1000] }} // Ajuster la distance de défilement pour un effet continu
        // transition={{
        //   repeat: Infinity,
        //   ease: "linear",
        //   duration: 60, // Plus la durée est grande, plus le défilement est lent
        // }}
      >
        {/* Répéter les images pour assurer un effet infini */}
        {[
          {
            label: "RECYCLABLE",
          },
          {
            label: "DERMATOLOGICALLY TESTED",
          },
          {
            label: "DERMATOLOGICALLY TESTED",
          },
          {
            label: "DERMATOLOGICALLY TESTED",
          },
          {
            label: "RECYCLABLE",
          },
          {
            label: "DERMATOLOGICALLY TESTED",
          },
          {
            label: "DERMATOLOGICALLY TESTED",
          },
          {
            label: "DERMATOLOGICALLY TESTED",
          },
        ].map((src, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 mx-4  text-xs"
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <p className="text-nowrap">{src.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BienFaitCarousel;
