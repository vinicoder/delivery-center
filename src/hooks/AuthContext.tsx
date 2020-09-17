import React, { createContext, useCallback, useState, useContext } from 'react';

interface SignInCredentials {
  email: string;
  password: string;
}

interface User {
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(credentials: SignInCredentials): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const userData = localStorage.getItem('@DeliveryCenter:user');

    if (userData) {
      return JSON.parse(userData);
    }

    return null;
  });

  const signIn = useCallback(({ email }) => {
    setUser({ email });

    localStorage.setItem('@DeliveryCenter:user', JSON.stringify({ email }));
  }, []);

  function signOut() {
    localStorage.removeItem('@DeliveryCenter:user');

    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
