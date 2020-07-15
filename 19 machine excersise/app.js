
function gene(){
  let guess =[]
  let result=[]
  for(let i=0; i<3; i++){
    guess[i]= Math.floor((Math.random()* 3) + 1)
    result[i] = guess[i]
  }
  
  return result 
} 
class Guess extends React.Component{

  render(){
    let result = gene()
    return(
      <div>
        <span>{result[0]}</span>
        <span>{result[1]}</span>
        <span>{result[2]}</span>
      </div>
    )
    
  }
}






    



