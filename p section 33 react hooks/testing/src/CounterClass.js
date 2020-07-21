import React,{Component, useState} from 'react'


const CounterClass =()=>{
  const [count,setCounter] = useState(0)
  return(
    <>
      <h5>counter : {count}</h5>
      <button onClick={()=> setCounter(count+1)}>ADD +1</button>
    </>
  )
}


//  class CounterClass extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       count : 10
//     }
//   }
//   render(){
    
//     return(
//       <>
//       <h3>Hiii</h3>
//       <h5>Counter</h5><h5>{this.state.count}</h5>
//       <button onClick={() => this.setState({count : this.state.count + 1})}>ADD +1</button>
//       </>
//     )
//   }
// }

export default CounterClass