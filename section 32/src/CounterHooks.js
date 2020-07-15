import React,{Component, useState} from 'react';
function CounterHooks(){
  const [count , setCount] = useState(0)
  return(
    <div>
      <h4>Counter is: {count}</h4>
      <button onClick={() => setCount(count + 1)}> Add 1</button>
    </div>
  )
}

export default CounterHooks;