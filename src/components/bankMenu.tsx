import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../contexts/modal";
import { bank } from "../core/bank";
import { BankItem } from "./bankItem";

interface BankMenuprops {
  selectItem: (e: React.MouseEvent<HTMLUListElement>) => void;
}

export function BankMenu(props: BankMenuprops) {
  const { selectItem } = props;
  const { closeLocalModal } = useContext(ModalContext);

  function clickHandle(e: React.MouseEvent<HTMLUListElement>) {
    closeLocalModal();
    selectItem(e);
  }

  return (
    <Container>
      {bank.map((item) => {
        return (
          <section key={item.id} id={String(item.id)} onClick={clickHandle}>
            <BankItem logo={item.logo} logoName={item.logoName} />
          </section>
        );
      })}
    </Container>
  );
}

const Container = styled.section`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: stretch;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 100%;
  padding: 2.1rem 3rem 2.8rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem 0.5rem 0 0;
`;
