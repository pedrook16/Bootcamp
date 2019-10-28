import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
            <th />
            </tr>
        </thead>
            <tbody>
              <tr>
                <td>
                  <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-actual-masculino/20/D22-1319-120/D22-1319-120_zoom1.jpg" alt="product"/>
                </td>
                <td>
                  <strong>Tênis muito massa</strong>
                  <span>R$129,90</span>
                </td>
                <td>
                  <div>
                    <button type="button">
                      < MdRemoveCircleOutline size={20} color="#7059c1" />
                    </button>
                    <input type="number" readOnly value={2}/>
                    <button type="button">
                      < MdAddCircleOutline size={20} color="#7059c1" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>R$258,80</strong>
                </td>
                <td>
                  <button type="button">
                    < MdDelete size={20} color="#7059c1" />
                  </button>
                </td>
              </tr>
            </tbody>

      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>Total</span>
          <strong>R$1920,20</strong>
        </Total>
      </footer>
    </Container>
  );
}
