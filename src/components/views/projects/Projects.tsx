import { Fragment } from "react";
import styled from "styled-components";
import Nav from "../../elements/nav/Nav";
import Wrapper from "../../elements/Wrapper";
import Section from "../../elements/Section";
import SectionHeader from "../../elements/SectionHeader";
import ProjectCard from "./projectCard/ProjectCard";

const Projects = () => {
  return (
    <Fragment>
      <Nav />
      <Wrapper>
        <Section>
          <SectionHeader>Projects</SectionHeader>
          <ProjectCard />
          <ProjectCard />
        </Section>
      </Wrapper>
    </Fragment>
  );
};

export default Projects;
