import { createBrowserRouter } from "react-router-dom";
import { EditProduct, Main, Product } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product/edit",
    element: <EditProduct />,
  },
]);
