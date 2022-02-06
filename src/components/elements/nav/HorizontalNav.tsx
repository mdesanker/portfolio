import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HorizontalNav = () => {
  return (
    <NavWrapper>
      <Logo to="/">michaeldesanker</Logo>
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
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  position: fixed;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  height: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  background-color: rgba(255, 255, 255, 0.9);

  @media only screen and (min-width: 1000px) {
    display: flex;
  }
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

export default HorizontalNav;
