import { useNavigate, useLocation } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { TiTick } from "react-icons/ti";

import { usePost } from "hooks/usePost";
import { processProductDetails } from "utils";

import { editProduct } from "redux/slices/productSlice";

import {
  ProductDetails,
  ProductUserDetails,
  ProductCard,
} from "components/product";
import { Button, Path, RichText, VideoCard, Input } from "components";
import { EditInfo } from "components/product/product-details/components";

import { ALLOWED_KEYS } from "pages/product/Product";

const EditProduct = () => {
  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { error, isPosting, putData } = usePost(
    `${process.env.REACT_APP_DOMAIN}/product/6781/`
  );
  const product = location.state;

  const userFullName = `${product.user.firstName} ${product.user.lastName}`;
  const address = `${product.company.address.street}, ${product.company.address.city.name} ${product.company.address.zipCode}, ${product.company.address.country.name}`;
  const elements = processProductDetails(product, ALLOWED_KEYS);

  const onCancelClickHandler = () => {
    navigate("/product", { state: product });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log({ data });
    putData(data).then(() => {
      dispatch(editProduct({ id: product.id, ...data }));
      onCancelClickHandler();
    });
  };

  const checkKeyDown = (e: any) => {
    if (e.key === "Enter") e.preventDefault();
  };

  return (
    <div>
      {isPosting && (
        <div className="bg-yellow-500 text-white p-4">Please wait...</div>
      )}
      {error && (
        <div className="bg-red-500 text-white p-4">
          Error updating data. Please try again later.
        </div>
      )}
      <div className="p-4 w-full md:p-0 md:max-w-4xl md:mx-auto">
        <div className="flex justify-between items-center">
          <Path />
          <Button
            type="button"
            onClick={onCancelClickHandler}
            className="bg-indigo-900 text-white hover:bg-indigo-700 md:ml-4"
          >
            View Offer
          </Button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={(e) => checkKeyDown(e)}
        >
          <div className="flex flex-col md:flex-row justify-between border-solid border-2 border-gray-200 rounded-md bg-white mt-4">
            <ProductCard
              id={product.id}
              image={product.picture}
              title={product.name}
              edit={true}
            >
              <Input
                type="text"
                placeholder="Add title..."
                defaultValue={product.name}
                className="w-full h-10 mt-4 mb-4"
                register={register}
                name="name"
              />
              <RichText
                defaultValue={product.description}
                name="description"
                setValue={setValue}
              />
              <div className="flex gap-2 justify-end p-2">
                <Button
                  type="button"
                  onClick={onCancelClickHandler}
                  className="hover:border hover:border-indigo-900"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex gap-1 items-center p-2 bg-indigo-900 text-white  hover:bg-indigo-700"
                >
                  <TiTick />
                  Save
                </Button>
              </div>
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
            <Input
              type="text"
              name="video"
              placeholder="Add video link here..."
              className="w-full h-10 mt-4"
              defaultValue={product.video}
              register={register}
            />
          </VideoCard>
          <ProductDetails>
            <EditInfo elements={elements} setValue={setValue} />
          </ProductDetails>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
