import styled from "styled-components";
import Section from "../../../elements/Section";
import SectionHeader from "../../../elements/SectionHeader";

const Background = () => {
  return (
    <Section>
      <SectionHeader>About</SectionHeader>
      <P>
        My name is Michael, and I have a passion for solving problems, building
        things, and learning. After working as a research chemist for several
        years, I have realized that I have a love for programming. The
        similarities between the scientific method and software development make
        programming feel like a new tool I can use to solve problems around me.
      </P>
      <P>
        I am constantly seeking opportunities to learn new concepts,
        technologies, and tools that I can use to solve real world problems.
      </P>
    </Section>
  );
};

const Header = styled.h1``;

const P = styled.p``;

export default Background;
