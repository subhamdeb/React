import React,{Component} from "react";
import './App.css';
import CounterClass from './CounterClass';
import CounterHooks from "./CounterHooks";
import Toggler from './Toggler';
import SimpleForm from './SimpleForm'
import Hooksfrom from './simpleFromHooks';
import Clicker from './Clicker';
import SWMovies from './SWMovies';
class App extends Component {

render(){
 
  

  return (
    <div>
    <div>hi</div>
    <CounterClass />
    <CounterHooks />
    <Toggler />
    <SimpleForm />
    <Hooksfrom />
    <Clicker />
    <SWMovies />
    </div> 
  );
}
};
export default App;
