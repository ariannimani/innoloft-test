import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useFetch } from "hooks/useFetch";
import { useAppSelector } from "redux/hooks";

import { selectProducts, setProducts } from "redux/slices/productSlice";

import { Card } from "components";
import { Product } from "global";

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

  let numCols = 3;
  if (products.length <= 2) {
    numCols = 2;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div
      className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${numCols} gap-6 p-6`}
    >
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
