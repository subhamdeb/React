import React, {useState, useEffect} from 'react';
import axios from 'axios';
function SWMovies(){
  const [num, setNum] = useState(1);
  const [movie, setMovie] = useState("");
  useEffect(()=>{
    async function getData(){
      const response = await axios.get(`https://swapi.co/api/films/${num}`);
      console.log(response)
      setMovie(response.data.title)
    }
    getData();
    
  }, [num]) //if this [num] change the useEffect will  be trigered
  return(
    <div>
      <h1>Pick a Movie</h1>
      <h4>you select: {num} that movie name {movie}</h4>
      <select onChange={(e)=> {setNum(e.target.value)}}>
        <option value='1'>1</option>
        <option value={2}>2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div>
  )
}

export default SWMovies;