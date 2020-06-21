import React from 'react';

/* Style import */
import GlobalStyle from './styles/global';

/* Components import */
import SignIn from './Pages/SingIn';
import SignUp from './Pages/SingUp';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
