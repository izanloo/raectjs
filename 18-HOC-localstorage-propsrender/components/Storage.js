import React from 'react'
export default function Storage({render}) {
    
    const save=(key,item)=>{
    localStorage.setItem(key,item)
    }
    const load=(item)=>{
      return  localStorage.getItem(item)
    }
    const remove=(key)=>{
        localStorage.removeItem(key)
    }
   
      
  return (
    <div>
        {render(save,load,remove)}
    </div>
  )
}
