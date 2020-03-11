import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import Nav from './Nav';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;