import React from 'react';
import './App.css';
// import Ball from "./Ball"
import Lottery from './Lottery';

function App() {
  return (
    <div>
  
     <Lottery />
     <Lottery title='Mini Daily' maxBalls={4} maxNum={10}/>

     
    </div>

  );
}

export default App;
