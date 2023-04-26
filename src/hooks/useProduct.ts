import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectProductById } from "redux/slices/productSlice";

const useProduct = () => {
  const location = useLocation();
  const productId = location.state.id;
  const product = useSelector(selectProductById(productId));

  return { product };
};

export default useProduct;
