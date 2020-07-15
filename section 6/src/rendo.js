import React,{Component} from 'react';

class Rendo extends Component{
  constructor(props){
      super(props);
      this.state = {
        score_count : 0,
        checking : 15
      }
      this.count_down();
      this.ccc()
  }
  count_down(){
    setInterval(() => {
     let counts = Math.floor(Math.random() * this.props.max_num);
      this.setState({score_count : counts});
    },200 )
  }

  ccc(){
    this.setState({checking : 100})
  }
  
  render(){
        return(
          <div><h1>guess between {this.props.max_num} and the guessed number is {this.state.score_count}</h1>
          <h1>{this.state.checking}</h1>
          </div>
        )
  }
}


export default Rendo