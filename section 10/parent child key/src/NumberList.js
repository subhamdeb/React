import React,{Component} from 'react';
import Numbers from './Numbers'

class NumberList extends Component{

  constructor(props){
    super(props);
    this.state ={
      nums :[1,2,3,4,5]
    }
  }
remove(numm) {
  
  this.setState(st => ({
    nums : st.nums.filter(nn => nn !== numm )
  }))
}

  render(){
    let nums = this.state.nums.map(n => (<Numbers value={n} remove={() => this.remove(n)}/>));
    return(
      <div>
        {nums}
      </div>
    )
  }
}

export default NumberList;
