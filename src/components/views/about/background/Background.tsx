import styled from "styled-components";
import Section from "../../../elements/Section";
import SectionHeader from "../../../elements/SectionHeader";

const Background = () => {
  return (
    <Section>
      <SectionHeader>About</SectionHeader>
      <P>
        I am a self-taught software engineer with a passion for solving
        problems, building things, and learning. After working as a research
        chemist for several years, I have noticed several similarities between
        the scientific method and software development process.
      </P>
      <P>
        I am constantly seeking opportunities to learn new concepts,
        technologies, and tools that I can use to develop software that solves
        real world problems.
      </P>
    </Section>
  );
};

const P = styled.p`
  text-align: justify;
  line-height: 1.8rem;
  padding-bottom: 1rem;
`;

export default Background;
