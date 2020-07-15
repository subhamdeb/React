import React,{Component} from 'react';

class MealDrink extends Component{
  render(){
    let mealname = this.props.match.params.mealname;
    let drinkname =this.props.match.params.drinkname;
    let meal = `https://source.unsplash.com/1600x900/?${mealname}`;
    let drink = `https://source.unsplash.com/1600x900/?${drinkname}`;
    return(
      <div>
        <h1>i love {mealname} and {drinkname}</h1>
        <img src={drink} alt="meal" />
        <img src={meal} alt="drink"/>
      </div>
    )
  }
}
export default MealDrink;