import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
      <>
    <div>welcome</div>
    <NavLink style={({ isActive }) =>({color: isActive ? "red" : "green"})} to ="/Contact" >contact</NavLink>
    <NavLink style={({ isActive }) => ({color: isActive ? "red" : "green"})} to ="/Invoice" >invoice</NavLink>

    </>
  )
}
