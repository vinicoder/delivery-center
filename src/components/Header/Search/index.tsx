import React, { useState, FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  function handleSubmitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Container
      isFocused={isFocused}
      className="search"
      onSubmit={handleSubmitSearch}
    >
      <input
        type="text"
        placeholder="Pesquisar pedidos por referência, consumidor, loja..."
        onChange={({ target }) => setSearchQuery(target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={searchQuery}
      />
      <button type="submit">
        <FiSearch />
      </button>
    </Container>
  );
};

export default Search;
