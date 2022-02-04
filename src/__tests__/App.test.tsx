import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../utils/TestUtils";
import App from "../App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, world/i);
  expect(linkElement).toBeInTheDocument();
});
