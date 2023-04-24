import React, { FC } from "react";

interface CardProps {
  title: string;
  image: string;
  id: number;
}
const Card: FC<CardProps> = ({ title, image, id }) => {
  return (
    <div className="border-solid border-2 border-gray-200 rounded-md bg-white h-80 cursor-pointer hover:opacity-70">
      <img src={image} alt={title} />
      <div className="w-fit m-auto font-bold -mt-8 ">{title}</div>
    </div>
  );
};

export default Card;
