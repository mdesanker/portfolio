import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <nav>
      <Logo to="/">michaeldesanker</Logo>
      <Container>
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
      </Container>
    </nav>
  );
};

const Container = styled.div`
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

const Logo = styled(Link)`
  position: fixed;
  text-decoration: none;
  color: black;
  font-size: 2rem;
  font-weight: bold;
  padding: 10px;
`;

const NavList = styled.ul`
  display: flex;
  position: fixed;
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
