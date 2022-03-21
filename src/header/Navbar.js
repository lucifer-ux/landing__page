import React from 'react'
import logo from '../assets/Bubl.svg'
import "./styles.css"
function Navbar() {
  return (
    <>
<nav className='navbar'>
  <img src={logo} height={150} width={150} className="logo"/>
<ul className='list-items'>
          <a href="#">About</a>
          <button className='register'>
          <a href="https://tally.so/r/nGkq2n">Register</a>
          </button>
    </ul>
</nav>
</>
    
  )
}

export default Navbar