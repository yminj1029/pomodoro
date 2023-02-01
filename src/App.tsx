import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Timer from './components/Timer';
import TotalStatus from './components/TotalStatus';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Timer></Timer>
      <TotalStatus></TotalStatus>
    </div>
  );
}

export default App;
