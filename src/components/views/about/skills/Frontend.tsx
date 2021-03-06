import styled from "styled-components";
import Icon from "./Icon";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

const Frontend = () => {
  return (
    <SkillGroup>
      <Row>
        <Icon label="JavaScript">
          <Javascript />
        </Icon>
        <Icon label="HTML5">
          <Html5 />
        </Icon>
        <Icon label="CSS3">
          <Css3 />
        </Icon>
      </Row>
      <Row>
        <Icon label="TypeScript">
          <Typescript />
        </Icon>
        <Icon label="React">
          <React />
        </Icon>
        <Icon label="Redux">
          <Redux />
        </Icon>
      </Row>
      <LastRow>
        <Icon label="Tailwind">
          <Tailwind />
        </Icon>
      </LastRow>
    </SkillGroup>
  );
};

const SkillGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
`;

const LastRow = styled(Row)`
  justify-content: center;
`;

const Javascript = styled(SiJavascript)`
  color: rgb(255, 214, 0);
  background-color: black;
  font-size: 48px;
`;

const Html5 = styled(SiHtml5)`
  font-size: 48px;
  color: rgb(230, 81, 0);
`;

const Css3 = styled(SiCss3)`
  font-size: 48px;
  color: rgb(2, 119, 189);
`;

const Typescript = styled(SiTypescript)`
  font-size: 48px;
  color: rgb(25, 118, 210);
`;

const React = styled(SiReact)`
  font-size: 48px;
  color: rgb(71, 136, 199);
`;

const Redux = styled(SiRedux)`
  font-size: 48px;
  color: rgb(126, 87, 194);
`;

const Tailwind = styled(SiTailwindcss)`
  font-size: 48px;
  color: #38bdf8;
`;

export default Frontend;
