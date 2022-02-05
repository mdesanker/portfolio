import styled from "styled-components";

interface Props {
  children: JSX.Element;
  label: string;
}

const Icon = ({ children, label }: Props) => {
  return (
    <Wrapper>
      <Logo>{children}</Logo>
      <Label>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.p`
  font-size: 18px;
  height: 22px;
  text-align: center;
`;

export default Icon;
