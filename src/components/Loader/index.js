import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

import { Container } from './styles';

function Loader() {
  return (
    <Container>
      <BiLoaderAlt title="Carregando..." />
      <span>Carregando...</span>
    </Container>
  );
}

export default Loader;
