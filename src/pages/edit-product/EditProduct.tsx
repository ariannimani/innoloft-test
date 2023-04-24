import { useNavigate, useLocation } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import {
  ProductDetails,
  ProductUserDetails,
  ProductCard,
} from "components/product";
import { Button, Path, RichText, VideoCard, Input } from "components";
import { useDispatch } from "react-redux";
import { editProduct } from "redux/slices/productSlice";
import { usePost } from "hooks/usePost";
import { EditInfo } from "components/product/product-details/components";
import { processProductDetails } from "utils";
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
      <div className="flex justify-between">
        <Path />
        <Button type="button" onClick={onCancelClickHandler}>
          View
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between border-solid border-2 border-gray-200 rounded-md w-full bg-white">
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
              <Button type="button" onClick={onCancelClickHandler}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
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
  );
};

export default EditProduct;
