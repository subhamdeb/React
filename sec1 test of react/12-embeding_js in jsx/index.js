function add(a,b){
  return a+b;
}

class Hello extends React.Component{
  render(){
    return (
    <div>
      <h1>addition is {add(3,4)}</h1>
      <h1>Hello There 2 </h1>
    </div>);
  }
}

ReactDOM.render(<Hello/>, document.getElementById("firstcom"))