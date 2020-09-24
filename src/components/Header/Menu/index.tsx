import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <ul>
          <li>
            <NavLink to="/" exact>
              Visão Geral
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders">Pedidos</NavLink>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Menu;
