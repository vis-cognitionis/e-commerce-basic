import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ProductCardProps {
  brand: string;
  createdAt: string;
  description: string;
  id: string;
  image: string;
  model: string;
  name: string;
  price: string;
}

const useGetProducts = () => {
  const { data, isLoading, isError, error } = useQuery<ProductCardProps[]>(
    ["products"],
    async () => {
      const { data } = await axios.get(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      );
      return data;
    }
  );

  return { products: data, isLoading, isError, error };
};

export default useGetProducts;
