import {LanguageContext} from './Language'
import React from 'react'

export default function Button() {
    
  return (
  <LanguageContext.Consumer>
    {value => 
    
       <>
       {console.log(value)}
        <button onClick={()=>value.changelang("fa")} >{value?.lang=='en'?"fa":"فارسی"}</button>
        <button onClick={()=>value.changelang("en")}>{value?.lang=='en'?"en":"انگلیسی"}</button>
        <p >{value?.lang=='en'?"some text in english language":"متنی به زبان فارسی"}</p>
        </>}
        
  </LanguageContext.Consumer> 
   
     
    
  )
}