import styled from "styled-components";

interface Props {
  github: string;
  live: string;
}

const ProjectLink = ({ github, live }: Props) => {
  return (
    <LinkWrapper>
      <Container href={live} target="_blank" rel="noopener noreferrer">
        <i className="fas fa-external-link-alt" />
      </Container>
      <Container href={github} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github" />
      </Container>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  position: absolute;
  right: 0;
  transform: translateX(100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Container = styled.a`
  height: 24px;
  width: 24px;
  font-size: 24px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;

  &:hover {
    color: gray;
  }
`;

export default ProjectLink;
