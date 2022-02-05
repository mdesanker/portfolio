import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Wrapper>
      {/* <Container> */}
      {/* <Logo to="/">michaeldesanker</Logo>
        <LogoSmall to="/">md</LogoSmall> */}
      <NavList>
        <NavItem>
          <StyledLink to="/about">_ about</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="#">_ projects</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="#">_ contact</StyledLink>
        </NavItem>
      </NavList>
      {/* </Container> */}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  width: 100vh;
  height: 60px;
  top: 0;
  left: -100vh;
  transform: rotate(-90deg);
  transform-origin: top right;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 2rem;
  font-weight: bold;

  @media only screen and (max-width: 550px) {
    display: none;
  }
`;

const LogoSmall = styled(Logo)`
  display: none;

  @media only screen and (max-width: 550px) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  position: fixed;
  // transform: rotate(-90deg) translate(-50%, -50%);
  gap: 20px;
`;

const NavItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(NavLink)`
  width: 100%;
  display: block;
  padding: 10px 0;
  text-decoration: none;
  color: black;
  font-size: 1rem;
  transition: color 200ms;
  text-transform: uppercase;

  &:hover {
    color: gray;
  }
`;

export default Nav;
