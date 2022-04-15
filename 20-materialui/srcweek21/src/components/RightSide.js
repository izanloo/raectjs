import React from 'react'

export default function RightSide({selectedItem}) {
  return (
    <>
        <h2>{selectedItem.title}</h2>
        <p>{selectedItem.des}</p>
    </>
  )
}
