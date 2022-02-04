import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../utils/TestUtils";
import Nav from "../components/elements/nav/Nav";

test("renders home component", () => {
  render(<Nav />);
  const aboutLink = screen.getByText(/about/i);
  const projectsLink = screen.getByText(/projects/i);
  const contactLink = screen.getByText(/contact/i);

  expect(aboutLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
