import React, { FC } from "react";
import InfoCard from "./components/info-card/InfoCard";

interface ProductDetailsProps {
  elements: any[];
}
const ProductDetails: FC<ProductDetailsProps> = ({ elements }) => {
  return (
    <div className="border-solid border-2 border-gray-200 rounded-md w-full bg-white mt-6 p-6">
      <h1 className="font-bold">Offer Details</h1>
      <InfoCard title={"Technology"} elements={elements} />
    </div>
  );
};

export default ProductDetails;
