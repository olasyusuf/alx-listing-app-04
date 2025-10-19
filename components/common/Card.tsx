import React from 'react';
import Image from 'next/image';
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ imageUrl, title, location, price, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-48">
        <Image 
          src={imageUrl} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-lg font-bold text-gray-900 mt-2">${price} / night</p>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;