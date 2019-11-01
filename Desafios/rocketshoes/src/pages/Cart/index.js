import React from 'react';

import tenis from '../../assets/tenis.jpg';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  Icon,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Products>
        <Product>
          <ProductInfo>
            <ProductImage source={tenis} />
            <ProductDetails>
              <ProductTitle>tenis legal</ProductTitle>
              <ProductPrice>R$100,00</ProductPrice>
            </ProductDetails>
            <ProductDelete>
              <Icon>del</Icon>
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton>
              <Icon>-</Icon>
            </ProductControlButton>
            <ProductAmount value="3" />
            <ProductControlButton>
              <Icon>+</Icon>
            </ProductControlButton>
            <ProductSubtotal>R$100,00</ProductSubtotal>
          </ProductControls>
        </Product>
      </Products>
      <TotalContainer>
        <TotalText>TOTAL</TotalText>
        <TotalAmount>R$100,00</TotalAmount>
        <Order>
          <OrderText>FINALIZAR PEDIDO</OrderText>
        </Order>
      </TotalContainer>
    </Container>
  );
}
