import styled from "styled-components";

interface BankItemProps {
  logo: () => JSX.Element;
  logoName: string;
}

export function Bank(props: BankItemProps) {
  const { logo, logoName } = props;

  return (
    <Container>
      {logo()}
      <LogoName>{logoName}</LogoName>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1.3rem 1.8rem;
`;

const LogoName = styled.strong`
  margin-top: 1rem;
`;
