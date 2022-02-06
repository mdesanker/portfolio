import styled from "styled-components";
import { Fragment } from "react";
import Nav from "../../elements/nav/Nav";
import Wrapper from "../../elements/Wrapper";

const Contact = () => {
  return (
    <Fragment>
      <Nav />
      <Wrapper>
        <h1>Contact</h1>

        <LinkContainer>
          <Email>&#47;&#47; Email</Email>
          <StyledLink
            href="https://www.linkedin.com/in/michaeldesanker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &#47;&#47; LinkedIn
          </StyledLink>
          <StyledLink
            href="https://github.com/mdesanker"
            target="_blank"
            rel="noopener noreferrer"
          >
            &#47;&#47; GitHub
          </StyledLink>
        </LinkContainer>
      </Wrapper>
    </Fragment>
  );
};

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 2rem;
`;

const Email = styled.p`
  font-size: 1.5rem;
`;

const StyledLink = styled.a`
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
`;

export default Contact;
