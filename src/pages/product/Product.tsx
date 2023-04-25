import parse from "html-react-parser";
import ReactPlayer from "react-player";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectProducts } from "redux/slices/productSlice";
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
  const location = useLocation();
  const productId = location.state.id;
  const { products } = useSelector(selectProducts);
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <NoProduct />;
  }

  const userFullName = `${product.user.firstName} ${product.user.lastName}`;
  const address = `${product.company.address.street}, ${product.company.address.city.name} ${product.company.address.zipCode}, ${product.company.address.country.name}`;
  const elements = processProductDetails(product, ALLOWED_KEYS);
  const coordinates = {
    lat: product.company.address.latitude,
    lng: product.company.address.longitude,
  };

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
        <ProductCard
          id={product.id}
          image={product.picture}
          title={product.name}
        >
          <h2 className="font-bold">{product.name} </h2>
          <div className="mt-4">{parse(product.description)}</div>
        </ProductCard>
        <ProductUserDetails
          companyName={product.company.name}
          companyLogo={product.company.logo}
          name={userFullName}
          profileImage={product.user.profilePicture}
          address={address}
          coordinates={coordinates}
        />
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
