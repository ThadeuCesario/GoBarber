/**
 * Veja que para criar uma API de contexto, precisamos importar de dentro do
 * react o createContext.
 * Por exemplo, sabemos que a informação de autenticação do usuário é uma informação,
 * que deve ficar disponível de forma global na aplicação.
 * Quando é uma informação que vou ter vários locais com acesso para ela, faz
 * sentido criarmos um contexto.
 * A autenticação nas aplicações na grande maioria das vezes é um contexto.
 */

import React, { createContext } from 'react';

interface AuthContextData {
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: 'Thadeu' }}>
      {children}
    </AuthContext.Provider>
  );
};
