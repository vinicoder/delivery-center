import React from 'react';

import { Container } from './styles';

import Navbar from './Navbar';
import Menu from './Menu';

const Header: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Menu />
    </Container>
  );
};

export default Header;
