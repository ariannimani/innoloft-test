import parse from "html-react-parser";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

import { useProduct } from "hooks";
import { processProductDetails } from "utils";

import {
  ProductDetails,
  ProductUserDetails,
  ProductCard,
  NoProduct,
} from "components/product";
import { Button, Path, VideoCard } from "components";
import { InfoCard } from "components/product/product-details/components";

export const ALLOWED_KEYS = [
  "trl",
  "businessModels",
  "categories",
  "investmentEffort",
  "type",
];

const Product = () => {
  const navigate = useNavigate();
  const { product } = useProduct();

  if (!product) {
    return <NoProduct />;
  }

  const elements = processProductDetails(product, ALLOWED_KEYS);

  const onClickHandler = () => {
    navigate("/product/edit", { state: product });
  };

  return (
    <div className="p-4 w-full md:p-0 md:max-w-4xl md:mx-auto">
      <div className="flex justify-between items-center">
        <Path />
        <Button
          type="button"
          onClick={onClickHandler}
          className="bg-indigo-900 text-white hover:bg-indigo-700 md:ml-4"
        >
          Edit
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-between border-solid border-2 border-gray-200 rounded-md bg-white mt-4">
        <ProductCard>
          <h2 className="font-bold">{product.name} </h2>
          <div className="mt-4">{parse(product.description)}</div>
        </ProductCard>
        <ProductUserDetails />
      </div>
      <VideoCard>
        <ReactPlayer
          url={product.video}
          width="100%"
          config={{
            youtube: {
              playerVars: {
                origin: process.env.REACT_APP_PLAYER_ORIGIN,
              },
            },
          }}
        />
      </VideoCard>
      <ProductDetails>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {elements.map((element) => (
            <InfoCard
              key={element.name}
              title={element.name}
              items={element.items}
            />
          ))}
        </div>
      </ProductDetails>
    </div>
  );
};

export default Product;
