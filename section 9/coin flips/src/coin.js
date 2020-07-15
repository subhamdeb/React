import React,{Component} from 'react';
import './coin.css'

class Coin extends Component{

  constructor(props){
    super(props);
    this.state={
      head : 0,
      tail : 0,
      class : ''
    }
    this.flipIt = this.flipIt.bind(this);
  }
  flipIt(){
    let chose = Math.floor(Math.random() * 2);
    if(chose === 1){
      this.setState({head : this.state.head+1,class :'img_head' })
      
    }
    else(
      this.setState({tail : this.state.tail+1,class :'img_tail'})
    )
  }
    render(){
      return(
        <section className="section">
          <h3>head coin points: {this.state.head}</h3>
          <h3>tail coin points: {this.state.tail}</h3>
          <div className={this.state.class}></div>
          <button onClick={this.flipIt}>Flip It</button>
        </section>
      )
    }
}

export default Coin;