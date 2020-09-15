import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'utils/ScrollToTop';
import { AuthProvider } from './hooks/AuthContext';

import Routes from './routes';

import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes />
      <ScrollToTop />
    </BrowserRouter>
    <GlobalStyles />
  </AuthProvider>
);

export default App;
