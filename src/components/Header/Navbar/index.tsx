import React from 'react';
import { Link } from 'react-router-dom';

import logoWhite from 'assets/logo-white.png';

import Search from '../Search';
import UserMenu from '../UserMenu';

import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <Link to="/" className="brand">
          <img
            src={logoWhite}
            alt="Logotipo Delivery Center"
            width={219}
            height={49}
          />
        </Link>
        <Search />
        <UserMenu />
      </div>
    </Container>
  );
};

export default Navbar;
