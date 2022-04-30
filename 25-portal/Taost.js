import React from 'react'
import ReactDom from 'react-dom'

export default function Taost({messages}) {

    if(!messages) return null

  return ReactDom.createPortal(
    <>
    {messages.map((m) => (<p>
            {m.desc}</p>
                    ))
                    }  
        </>,
    document.getElementById("taost")
    )
}
