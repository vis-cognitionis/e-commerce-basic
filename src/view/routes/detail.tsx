import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetailCard from "core/components/cards/detail_card";
import useGetProducts from "service/useGetProducts";
import { ProductCardProps } from "service/interface";
import { useCart } from "contexts/cart_context";

const Detail = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductCardProps>(
    {} as ProductCardProps
  );

  const { products, isLoading } = useGetProducts();
  const { addToCart } = useCart();

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct =
        products && products.find((product) => product.id === id);
      fetchedProduct && setSelectedProduct(fetchedProduct);
    };

    fetchProduct();
  }, [products, id, setSelectedProduct]);

  return (
    <DetailCard
      key={id}
      isLoading={isLoading}
      description={selectedProduct.description}
      info={
        selectedProduct.name +
        " " +
        selectedProduct.brand +
        " " +
        selectedProduct.model
      }
      image={selectedProduct.image}
      price={selectedProduct.price}
      onClick={() => {
        addToCart(selectedProduct);
      }}
    />
  );
};
export default Detail;
