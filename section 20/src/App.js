import React,{Component} from 'react';
import './App.css';
import Contact from './contact'
import About from './about';
import Dog from './dog';
import { Route, Switch, NavLink} from 'react-router-dom';
class App extends Component {
 
 
 constructor(props){
   super(props);
   this.state={
     fetch : ""
   }

 }
 
 
  render(){
      return (
       <div className="bg">
       <nav>
         <NavLink exact activeClassName="active-link" to="/">About</NavLink>
         <NavLink exact activeClassName="active-link" to="/contact">contact</NavLink>
         <NavLink exact activeClassName="active-link" to="/dog">dog</NavLink>
       </nav>
       <Switch>
       <Route exact path="/" component={About}/>
       <Route exact path="/dog" component={()=><Dog name="kitti"/>}/>
       <Route exact path="/contact" render={()=><Contact name="subham"/>}/>
       </Switch>
   </div>  )
  }
}

export default App;
