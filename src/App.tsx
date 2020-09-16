import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'utils/ScrollToTop';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from './hooks/AuthContext';

import Routes from './routes';

import GlobalStyles from './styles/global';

import graphqlClient from './services/graphqlClient';

const App: React.FC = () => (
  <ApolloProvider client={graphqlClient}>
    <AuthProvider>
      <BrowserRouter>
        <Routes />
        <ScrollToTop />
      </BrowserRouter>
      <GlobalStyles />
    </AuthProvider>
  </ApolloProvider>
);

export default App;
