import styled from "styled-components";
import { IProject } from "../../../../utils/projectList";
import ProjectLink from "./ProjectLink";
import StackIcon from "./StackIcon";
import { v4 as uuidv4 } from "uuid";

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
          return <StackIcon key={uuidv4()} text={tool} />;
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
  width: 90%;
  border: 1px solid lightgray;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  background-color: lightgray;
  margin-bottom: 1rem;
`;

const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  text-align: center;
`;

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
