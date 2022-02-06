import styled from "styled-components";

interface Props {
  github: string;
  live: string;
}

const ProjectLink = ({ github, live }: Props) => {
  return (
    <LinkWrapper>
      <Container href={live}>
        <i className="fas fa-external-link-alt" />
      </Container>
      <Container href={github}>
        <i className="fab fa-github" />
      </Container>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
