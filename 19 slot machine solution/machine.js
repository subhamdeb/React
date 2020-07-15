
class Machine extends React.Component{
 render(){
   const {s1,s2,s3} = this.props;
   const winner = (s1 === s2) && (s2 === s3);
   let result = winner ? "winner!" : "looser!";
   let color={color:"black"}
   if (result === "winner!"){
     color = {color:"green"}

   }
   return(
    <div>
      <p>this is from machine js</p>
      <p>{s1} {s2} {s3}</p>
      <p style={color}>{winner ? "Winner!" : "Looser!" }</p>
    </div>
   )
 }
} 