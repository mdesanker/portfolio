import { Fragment } from "react";
import Nav from "../../elements/nav/Nav";
import Wrapper from "../../elements/Wrapper";
import Section from "../../elements/Section";
import SectionHeader from "../../elements/SectionHeader";
import ProjectCard from "./projectCard/ProjectCard";
import { projectList } from "../../../utils/projectList";

const Projects = () => {
  return (
    <Fragment>
      <Nav />
      <Wrapper>
        <Section>
          <SectionHeader>Projects</SectionHeader>
          {projectList.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
          {/* <ProjectCard />
          <ProjectCard /> */}
        </Section>
      </Wrapper>
    </Fragment>
  );
};

export default Projects;
