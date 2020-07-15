
class App extends React.Component{
  render(){
    return (
    <div className="machine">
    <input type="text" className="styleb"></input>
      <h1>This is slot Machine!</h1>
      <Machine s1="🍇" s2="🍈" s3="🍌"/>
      <h1>This is slot Machine!</h1>
      <Machine s1="🍈" s2="🍈" s3="🍈"/>
    </div>);
  }
}
ReactDOM.render(<App/>, document.getElementById("root"))