import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetailCard from "core/components/cards/detail_card";
import useGetProducts, { ProductCardProps } from "service/useGetProducts";

const Detail = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductCardProps>(
    {} as ProductCardProps
  );

  const { products, isLoading } = useGetProducts();
  const { id } = useParams();

  const fetchProduct = async () => {
    const fetchedProduct =
      products && products.find((product) => product.id === id);
    fetchedProduct && setSelectedProduct(fetchedProduct);
  };

  useEffect(() => {
    fetchProduct();
  }, [products, id]);

  return (
    <DetailCard
      key={id}
      isLoading={isLoading}
      description={selectedProduct.description}
      info={selectedProduct.brand + " " + selectedProduct.model}
      image={selectedProduct.image}
      price={selectedProduct.price}
      onClick={() => {
        console.log(selectedProduct.id);
      }}
    />
  );
};
export default Detail;
