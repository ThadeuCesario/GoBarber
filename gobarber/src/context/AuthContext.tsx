/**
 * Veja que para criar uma API de contexto, precisamos importar de dentro do
 * react o createContext.
 * Por exemplo, sabemos que a informação de autenticação do usuário é uma informação,
 * que deve ficar disponível de forma global na aplicação.
 * Quando é uma informação que vou ter vários locais com acesso para ela, faz
 * sentido criarmos um contexto.
 * A autenticação nas aplicações na grande maioria das vezes é um contexto.
 */

import React, { createContext, useCallback } from 'react';

interface AuthContextData {
  name: string;
  signIn(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('signin');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Thadeu', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
