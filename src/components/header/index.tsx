import React from 'react'
import { Link, NavLink } from 'react-router'

function Header() {
  return (
    <div>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
      <Link to='/products'>product</Link>
      <Link to='/cart'>cart</Link>
      <Link to='/contact'>contact</Link>
    </div>
  )
}

export default Header