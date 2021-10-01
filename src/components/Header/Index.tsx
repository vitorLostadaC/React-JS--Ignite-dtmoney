import { useState } from "react";
import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import Modal from "react-modal";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export default function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="vt money" />
        <button type="button" onClick={props.onOpenNewTransactionModal}>
          Nova trnasação
        </button>
      </Content>
    </Container>
  );
}
