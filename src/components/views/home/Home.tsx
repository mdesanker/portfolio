import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from "../../../assets/images/home-background.jpg";

const Home = () => {
  return (
    <Wrapper>
      <Card>
        <Title>michael desanker</Title>
        <Text>
          I am a self-taught software engineer with a background in chemistry.
          Learn more <StyledLink to="#">about</StyledLink> me.
        </Text>
        <Text>
          Here you can see some of my latest{" "}
          <StyledLink to="#">projects.</StyledLink>
        </Text>
        <Text>
          For questions or hellos, feel free to{" "}
          <StyledLink to="#">contact me.</StyledLink>
        </Text>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background: url(${Background});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 80%;
  max-width: 900px;
  height: 80vh;
  background-color: #0a9396;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  letter-spacing: 0.2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  width: 100%;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding-top: 1rem;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 0.1rem;
  color: #b5ebe4;
`;

export default Home;
