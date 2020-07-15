class App extends React.Component{
  render(){
    return (
      <Hello to="subham " times={4}/>
      
    )
  }
}

ReactDOM.render(<App/>,document.getElementById("root"))