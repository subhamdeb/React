import React,{Component} from 'react';
import './food.css'
import {Redirect} from 'react-router-dom'
class Food extends Component{
  render(){
    let name = this.props.match.params.name
    let url = `https://source.unsplash.com/1600x900/?${name}`
    console.log(this.props)
    return(
      <div>
        {/\d/.test(name) ? (<Redirect to="/"/>) : 
      (
        <img className="img-size" alt="animal-pic" src={url} />
      )}
      </div>
    )
  }
}

export default Food;