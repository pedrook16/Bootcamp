import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import {formatPrice} from '../../util/format';

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

function Cart({
  navigation,
  products,
  total,
  removeFromCart,
  updateAmountRequest,
}) {

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1)
  }

  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1)
    
  }
  
  return (
    <Container>
      <>
        <Products>
          {products.map(product => (
            <Product key={product.id}>
              <ProductInfo>
                <ProductImage source={{uri: product.image}} />
                <ProductDetails>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductPrice>{product.priceFormatted}</ProductPrice>
                </ProductDetails>
                <ProductDelete onPress={() => removeFromCart(product.id)}>
                  <Icon>del</Icon>
                </ProductDelete>
              </ProductInfo>
              <ProductControls>
                <ProductControlButton onPress={() => decrement(product)}>
                  <Icon>-</Icon>
                </ProductControlButton>
                <ProductAmount value={String(product.amount)} />
                <ProductControlButton onPress={() => increment(product)}>
                  <Icon>+</Icon>
                </ProductControlButton>
                <ProductSubtotal>{product.subtotal}</ProductSubtotal>
              </ProductControls>
            </Product>
          ))}
        </Products>
      </>
      <TotalContainer>
        <TotalText>TOTAL</TotalText>
        <TotalAmount>{total}</TotalAmount>
        <Order>
          <OrderText>FINALIZAR PEDIDO</OrderText>
        </Order>
      </TotalContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
    priceFormatted: formatPrice(product.price),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0,
    ),
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
