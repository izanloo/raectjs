import React from 'react'
import Categories from './Categories'
import ItemDetails from './ItemDetails'

export default function LeftSide({items,onClickItem,setSelectedItem}) {
    const handleOnItemSelected=(i)=>{
        setSelectedItem(i)
    }

  return (
    <>
    <Categories title='WebDesign' items={items.filter(i=>i.category === 'WebDesign')} onItemSelect={handleOnItemSelected}  />
    <Categories title='FrontEnd' items={items.filter(i=>i.category === 'FrontEnd')} onItemSelect={handleOnItemSelected} />
    <Categories title='BackEnd' items={items.filter(i=>i.category === 'BackEnd')} onItemSelect={handleOnItemSelected} />
    </>
  )
}
