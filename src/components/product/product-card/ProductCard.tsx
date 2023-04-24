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
    <div className="w-8/12">
      <div className="flex justify-between">
        <PatentCard />
        {edit && <DeleteCard onDelete={onDeleteClickHandler} />}
      </div>
      <div className="w-full h-80">
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
