import styled from "styled-components";
import Section from "../../../elements/Section";
import SectionHeader from "../../../elements/SectionHeader";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";

const Skills = () => {
  return (
    <Section>
      <SectionHeader>Skills and Tools</SectionHeader>
      <SkillSection>
        <SkillHeader>Frontend</SkillHeader>
        <Frontend />
      </SkillSection>
      <SkillSection>
        <SkillHeader>Backend</SkillHeader>
        <Backend />
      </SkillSection>
      <SkillSection>
        <SkillHeader>Tools</SkillHeader>
        <Tools />
      </SkillSection>
    </Section>
  );
};

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

const SkillHeader = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  padding-bottom: 1.5rem;
`;

export default Skills;
