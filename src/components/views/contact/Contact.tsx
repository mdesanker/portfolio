import styled from "styled-components";
import { Fragment } from "react";
import Nav from "../../elements/nav/Nav";

const Contact = () => {
  return (
    <Fragment>
      <Nav />
      <Wrapper>
        <h1>Contact</h1>
      </Wrapper>
    </Fragment>
  );
};

const Wrapper = styled.main`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Contact;
