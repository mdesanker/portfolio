import styled from "styled-components";
import { Fragment, useState } from "react";
import Nav from "../../elements/nav/Nav";
import Wrapper from "../../elements/Wrapper";
import SectionHeader from "../../elements/SectionHeader";
import Section from "../../elements/Section";

const Contact = () => {
  const [email, setEmail] = useState("// mdesanker@gmail.com");

  const mouseOverHandler = () => {
    setEmail("Copy to clipboard");
  };

  const mouseOutHandler = () => {
    setEmail("// mdesanker@gmail.com");
  };

  const mouseDownHandler = () => {
    navigator.clipboard.writeText("mdesanker@gmail.com");
    setEmail("Email copied");
  };

  const mouseUpHandler = () => {
    setEmail("Copy to clipboard");
  };

  return (
    <Fragment>
      <Nav />
      <Wrapper>
        <Section>
          <SectionHeader>Contact</SectionHeader>
          <LinkContainer>
            <Email
              onMouseOver={mouseOverHandler}
              onMouseOut={mouseOutHandler}
              onMouseDown={mouseDownHandler}
              onMouseUp={mouseUpHandler}
              onTouchStart={mouseDownHandler}
              onTouchEnd={mouseUpHandler}
            >
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
        </Section>
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
  width: 350px;
  text-align: center;

  &:hover {
    color: gray;
  }
`;

const StyledLink = styled.a`
  font-size: 1.5rem;
  color: black;
  text-decoration: none;

  &:hover {
    color: gray;
  }
`;

export default Contact;
