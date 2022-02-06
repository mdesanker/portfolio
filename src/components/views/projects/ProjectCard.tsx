import styled from "styled-components";

const ProjectCard = () => {
  return (
    <Card>
      <Img />
      <Title>Errand Tracker</Title>
      <div>Stack</div>
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
  margin: 0 auto;

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

const Description = styled.p`
  text-align: justify;
`;

export default ProjectCard;
