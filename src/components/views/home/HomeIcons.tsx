import styled from "styled-components";

const HomeIcons = () => {
  return (
    <Wrapper>
      <NavIcon
        href="https://github.com/mdesanker"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" />
      </NavIcon>
      <NavIcon
        href="https://www.linkedin.com/in/michaeldesanker/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin" />
      </NavIcon>
      <EmailBtn>
        <i className="far fa-envelope" />
      </EmailBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const NavIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  height: 36px;
  width: 36px;
  font-size: 24px;
  transition: font-size 200ms;

  &:hover {
    font-size: 30px;
  }
`;

const EmailBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  height: 36px;
  width: 36px;
  font-size: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: font-size 200ms;

  &:hover {
    font-size: 30px;
  }
`;

export default HomeIcons;
