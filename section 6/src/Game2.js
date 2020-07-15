import React,{Component} from 'react';


class Game2 extends Component{
  
    state = {
      score : 10,
    }

  render(){
    return(
      <div>
        <h1>this is from game2 ....the score is: {this.state.score}</h1>
      </div>
    );
  }
}

export default Game2;
