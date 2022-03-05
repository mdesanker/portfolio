import styled from "styled-components";
import { IProject } from "../../../../utils/projectList";
import ProjectLink from "./ProjectLink";
import StackIcon from "./StackIcon";

interface Props {
  project: IProject;
}

const ProjectCard = ({ project }: Props) => {
  const { title, image, tools, description, links } = project;

  const projectImage = require(`../../../../assets/images/${image}`);

  return (
    <Card>
      <Img src={projectImage} alt={title} />
      <TitleContainer>
        <Title>{title}</Title>
        <ProjectLink live={links.live} github={links.github} />
      </TitleContainer>
      <StackContainer>
        {tools.map((tool: string) => {
          return <StackIcon text={tool} />;
        })}
      </StackContainer>
      <Description>{description}</Description>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: thin solid #999;
  margin: 0 auto 3rem;

  @media only screen and (min-width: 700px) {
    width: 70%;
  }
`;

const Img = styled.img`
  width: auto;
  height: 250px;
  background-color: lightgray;
  margin-bottom: 1rem;
`;

const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2``;

const StackContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 8px 0;
`;

const Description = styled.p`
  text-align: justify;
  line-height: 1.5;
`;

export default ProjectCard;
