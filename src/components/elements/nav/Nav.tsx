import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Wrapper>
      <Container>
        <h1>michaeldesanker</h1>
        <NavList>
          <NavItem>
            <StyledLink to="#">_ about</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="#">_ projects</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="#">_ contact</StyledLink>
          </NavItem>
        </NavList>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const NavList = styled.ul``;

const NavItem = styled.li`
  list-style: none;
  padding: 5px 0;
`;

const StyledLink = styled(NavLink)`
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
