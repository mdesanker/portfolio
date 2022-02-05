import { Fragment } from "react";
import styled from "styled-components";
import Nav from "../../elements/nav/Nav";
import Frontend from "./Frontend";

const About = () => {
  return (
    <Fragment>
      <Nav />
      <Wrapper>
        <Section>
          <Title>About</Title>
          <Text>
            My name is Michael, and I have a passion for solving problems,
            building things, and learning. After working as a research chemist
            for several years, I have realized that I have a love for
            programming. The similarities between the scientific method and
            software development make programming feel like a new tool I can use
            to solve problems around me.
          </Text>
          <Text>
            I am constantly seeking opportunities to learn new concepts,
            technologies, and tools that I can use to solve real world problems.
          </Text>
        </Section>
        <Section>
          <Title>Skills</Title>
          <SkillSection>
            <SkillHeader>Frontend</SkillHeader>
            <Frontend />
          </SkillSection>
          <SkillSection>
            <SkillHeader>Backend</SkillHeader>
          </SkillSection>
          <SkillSection>
            <SkillHeader>Tools</SkillHeader>
          </SkillSection>
        </Section>
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
`;

const SkillHeader = styled.p`
  font-weight: bold;
`;

const SkillIcons = styled.div``;

export default About;
