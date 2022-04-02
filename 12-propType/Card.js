import PropTypes from 'prop-types'
import React from 'react'

export default function Card(props) {
  const {title,price,image,handleClick}=props
  
    return (
    <div>
        <span>{title}</span>
        <span>{price}</span>
        <img src= {image}/> 
        <button onClick={handleClick}>add to Card</button>  
         </div>
  )
}
Card.propTypes={
    title:PropTypes.string,
    price:PropTypes.number,
    image:PropTypes.string

}
Card.defaultProps={
    image:"https://picsum.photos/id/237/200/300"
}