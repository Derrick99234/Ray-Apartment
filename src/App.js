import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import InstallButton from './InstallButton';
import BaseRouter from './router/index'

function App() {
  return (
    <div className="text-red-500">
      <BaseRouter />
      <InstallButton />
    </div>
  );
}

export default App;
