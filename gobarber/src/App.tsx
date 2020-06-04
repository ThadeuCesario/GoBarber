import React from 'react';

/* Style import */
import GlobalStyle from './styles/global';

/* Components import */
import SignIn from "./Pages/SingIn";

const App: React.FC = () => {
  return(
    <>
      <SignIn />
      <GlobalStyle />
    </>
  );
};

export default App;
