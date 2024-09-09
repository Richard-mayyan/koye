"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Collection } from '@/lib/shopify/types';

const ScrollBasedComponents = ({UP,DOWN} : {UP:any , DOWN : any}) => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>("up");

  // Fonction pour détecter la direction du scroll
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      if (scrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (scrollY < lastScrollY) {
        setScrollDirection('up');
      }
      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  return (
    <div className="relative w-full bg-yellow-200 ">
      {/* Composant affiché lors du scroll vers le bas */}
      {scrollDirection === 'down' && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed top-0 left-0 w-full flex justify-center z-40   "
        >
          {UP}
        </motion.div>
      )}

      {scrollDirection === 'up' && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          style={{
            transform : "translateX(50%)"
          }}
          className="fixed top-10 left-0 right-0 mx-auto   w-full flex justify-center z-40 lg:w-[80%]  "
        >
          {DOWN}
        </motion.div>
      )}
    </div>
  );
};

export default ScrollBasedComponents;
