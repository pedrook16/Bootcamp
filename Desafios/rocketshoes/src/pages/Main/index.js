import React, { Component } from 'react';
import { FlatList } from 'react-native';

import tenis from '../../assets/tenis.jpg'

import { Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
  Icon  } from './styles';

export default class Main extends Component {


  handleAddCart = () => {

    const { navigation } = this.props

    navigation.navigate('Cart');
  }
  render() {
  return (
    <Container>
      <Product>
        <ProductImage source={tenis} />
        <ProductTitle>Tenis legal</ProductTitle>
        <ProductPrice>R$ 100,00</ProductPrice>
        <AddButton onPress={this.handleAddCart}>
        <ProductAmount>
          <Icon /> 
          <ProductAmountText>0</ProductAmountText>
        </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    </Container>
  );
  }
}
