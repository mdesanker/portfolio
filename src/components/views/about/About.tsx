import { Fragment } from "react";
import Nav from "../../elements/nav/Nav";
import Background from "./background/Background";
import Skills from "./skills/Skills";
import Wrapper from "../../elements/Wrapper";

const About = () => {
  return (
    <Fragment>
      <Nav />
      <Wrapper>
        <Background />
        <Skills />
      </Wrapper>
    </Fragment>
  );
};

export default About;
