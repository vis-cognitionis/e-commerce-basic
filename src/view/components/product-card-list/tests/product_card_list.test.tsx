import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ProductCardList from "../product_card_list";

jest.mock("service/useGetProducts", () => {
  return () => ({
    products: [
      {
        id: "1",
        name: "Product 1",
        brand: "Brand 1",
        model: "Model 1",
        description: "Description 1",
        price: "100",
        image: "http://example.com/image1.jpg",
        createdAt: "2022-04-25T15:30:00.000Z",
      },
      {
        id: "2",
        name: "Product 2",
        brand: "Brand 2",
        model: "Model 2",
        description: "Description 2",
        price: "200",
        image: "http://example.com/image2.jpg",
        createdAt: "2022-04-25T16:00:00.000Z",
      },
    ],
    isLoading: false,
    isError: false,
    error: null,
  });
});

test("ProductCardList component renders correctly", () => {
  const { getByText } = render(
    <MemoryRouter>
      <ProductCardList />
    </MemoryRouter>
  );
  expect(getByText("Brand 1 Model 1")).toBeInTheDocument();
});
