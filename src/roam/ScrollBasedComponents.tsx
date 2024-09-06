import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollBasedComponents = ({UP,DOWN} : {UP:any , DOWN : any}) => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>("down");

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
    <div className="relative w-full bg-red-800">
      {/* Composant affiché lors du scroll vers le bas */}
      {scrollDirection === 'down' && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed top-0 left-0 w-full flex justify-center"
        >
          {/* <p className='bg-green-400 w-full'>kjbkj</p> */}
          {UP}
        
        </motion.div>
      )}
      {scrollDirection === 'up' && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-10 left-0 w-full flex justify-center"
        >
          {DOWN}
        </motion.div>
      )}
    </div>
  );
};

export default ScrollBasedComponents;
