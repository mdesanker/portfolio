import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../utils/TestUtils";
import Home from "../components/views/home/Home";

test("renders home component", () => {
  render(<Home />);
  const titleElement = screen.getByText(/michael desanker/i);
  const textElement = screen.getByText(/self-taught/i);
  const aboutLink = screen.getByText(/about/i);
  const projectsLink = screen.getByText(/projects/i);
  const contactLink = screen.getByText(/contact/i);

  expect(titleElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
