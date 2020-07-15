import React,{Component} from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'; //NavLink is another method
import Food from './Food';
import MealDrink from './mealdrink';
import FoodSearch from './FoodSearch';
import NavBar from './NavBar'
class App extends Component {
render(){
  return (
    <div className="bg">
    <NavBar />
    <Switch>
      {/* <Route path="/fruit/:name" render={(routeProps) => <Food name={routeProps.match.params.name} />}></Route> */}
      <Route exact path="/" render={(rProps) => <FoodSearch {...rProps} />} />
      <Route path="/fruit/banana" render={() => <Food name="banana" />}></Route>
      <Route path="/fruit/:name" render={(rProps) => <Food {...rProps} />}></Route>
      <Route exact path="/flower/:name" component={Food} />
      <Route exact path="/meal/:mealname/drink/:drinkname" component={MealDrink} />
      <Route render={() =><h1>not found</h1>} />
      </Switch>
    </div>  
    )
  }
}

export default App;
