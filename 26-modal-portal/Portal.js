import React, { useState } from 'react'
import Modal from './Modal'

export default function Portal() {
    const [showModal,setShowmodal] = useState(false)
  return (
    <div>
        <div className='first-section'>
            <button onClick={()=> setShowmodal(true)}>modal</button>
            <Modal onClose={()=>setShowmodal(false)} open={showModal}>fancy modal</Modal>
        </div>
        <div className='second-section'>text modal</div>
    </div>
  )
}
