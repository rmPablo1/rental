import React from 'react'
import carsImage from "../assets/3cars.png"
import Button from './Button'
import { GoChevronRight } from 'react-icons/go'
import aboutus1 from "../assets/aboutus1.png"
import aboutus2 from "../assets/aboutus2.png"
import aboutus3 from "../assets/aboutus3.png"
function Aboutus() {
  return (
    <div>
      <img src={carsImage} className="mx-auto mt-0" alt="3 cars"/>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col w-2/5">
          <p className="text-2xl font-bold mb-2">Why Choose Us</p>
          <h3 className="text-5xl font-bold mb-5">Best valued deals you will ever find</h3>
          <p className="mb-10">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking the bank.
            Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.
          </p>
          <Button primary icon >Find details <GoChevronRight/></Button>
        </div>
        <div className="flex flex-col w-30">
          <div className="flex mb-10">
            <img src={aboutus1} alt="aboutus"/>
            <div>
              <h3 className="text-2xl font-bold mb-2">Cross Country Drive</h3>
              <p className="w-80">Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
            </div>
          </div>
          <div className="flex mb-10">
            <img src={aboutus2} alt="aboutus"/>
            <div>
              <h3 className="text-2xl font-bold mb-2">All inclusive Pricing</h3>
              <p className="w-80">Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
            </div>
          </div>
          <div className="flex mb-10">
            <img src={aboutus3} alt="about us" />
            <div>
              <h3 className="text-2xl font-bold mb-2">No Hidden Charges</h3>
              <p className="w-80">Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
