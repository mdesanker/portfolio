import styled from "styled-components";

interface Props {
  children: string;
}

const SectionHeader = ({ children }: Props) => {
  return <Header>{children}</Header>;
};

const Header = styled.h1`
  text-transform: uppercase;
  padding-bottom: 1rem;
`;

export default SectionHeader;
