import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../theme/Theme";
import { BrowserRouter as Router } from "react-router-dom";

interface AppProps {
  children: ReactElement;
}

const AllProviders = ({ children }: AppProps) => {
  return (
    <Router>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </Router>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
