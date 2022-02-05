import { Fragment } from "react";
import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";

const Nav = () => {
  return (
    <Fragment>
      <VerticalNav />
      <HorizontalNav />
    </Fragment>
  );
};

export default Nav;
