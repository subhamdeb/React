import React, {Component, useState} from 'react';
import useToggle from './hooks/useToggle'
function Toggler(){
  const [smile, isSmile] = useToggle(false)
  const [heartBroken, isHeartBroken] = useToggle(false)
  return( 
    <div>
      
      <button onClick={() => isSmile(!smile)}>{smile? "😊": "😓"}</button>
      <button onClick={() => isHeartBroken(!heartBroken)}>{!heartBroken ? "❤️" : "💔"}</button>
    </div>
  )
}
export default Toggler;