class App extends React.Component{
  render(){
    return(
      <div>
        <Friend name="subham" hobies={["make money", "make gf" , "travel"]}/>
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById("root"))