import React from 'react';
import GlobalStyle from './styles/Global';

import { AuthProvider } from './context/AuthContext';

import SignUp from './Pages/Signup';
import Signin from './Pages/Signin';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider>
    <GlobalStyle />
  </>
);
export default App;
