import React from 'react';
import './App.css';

import { AuthProvider } from './Auth';
import AppContainer from './AppContainer';

const App = () => {
  return (
	  <AuthProvider>
		<h1>Agile tools</h1>
		<AppContainer></AppContainer>
	</AuthProvider>
  );
}	

export default App;
