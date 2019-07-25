import React from 'react';
import './App.css';

import { AuthProvider } from './Auth';
import AppContainer from './AppContainer';

const App = () => {
  return (
	  <AuthProvider>
		<AppContainer></AppContainer>
	</AuthProvider>
  );
}	

export default App;
