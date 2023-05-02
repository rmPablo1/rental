import React from 'react'
import Link from './Link'
import mainLogo from "../assets/images.png"
function Navbar() {
  return (
    <div className="container is-fluid mt-5 mx-auto is-fluid flex items-center justify-between">
      <img className="cursor-pointer w-20 h-20" src={mainLogo} alt="logo"/>
      <div>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Vehicle Models</Link>
        <Link>Testimonials</Link>
        <Link>Our Team</Link>
        <Link>Contact</Link>
      </div>
      <div>
      <Link>Sign In</Link>
      <Link background>Register</Link>
      </div>
    </div>
  )
}

export default Navbar
