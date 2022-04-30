import React from 'react'
import ReactDom from 'react-dom'


export default function Modal({open,children,onClose}) {
  if(!open) return null
    return ReactDom.createPortal(
      <>
    <div className='overlay'>
    <div className='modal'>
        <p>{children}</p>
        <button onClick={()=> onClose()} >close</button>
    </div>
    </div>
    </>,
    document.getElementById("moon")
  )
}
