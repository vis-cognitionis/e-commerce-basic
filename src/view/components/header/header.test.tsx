import { fireEvent, render } from "@testing-library/react";
import Header from "./header";

test("Header component renders correctly", () => {
  const { getByText } = render(<Header />);
  expect(getByText("Eteration")).toBeInTheDocument();
});

test("Clicking on 'Eteration' redirects to homepage", () => {
  const { getByText } = render(<Header />);
  const eteLink = getByText("Eteration");
  fireEvent.click(eteLink);
  expect(window.location.pathname).toEqual("/");
});
