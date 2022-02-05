import styled from "styled-components";
import Icon from "./Icon";
import { SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";

const Backend = () => {
  return (
    <SkillGroup>
      <Row>
        <Icon label="Node.JS">
          <Nodedotjs />
        </Icon>
        <Icon label="Express">
          <Express />
        </Icon>
        <Icon label="MongoDB">
          <Mongodb />
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

const Nodedotjs = styled(SiNodedotjs)`
  color: #026e00;
  font-size: 48px;
`;

const Express = styled(SiExpress)`
  font-size: 48px;
  color: #000;
`;

const Mongodb = styled(SiMongodb)`
  font-size: 48px;
  color: #3fa037;
`;

export default Backend;
