import styled from "styled-components";

interface Props {
  children: JSX.Element;
  label: string;
}

const Icon = ({ children, label }: Props) => {
  return (
    <Wrapper>
      {children}
      <Label>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  transition: transform 200ms ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Label = styled.p`
  font-size: 18px;
  height: 22px;
  text-align: center;
`;

export default Icon;
