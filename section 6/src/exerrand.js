import React,{Component} from 'react';

class Exer extends Component{
  constructor(props){
    super(props);
    this.state = {
      rando : 0
    }

    this.changing = this.changing.bind(this)
  }

  changing = () =>{
    let chng = Math.floor(Math.random() * 10)
    this.setState({rando : chng})
  }

  
  render(){
    return(
      <div>
        <h1>the random number is : {this.state.rando}</h1>
        
        {this.state.rando ===7 ? "you win" : <button onClick={this.changing}>Click</button>}
      </div>
    )
  }
}


export default Exer;