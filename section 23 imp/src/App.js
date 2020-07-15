import React,{Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import whisky from './img/dog1.jpg';
import tubby from './img/dog3.jpg';
import hasky from './img/dog2.jpg';
import DogList from "./DogList";
import DogDetails from './DogDetails'
class App extends Component {
  static defaultProps = {
    dogs : [
      {
        name : "whisky",
        age : 5,
        src : whisky,
        facts : []
      },
      {
        name : "hasky",
        age : 5,
        src : hasky,
        facts : []
      },
      {
        name : "tubby",
        age : 5,
        src : tubby,
        facts : []
      }
    ]
  }
render(){
  const dogName = (props) => {
    let srchName = props.match.params.name;
    let currentDog = this.props.dogs.filter(st => st.name.toLowerCase() === srchName.toLowerCase());
    console.log(currentDog)
    return (<DogDetails {...props} dog={currentDog[0]}/>);
  }
  return (
    <div className="bg">
      <h1 className="display-1">hi</h1>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">whisky</a>
      </li>
     
    </ul>
  </div>
</nav>
      <Switch>
      <Route exact path="/dog" render={() => <DogList dogs={this.props.dogs} />}/>
      <Route exact path="/dog/:name" render={dogName}/>
      </Switch>
    </div>
    )
  }
}

export default App;
