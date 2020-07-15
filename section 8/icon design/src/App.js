import React from 'react';
import './App.css';
import Score from './score';
import IconList from "./Iconlist"

function App() {
  return (
    <div className="App">
     <Score />
     <i className="fas fa-dice-one"></i>
     <IconList />
    </div>

  );
}

export default App;
