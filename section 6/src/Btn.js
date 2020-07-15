import React,{Component} from 'react';

class Button extends Component{
  render(){
    return(
      <div>
        <button onClick= {function (){
          alert("Youn just Click!");
        }}>Click here</button>
      </div>
    )
  }
}

export default Button;