import React from 'react';

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="relative min-w-[360px] aspect-video rounded overflow-hidden bg-[#030b17] mr-2 transition-transform duration-500 hover:scale-110 ">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="pt-20 opacity-0 w-full h-full absolute top-0 left-0 z-10 bg-gradient-to-b from-transparent to-[#192133] p-2 transition-opacity duration-500 hover:opacity-100">
        <h2 className="text-white font-semibold">{title}</h2>
        <h6 className="text-gray-300 text-sm mt-2">{description}</h6>
      </div>
    </div>
  );
};

export default Card;