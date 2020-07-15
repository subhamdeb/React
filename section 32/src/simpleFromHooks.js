import React, {useState} from 'react'
import useFromState from './hooks/useFormState';
import useFormState from './hooks/useFormState';
function Hooksfrom(){
  const [value,setValue] = useState("Enter Name Hare")

  const [text, setText, resetText] = useFormState("");

  return(
    <div>
     {value}
      <input value={value} onChange={(e) => setValue(e.target.value) }
      />
      {text}
      <input value={text} onChange={setText} />
      <button onClick={resetText}></button>
    </div>
  )
}

export default Hooksfrom;