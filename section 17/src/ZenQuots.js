import React,{Component} from 'react';
import axios from "axios"
class ZenQuots extends Component{
  constructor(props){
    super(props);
    this.state ={
      quote : undefined
    }
  }
  
  componentDidMount(){
    axios.get("https://api.github.com/zen").then(response => {
      console.log(response)
      this.setState({
        quote : response.data
      })
    })

}

  render(){
    return(
      <div>
        <h1>allways remember...</h1>
        <h1>{this.state.quote}</h1>
        {this.fdfdfdf}
      </div>
    )
  }
}

export default ZenQuots;