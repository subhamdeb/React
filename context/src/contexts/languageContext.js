import React,{Component,createContext} from 'react'

const LanguageContext = createContext()

class LanguageProvider extends Component{
  constructor(props){
    super(props)
    this.state = {
      language : "french"
    }
  }
  
  render(){
    return (
      <LanguageContext.Provider value={this.state.language}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

export {LanguageProvider,LanguageContext}