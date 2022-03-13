import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Card>
        <Title>michael desanker</Title>
        <Text>
          I am a self-taught software engineer with a background in chemistry.
          Learn more <StyledLink to="/about">about</StyledLink> me.
        </Text>
        <Text>
          Here you can see some of my latest{" "}
          <StyledLink to="/projects">projects.</StyledLink>
        </Text>
        <Text>
          For questions or hellos, feel free to{" "}
          <StyledLink to="/contact">contact me.</StyledLink>
        </Text>
        {/* <HomeIcons /> */}
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  position: relative;
  width: 80%;
  max-width: 1000px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;

  @media only screen and (max-width: 700px) {
    width: 100%;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  letter-spacing: 0.2rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 700px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 2rem;
  width: 100%;
  letter-spacing: 0.1rem;
  padding-bottom: 2rem;

  @media only screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default Home;
