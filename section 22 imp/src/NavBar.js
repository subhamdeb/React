import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
class NavBar extends Component {
  
    constructor(props){
      super(props);

      this.handleLogin = this.handleLogin.bind(this);
    }
handleLogin(){
    this.props.history.push("/fruit/popcorn")
}
  render(){
    return (
      <div>
        <button onClick={this.handleLogin}>click</button>
        <button onClick={this.props.history.goBack}>go back</button>
      </div>
    )}
  
    
}

export default withRouter(NavBar);