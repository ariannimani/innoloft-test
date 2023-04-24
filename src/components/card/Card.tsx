import React, { FC } from "react";

interface CardProps {
  title: string;
  image: string;
  id: number;
}

const Card: FC<CardProps> = ({ title, image, id }) => {
  return (
    <div className="border-solid border-2 border-gray-200 rounded-md bg-white h-80 cursor-pointer hover:opacity-70 sm:h-60 relative">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 text-center mb-4">
        <p className="font-bold">{title}</p>
      </div>
    </div>
  );
};

export default Card;
