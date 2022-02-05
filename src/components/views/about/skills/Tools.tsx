import styled from "styled-components";
import Icon from "./Icon";
import {
  SiGit,
  SiNpm,
  SiWebpack,
  SiHeroku,
  SiGithub,
  SiJest,
} from "react-icons/si";

const Tools = () => {
  return (
    <SkillGroup>
      <Row>
        <Icon label="Git">
          <Git />
        </Icon>
        <Icon label="GitHub">
          <Github />
        </Icon>
        <Icon label="npm">
          <Npm />
        </Icon>
      </Row>
      <Row>
        <Icon label="Webpack">
          <Webpack />
        </Icon>
        <Icon label="Heroku">
          <Heroku />
        </Icon>
        <Icon label="Jest">
          <Jest />
        </Icon>
      </Row>
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

const Git = styled(SiGit)`
  color: #f14e32;
  font-size: 48px;
`;

const Github = styled(SiGithub)`
  color: #000;
  font-size: 48px;
`;

const Npm = styled(SiNpm)`
  font-size: 48px;
  color: #cc3534;
`;

const Webpack = styled(SiWebpack)`
  font-size: 48px;
  color: #1c78c0;
`;

const Heroku = styled(SiHeroku)`
  font-size: 48px;
  color: #6762a6;
`;

const Jest = styled(SiJest)`
  font-size: 48px;
  color: #c63f2c;
`;

export default Tools;
