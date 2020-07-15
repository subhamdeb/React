import React,{Component} from 'react';
import './App.css';
import {Route , Switch} from "react-router-dom"
import Palette from "./Palette";
import seedColor from './seedColors';
import PaletteList from './PaletteList';
import {generatePalette} from "./ColorHelper";
class App extends Component {
  constructor(props){
    super(props);
    this.findPalette = this.findPalette.bind(this);
  }
  findPalette(ee){
    return seedColor.find((clr) => clr.id === ee )
    
  };
render(){
 console.log(generatePalette(seedColor[4]));
  

  return (
      <Switch>
      <Route exact path="/" render={(rProps) => <PaletteList allPalette={seedColor} {...rProps}/>}/>
      <Route exact path="/palette/:id" render={ (rProps) => <Palette palette={generatePalette(this.findPalette(rProps.match.params.id))}/>} />
      </Switch>

      //  {/* <div className="bg">
      //   <div><Palette palette={generatePalette(seedColor[1])} {...seedColor[4]} /></div>
      // </div> */}
  );
}
};
export default App;
