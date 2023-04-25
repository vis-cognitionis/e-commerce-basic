import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./header";

test("Header component renders correctly", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(getByText("Eteration")).toBeInTheDocument();
});

test("Clicking on 'Eteration' redirects to homepage", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const eteLink = getByText("Eteration");
  fireEvent.click(eteLink);
  expect(window.location.pathname).toEqual("/");
});
