import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
function App() {
  return (
    <Header onReset={() => {console.log('reset clicked')}} />
    // add list and jar here
  );
}

export default App;
