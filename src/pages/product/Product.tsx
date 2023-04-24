import parse from "html-react-parser";
import ReactPlayer from "react-player";
import { useNavigate, useLocation } from "react-router-dom";

import {
  ProductDetails,
  ProductUserDetails,
  ProductCard,
  NoProduct,
} from "components/product";
import { Button, Path, VideoCard } from "components";
import { InfoCard } from "components/product/product-details/components";
import { processProductDetails } from "utils";
import { useSelector } from "react-redux";
import { selectProducts } from "redux/slices/productSlice";

export const ALLOWED_KEYS = [
  "businessModels",
  "trl",
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

  const onClickHandler = () => {
    navigate("/product/edit", { state: product });
  };

  return (
    <div>
      <div className="flex justify-between">
        <Path />
        <Button type="button" onClick={onClickHandler}>
          Edit
        </Button>
      </div>
      <div className="flex justify-between border-solid border-2 border-gray-200 rounded-md w-full bg-white">
        <ProductCard
          id={product.id}
          image={product.picture}
          title={product.name}
        >
          <h2 className="font-bold">{product.name} </h2>
          <p className="mt-4">{parse(product.description)}</p>
        </ProductCard>
        <ProductUserDetails
          companyName={product.company.name}
          companyLogo={product.company.logo}
          name={userFullName}
          profileImage={product.user.profilePicture}
          address={address}
        />
      </div>
      <VideoCard>
        <ReactPlayer url={product.video} className="m-auto" />
      </VideoCard>
      <ProductDetails>
        <div className="grid grid-cols-2 gap-4 whitespace-nowrap mt-4">
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
