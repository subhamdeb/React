import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class FoodSearch extends Component{
  constructor(props){
    super(props);
    this.state = {
      query : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.history.push(`/fruit/${this.state.query}`);

  }
  handleChange(evt){
      this.setState({
        query : evt.target.value
      })
  }
  render(){
    return(
      <div>
      <h5>Search for Food</h5>
      <input type="text" placeholder="typre search test" onChange={this.handleChange} value={this.state.query}/>
      <Link to={`/fruit/${this.state.query}`}>Go</Link>
      <button onClick={this.handleClick} >add to database</button>
      </div>
    )
  }
}
export default FoodSearch;