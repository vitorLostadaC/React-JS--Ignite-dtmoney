import { useEffect } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

export default function TransactionTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Dsenvolvimento de WebSite</td>
            <td className="deposit">R$12000</td>
            <td>Programação</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Dsenvolvimento de WebSite</td>
            <td className="deposit">R$12000</td>
            <td>Programação</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Dsenvolvimento de WebSite</td>
            <td className="deposit">R$12000</td>
            <td>Programação</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Dsenvolvimento de WebSite</td>
            <td className="withdraw">-R$12000</td>
            <td>Programação</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
