import React from 'react'
import {BsFillTelephonePlusFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {useState} from "react"
import Button from './Button'
function Footer() {
  const [value, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-1/5">
        <h4 className="mb-2 text-xl"> <strong>CAR</strong> Rental</h4>
        <p className="mb-2">We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
        <a className="flex items-center gap-3" href="tel:123456789"><BsFillTelephonePlusFill/> <strong>(123)-456-789</strong></a>
        <a className="flex items-center gap-3" href="mailto:carrental@gmail.com"><MdEmail/> <strong>carrental@gmail.com</strong></a>
      </div>

      <div className="flex flex-col gap-2 w-1/5">
        <h4 className="mb-2 text-xl"><strong>COMPANY</strong></h4>
        <p>New York</p>
        <p>Careers</p>
        <p>Mobile</p>
        <p>Blog</p>
        <p>How we work</p>
      </div>

      <div className="flex flex-col gap-2 w-1/5">
        <h4 className="mb-2 text-xl"><strong>WORKING HOURS</strong></h4>
        <p>Mon - Fri: 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 19:00PM</p>
        <p>Sun: Closed</p>
      </div>

      <div className="flex flex-col gap-2 w-1/5">
        <h4 className="mb-2 text-xl"><strong>SUBSCRIPTION</strong></h4>
        <p>Subscribe your Email address for latest news & updates.</p>
        <form className="flex flex-col">
          <input className="h-10 bg-gray-200 pl-3"onChange={handleChange} type="text" placeholder="Enter Email Address"  value={value}/>
          <Button primary>Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default Footer
