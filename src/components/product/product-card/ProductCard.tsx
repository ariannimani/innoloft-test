import React, { FC, ReactNode } from "react";
import PatentCard from "../patent-card/PatentCard";
import DeleteCard from "../delete-card/DeleteCard";

interface ProductCardProps {
  image: string;
  title: string;
  edit?: boolean;
  children: ReactNode;
}
const ProductCard: FC<ProductCardProps> = ({
  image,
  title,
  children,
  edit = false,
}) => {
  return (
    <div className="w-8/12">
      <div className="flex justify-between">
        <PatentCard />
        {edit && <DeleteCard />}
      </div>
      <img src={image} alt={title} className="rounded-tl-md w-full" />
      <div className="p-10">
        <h2 className="font-bold">{title} </h2>
        {children}
      </div>
    </div>
  );
};

export default ProductCard;
