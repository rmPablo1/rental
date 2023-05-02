import React from 'react'
import profile from "../assets/pablo.png"
import profile2 from "../assets/maribel.png"
import {ImQuotesRight} from "react-icons/im"

function Reviews() {
  return (
    <div className="flex items-center justify-center flex-col">
      <p className="text-xl font-bold">Reviewed by People</p>
      <h2 className="text-4xl font-bold mb-5">Client's Testimonials</h2>
      <p className="text-center text-gray-700">
        Discover the positive impact we've made on the our clients by reading through their testimonials.
        Our clients have experienced our service and results, and they're eager to share their positive experiences with you.
      </p>
      <div className="flex gap-10 mt-20">
        <div className="bg-white  w-2/4 p-10 drop-shadow-lg">
          <p className="text-3xl">
          "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "
          </p>
          <div className="flex items-center justify-between w-full gap-2 mt-4">
            <div className="flex items-center gap-2 mt-4">
              <img src={profile2} className="w-20  rounded-full" alt="profile pic"/>
              <div>
                <p className="font-bold text-xl">Maria Isabel</p>
                <p>Germany</p>
              </div>
            </div>
            <ImQuotesRight className="text-6xl text-orange-500"/>
          </div>
        </div>
        <div className="bg-white w-2/4 p-10 drop-shadow-lg">
          <p className="text-3xl">
            "The car was in great condition and made our trip even better. Highly recommend for this car rental website!"
          </p>
          <div className="flex items-center justify-between gap-2 mt-4 w-full">
            <div className="flex items-center gap-2 mt-4">
              <img src={profile} className="w-20 rounded-full" alt="profile pic"/>
              <div>
                <p className="font-bold text-xl">Pablo Rubio</p>
                <p>Spain</p>
              </div>
            </div>
            <ImQuotesRight className="text-6xl text-orange-500"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
