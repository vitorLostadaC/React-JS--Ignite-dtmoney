import Sumary from "../sumary";
import TransactionTable from "../TransactionTable";
import { Container } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <Sumary />
      <TransactionTable />
    </Container>
  );
}
