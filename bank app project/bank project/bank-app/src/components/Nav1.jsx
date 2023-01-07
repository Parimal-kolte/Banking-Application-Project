import React from 'react'
import { Link } from 'react-router-dom'

const Nav1 = () => {
  return (
    <div><div className='sticky-top'>
    <nav class="   navbar navbar-expand-lg bg-light1 ">
<div class="container-fluid">
<Link class="navbar-brand"  >ICICI </Link>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
  <ul class="navbar-nav">
    <li class="nav-item">
      <Link class="nav-link active" aria-current="page" to="/home" style={{color:'white'}}>Home</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link"to ="/about"  >About</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/service">Services</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/contact">Contact </Link>
    </li>

    <li class="nav-item">
      <Link className="nav-link text-danger" to="/home">sign out </Link>
    </li>
  </ul>
</div>
</div>
</nav>
 </div></div>
  )
}

export default Nav1