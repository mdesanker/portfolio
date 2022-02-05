import { Fragment } from "react";
import styled from "styled-components";
import Nav from "../../elements/nav/Nav";
import Background from "./background/Background";
import Skills from "./skills/Skills";

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

const Wrapper = styled.main`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default About;
