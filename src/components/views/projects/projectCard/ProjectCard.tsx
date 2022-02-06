import styled from "styled-components";
import StackIcon from "./StackIcon";

const ProjectCard = () => {
  return (
    <Card>
      <Img />
      <Title>Errand Tracker</Title>
      <StackContainer>
        <StackIcon text="React" />
        <StackIcon text="Redux" />
        <StackIcon text="Node" />
        <StackIcon text="Express" />
        <StackIcon text="MongoDB" />
      </StackContainer>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sint
        blanditiis facere vitae quo aliquam quibusdam veritatis sunt magnam.
        Quam soluta modi repellat itaque dolore harum incidunt sapiente ut
        blanditiis?
      </Description>
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

const Img = styled.div`
  width: 100%;
  height: 250px;
  background-color: lightgray;
  margin-bottom: 1rem;
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
