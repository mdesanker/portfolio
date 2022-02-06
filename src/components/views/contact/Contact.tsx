import styled from "styled-components";
import { Fragment, useState } from "react";
import Nav from "../../elements/nav/Nav";
import Wrapper from "../../elements/Wrapper";

const Contact = () => {
  const [email, setEmail] = useState("// mdesanker@gmail.com");

  const mouseOverHandler = () => {
    setEmail("Copy to clipboard");
  };

  const mouseOutHandler = () => {
    setEmail("// mdesanker@gmail.com");
  };

  return (
    <Fragment>
      <Nav />
      <Wrapper>
        <h1>Contact</h1>

        <LinkContainer>
          <Email onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
            {email}
          </Email>
          <StyledLink
            href="https://github.com/mdesanker"
            target="_blank"
            rel="noopener noreferrer"
          >
            &#47;&#47; GitHub
          </StyledLink>
          <StyledLink
            href="https://www.linkedin.com/in/michaeldesanker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &#47;&#47; LinkedIn
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
  gap: 40px;
  padding-top: 2rem;
`;

const Email = styled.p`
  font-size: 1.5rem;
  cursor: pointer;
  // transition: color 100ms ease;

  &:hover {
    color: gray;
  }
`;

const StyledLink = styled.a`
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
  // transition: color 100ms ease;

  &:hover {
    color: gray;
  }
`;

export default Contact;
