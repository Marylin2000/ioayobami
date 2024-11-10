import React, { useState } from 'react';
import { portfolioItems } from '../constants/images';
import Lightbox from './LightBox';

const categories = ["AWARDS", "EMBEDDED SYSTEM", "RENEWABLE ENERGY", "PROGRAMMING", "OTHERS"];

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState("AWARDS");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems = portfolioItems.filter(item => item.category === activeTab);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Tab Headers */}
      <div className="flex justify-center space-x-4 border-b-2 border-gray-200 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`text-lg font-semibold py-2 px-4 ${
              activeTab === category
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div
            key={item.title}
            className="border rounded-lg shadow-lg p-4 cursor-pointer"
            onClick={() => setLightboxImage({ image: item.image, alt: item.imageAlt })}
          >
            <img
              src={item.image}
              alt={item.imageAlt}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mt-4">{item.title}</h3>
            <p className="text-gray-500">{item.category}</p>
          </div>
        ))}
      </div>

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
