import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="vt money" />
        <button type="button">Nova trnasação</button>
      </Content>
    </Container>
  );
}
