import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../header";

test("Header component renders correctly", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(getByText("ShopNest")).toBeInTheDocument();
});

test("Clicking on 'ShopNest' redirects to homepage", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const eteLink = getByText("ShopNest");
  fireEvent.click(eteLink);
  expect(window.location.pathname).toEqual("/");
});
