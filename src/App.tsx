import React from 'react';
import GlobalStyle from './styles/Global';

import SignUp from './Pages/Signup';
import Signin from './Pages/Signin';

const App: React.FC = () => (
  <>
    <Signin />
    <GlobalStyle />
  </>
);

export default App;
