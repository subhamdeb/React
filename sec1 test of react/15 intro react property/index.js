class App extends React.Component{
  render(){
    return(
      <div>
        <Hello to="Koyel" from="Subham" times={100}/>
        <Hello />
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById("firstcom"))