import styled from "styled-components";
import { NavLink } from "react-router-dom";

const VerticalNav = () => {
  return (
    <NavWrapper>
      <LogoBackground>
        <Logo to="/">michaeldesanker</Logo>
      </LogoBackground>
      <Container>
        <NavList>
          <NavItem>
            <StyledLink to="/about">_ about</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/projects">_ projects</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/contact">_ contact</StyledLink>
          </NavItem>
        </NavList>
      </Container>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  width: 100%;
  position: fixed;

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

const Container = styled.div`
  position: fixed;
  width: 100vh;
  height: 45px;
  top: 0;
  left: -100vh;
  transform: rotate(-90deg);
  transform-origin: top right;
  padding-right: 100px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LogoBackground = styled.div`
  position: fixed;
  height: 60px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;
`;

const Logo = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 2rem;
  font-weight: bold;
  padding-left: 20px;
`;

const NavList = styled.ul`
  display: flex;
  position: fixed;
  gap: 30px;
`;

const NavItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(NavLink)`
  width: 100%;
  display: block;
  height: 45px;
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

export default VerticalNav;
