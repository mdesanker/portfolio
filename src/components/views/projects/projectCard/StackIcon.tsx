import styled from "styled-components";

interface Props {
  text: string;
}

const StackIcon = ({ text }: Props) => {
  return (
    <Wrapper>
      <p>{text}</p>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 4px 8px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #999;
  border-radius: 16px;
  margin: 5px;
  cursor: default;
`;

export default StackIcon;
