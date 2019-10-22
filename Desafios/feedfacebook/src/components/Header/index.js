import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <header>
        <img src="https://i.imgur.com/KDIDiSE.png" alt="facebook" />
        <span>
          Profile
          <FaUserCircle color="#FFF" size={18} />
        </span>
      </header>
    </Container>
  );
}
