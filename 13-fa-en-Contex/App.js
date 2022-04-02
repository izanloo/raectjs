import React, { Component } from 'react'

import Button from './Button'
import {LanguageContext} from './Language'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      lang:"en"
    }
  }
   
  handleClick=(lang)=>{
    this.setState({lang:lang})
  }
  render() {
    return (
      <div>
       <LanguageContext.Provider  value ={
     {lang :this.state?.lang,
     changelang: this.handleClick}
   } >
     
        <Button />
        </LanguageContext.Provider>
        
      
      </div>
    )}
}