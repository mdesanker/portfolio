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
  padding-top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70%;
  max-width: 800px;
`;

const Title = styled.h1`
  text-transform: uppercase;
`;

const Text = styled.p`
  text-align: justify;
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

const SkillHeader = styled.p`
  font-weight: bold;
  padding-bottom: 1rem;
`;

export default About;
