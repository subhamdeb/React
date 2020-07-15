import React,{Component} from 'react';

class BrokenClick extends Component{
  constructor(props){
    super(props);
    this.state = {
      click : false,
    }
    this.clickChange = this.clickChange.bind(this) //bind use for add clickChalkenge method in construstor..
  }
  clickChange(){
    this.setState({click : true})
  }
  myfun = function(){
    console.log("this is my own code that help me learn more");
  }
  render(){
    return(
      <div>
        <h1>{this.state.click ? "Clicked!" : "Not Clicked"}</h1>
        <button onClick={this.myfun}>Click me!</button>
      
      </div>
    );
  }
}

export default BrokenClick;