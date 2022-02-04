import styled from "styled-components";
import Background from "../../../assets/images/home-background.jpg";

const Home = () => {
  return (
    <Wrapper>
      <h1>Hello, world!</h1>
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

export default Home;
