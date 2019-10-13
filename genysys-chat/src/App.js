import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Papersheet from './Papersheet'
import Store from './Store'
function App() {
  return (
    <div className="App">    
    <Store>
    <Papersheet />
    </Store>
    </div>
  );
}

export default App;
