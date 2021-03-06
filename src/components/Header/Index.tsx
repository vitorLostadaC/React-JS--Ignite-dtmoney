import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export default function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="vt money" />
        <button type="button" onClick={props.onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
