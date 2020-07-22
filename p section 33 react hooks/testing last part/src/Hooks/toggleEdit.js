import {useState} from "react"

export default initialValue => {
  const [text, setText] = useState(initialValue)
  const handleChange = e => {
    setText(e.target.value)
  }
  const reset = () => {
    setText("")
  }
  return [text,handleChange, reset]
}

