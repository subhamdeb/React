import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class DogDetails extends Component {
  render() {
    let {dog}= this.props
    console.log(dog);
    return (
      <div className="container">
        {dog.name}
        <div className="row justify-content-center">
          <div className="col-11 col-md-6">
          <img className="col-12 dogl-img" src={dog.src}/>
          <Link to="/dog">Go Back</Link>
          </div>
        </div>
      </div>
    )
  }
}
