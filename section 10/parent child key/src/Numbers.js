import React,{Component} from 'react';

class Numbers extends Component{
  render(){
    return(
      <div>
        <ul>
          <li>
            {this.props.value} <button onClick={this.props.remove}>Click here</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Numbers;