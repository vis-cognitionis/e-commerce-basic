import React from "react";
import ContainerCard from "core/components/cards/container_card";

const Cart = () => {
  return (
    <ContainerCard
      sx={{ width: "213px", height: "auto" }}
      isFilter={false}
      children={<p>cart area</p>}
    />
  );
};
export default Cart;
