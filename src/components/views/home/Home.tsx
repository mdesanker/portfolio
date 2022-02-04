import styled from "styled-components";
import Background from "../../../assets/images/home-background.jpg";

const Home = () => {
  return (
    <Wrapper>
      <Card>
        <h1>michael desanker</h1>
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

export default Home;
