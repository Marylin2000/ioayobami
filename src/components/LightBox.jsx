import React from 'react';

const Lightbox = ({ image, alt, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative">
        <img src={image} alt={alt} className="w-[50vw] h-[75vh] rounded-lg" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
