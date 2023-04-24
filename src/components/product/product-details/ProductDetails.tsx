import React, { FC, ReactNode } from "react";

interface ProductDetailsProps {
  children: ReactNode;
}
const ProductDetails: FC<ProductDetailsProps> = ({ children }) => {
  return (
    <div className="border-solid border-2 border-gray-200 rounded-md w-full bg-white mt-6 p-6">
      <h1 className="font-bold">Offer Details</h1>
      {children}
    </div>
  );
};

export default ProductDetails;
