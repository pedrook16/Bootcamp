import React from 'react';

import { Wrapper, Container, Logo, BasketContainer, ItemCount, Icon } from './styles';

export default function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer>
          <Icon />
          <ItemCount>2</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
