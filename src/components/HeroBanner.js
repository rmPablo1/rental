import React from 'react'
import Button from './Button'
import carBanner from "../assets/herobannercar.png"
import {GoVerified} from "react-icons/go"
import {GoChevronRight} from "react-icons/go"
function HeroBanner() {
  return (
    <div className="container relative mx-auto my-20 flex items-center gap-1 justify-around">
      <div className="w-1/4 flex flex-col -mr-60" id="hero-responsive">
        <p className="text-black font-bold text-xl my-2">Plan your trip now</p>
        <h2 className="text-5xl my-2 font-bold">Save <span className="text-orange-500">big</span> with our car rental</h2>
        <p className="my-4 text-sm" id="hide-hero-responsive">Rent the car of your dreams.
          Unbeatable prices, unlimited miles,
          flexible pick-up options and much more
        </p>
        <div className="flex gap-4">
          <Button icon primary>Book Ride <GoVerified/></Button>
          <Button icon secondary>Learn More <GoChevronRight/></Button>
        </div>
      </div>
      <img src={carBanner} className="w-2/5"alt="car" id="image-hero-responsive"/>
    </div>
  )
}

export default HeroBanner
