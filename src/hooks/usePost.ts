import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Product } from "redux/slices/types";

type Data = Product;
type Error = any;

const usePost = <T extends Data>(url: string) => {
  const [error, setError] = useState<Error | null>(null);
  const [isPosting, setIsPosting] = useState<boolean>(false);

  const putData = async (data: Partial<Product>) => {
    setIsPosting(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response: AxiosResponse<T> = await axios.put(url, data);
      console.log(response);
    } catch (err) {
      setError(err);
    } finally {
      setIsPosting(false);
    }
  };

  return { error, isPosting, putData };
};

export { usePost };
