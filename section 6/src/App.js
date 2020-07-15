import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./game";
import Game2 from "./Game2";
import Rendo from './rendo';
import Button from "./Btn";
import BrokenClick from './brokenClick';
import BrokenClick2 from './brokenClick2';
import Exer from './exerrand';
function App() {
  return (
    <div className="App">
      {/* <Game />
      <Game2 />
      <h1>This is from rendo!!</h1>
      <Rendo  max_num = {6}/>
      <Button />
      <BrokenClick />
      <BrokenClick2 /> */}
      <Exer />
    </div>
  );
}

export default App;
