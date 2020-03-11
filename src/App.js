import React from 'react';
import './App.css';
import Routes from './Routes';
import Nav from './Nav';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="jumbotron">
          <Header />
          <Nav />
        </div>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
