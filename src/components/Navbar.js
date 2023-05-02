import React from 'react'
import Link from './Link'
import mainLogo from "../assets/images.png"
import Modal from './Modal'
import {AiOutlineMenu} from "react-icons/ai"
import {useState} from "react"
function Navbar() {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () =>{
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <div className="container is-fluid mt-5 mx-auto is-fluid flex items-center justify-between">
      <img className="cursor-pointer w-20 h-20" src={mainLogo} alt="logo"/>
      {showModal && <Modal onSelect={handleClose} />}
      <div id ="responsive-navbar">
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Vehicle Models</Link>
        <Link>Testimonials</Link>
        <Link>Our Team</Link>
        <Link>Contact</Link>
      </div>
      <div id ="responsive-navbar">
        <Link>Sign In</Link>
        <Link background>Register</Link>
      </div>
      <AiOutlineMenu onClick={handleClick}className="text-2xl responsive-menu-icon"/>
    </div>
  )
}

export default Navbar
