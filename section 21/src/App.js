import React,{Component} from 'react';
import './App.css';
import { Route, Switch, NavLink} from 'react-router-dom';
import VendingMachine from './VendingMachine';
class App extends Component {
 
 
 
 
render(){
  return (
    <div className="bg">
    <VendingMachine />
      <Switch>
        {/* <Route path="/" render={}/> */}
      </Switch> 
    </div>  
    )
  }
}

export default App;
