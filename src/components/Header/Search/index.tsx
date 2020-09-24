import React, { useState, FormEvent, useEffect, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useHistory, useLocation } from 'react-router-dom';
import { getSearchParam } from 'utils';

import { Container } from './styles';

const Search: React.FC = () => {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  const { pathname } = useLocation();

  function handleSubmitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = searchQuery.trim();

    history.push(`/orders?s=${query}`);
  }

  const loadSearchQuery = useCallback(() => {
    if (pathname === '/orders') setSearchQuery(getSearchParam('s'));
  }, [pathname]);

  useEffect(() => {
    loadSearchQuery();
  }, [loadSearchQuery]);

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
