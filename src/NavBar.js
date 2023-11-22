import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function Navbar() {
  return (
    <div className='header'>
       <Link className='sl' to={"/list"}>Student List</Link>
       <Link to={"/form"}>Student Form</Link>
       <hr></hr>
    </div>
  )
}

export default Navbar
