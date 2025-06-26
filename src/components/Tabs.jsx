'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems } from '../constants/images';
import Lightbox from './LightBox';

// Filter out "Kids Can Code" items and get unique categories
const filteredPortfolio = portfolioItems.filter(item => !item.title.includes("KIDS CAN CODE"));
const categories = [...new Set(filteredPortfolio.map(item => item.category))];

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredItems = portfolioItems.filter(
    item => item.category === activeTab && !item.title.includes("KIDS CAN CODE")
  );

  return (
    <div  id="portfolio" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      {/* Improved Tab Navigation */}
      <div className="mb-8 md:mb-12 relative">
        {/* Scrollable tab container for mobile */}
        <div className="relative overflow-x-auto pb-2 md:overflow-visible">
          <div className={`flex ${isMobile ? 'w-max space-x-2' : 'flex-wrap justify-center gap-2'}`}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                onMouseEnter={() => !isMobile && setHoveredTab(category)}
                onMouseLeave={() => !isMobile && setHoveredTab(null)}
                className={`relative px-4 py-2 md:px-6 md:py-3 text-sm font-medium rounded-full overflow-hidden transition-colors duration-300 flex-shrink-0 ${
                  activeTab === category
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {/* Background Layers */}
                {!isMobile && hoveredTab === category && (
                  <motion.div
                    layoutId="hoverBg"
                    className="absolute inset-0 bg-gray-100 rounded-full z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                {activeTab === category && (
                  <motion.div
                    layoutId="activeBg"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full z-0 shadow-md"
                  />
                )}

                {/* Button Text */}
                <span className="relative z-10 whitespace-nowrap">
                  {category.split(' ').map(word => (
                    <React.Fragment key={word}>
                      {word}
                      <br className="md:hidden" />
                    </React.Fragment>
                  ))}
                </span>
              </button>
            ))}
          </div>
          
          {/* Mobile indicator */}
          {isMobile && (
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              initial={{ width: 0, x: 0 }}
              animate={{
                width: '100px', // Adjust based on your tab width
                x: categories.indexOf(activeTab) * 112 // Adjust based on your tab width + gap
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </div>
      </div>

      {/* Tab Content with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ y: isMobile ? 0 : -5, boxShadow: isMobile ? "none" : "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl overflow-hidden shadow-sm md:shadow-md border border-gray-100 cursor-pointer"
              onClick={() => setLightboxImage({ image: item.image, alt: item.imageAlt })}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: isMobile ? 1 : 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-sm md:text-base">{item.category}</span>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-bold text-gray-800 text-sm md:text-base line-clamp-2">{item.title}</h3>
                <div className="mt-2 md:mt-3 flex justify-between items-center">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {item.category}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 text-xs md:text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          image={lightboxImage.image}
          alt={lightboxImage.alt}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </div>
  );
};

export default PortfolioTabs;