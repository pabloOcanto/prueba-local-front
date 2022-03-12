import React from 'react';
import Routes from './routes/Route'
import AuthProvider from './context/AuthProvider';


const App =()=> {
  return (
    <AuthProvider>
    <Routes/>
    </AuthProvider>
  );
}

export default App;
