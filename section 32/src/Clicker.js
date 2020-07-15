import React, { Component, useState, useEffect } from 'react'

function Clicker(){
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title = `You clicked ${count}`
  })
  return(
    <div>
     counter is:  {count};
     <button onClick={()=> setCount(count + 1)}>Click {count}</button>
    </div>
  )
}

export default Clicker;