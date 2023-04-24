import { FC, ReactNode } from "react";
import { PatentCard, DeleteCard } from "components/product";
import { useDispatch } from "react-redux";
import { deleteProduct } from "redux/slices/productSlice";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  edit?: boolean;
  children: ReactNode;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  image,
  title,
  children,
  edit = false,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteClickHandler = () => {
    dispatch(deleteProduct(id));
    navigate("/");
  };

  return (
    <div className="w-full md:w-8/12 relative">
      <div className="absolute top-0 left-0">
        <PatentCard />
      </div>
      <div className="absolute top-0 right-0">
        {edit && <DeleteCard onDelete={onDeleteClickHandler} />}
      </div>
      <div className="w-full">
        <img
          src={image}
          alt={title}
          className="rounded-tl-md w-full h-full object-cover"
        />
      </div>
      <div className="p-10">{children}</div>
    </div>
  );
};

export default ProductCard;
