import React , {Component} from 'react';
import BetterNumbers from './BetterNumbers';

class BetterNumberList extends Component{
 
  constructor(props){
    super(props);
    this.state ={
      nums :[1,2,3,4,5,2,6,8,4,3]
    }
    this.remove = this.remove.bind(this)
  }
remove(numm, key) {
  console.log(key)
  this.setState(st => ({
    nums : st.nums.filter(nn => nn !== numm )
  }))
}

  render(){
    let nums = this.state.nums.map((n , idx) => (<BetterNumbers value={n} key={idx} remove={this.remove} />));
    return(
      <div>
      <h1>better number list</h1>
        {nums}
      </div>
    )
  }
}

export default BetterNumberList;