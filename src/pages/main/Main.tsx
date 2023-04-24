import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectProducts, setProducts } from "redux/slices/productSlice";
import { Card } from "components";
import { Link } from "react-router-dom";
import { useAppSelector } from "redux/hooks";
import { useFetch } from "hooks/useFetch";
import { Product } from "redux/slices/types";

interface ProductDataProps {
  isLoading: boolean;
  error: Error | null;
  data: Product | null;
}

const Main = () => {
  const { data, error, isLoading }: ProductDataProps = useFetch(
    `${process.env.REACT_APP_DOMAIN}/product/6781/`
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (data) dispatch(setProducts([data]));
  }, [data, dispatch]);

  const { products } = useAppSelector(selectProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="w-full grid grid-cols-3 gap-6 p-6 ">
      {products.length > 0 &&
        products.map((product) => (
          <Link to={"/product"} state={{ id: product.id }} key={product.id}>
            <Card
              id={product.id}
              image={product.picture}
              title={product.name}
            />
          </Link>
        ))}
    </div>
  );
};

export default Main;
