import React from 'react'
import tutorial1 from "../assets/tutorial1.png"
import tutorial2 from "../assets/tutorial2.png"
import tutorial3 from "../assets/tutorial3.png"
function Explanation() {
  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-col items-center">
        <h3 className="text-4xl font-bold mb-10">Plan your trip now</h3>
        <h2 className="text-6xl font-bold mb-20">Quick & easy car rental</h2>
        <div className="flex items-center">
          <div className="flex flex-col">
            <img src={tutorial1} className="w-2/5 self-center" alt="tutorial"/>
            <h3 className="font-bold text-3xl text-center">
              Select Car
            </h3>
            <p className="text-center mx-auto px-10 w-4/5 mt-5">
              We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs
            </p>
          </div>
          <div className="flex flex-col">
            <img src={tutorial2} className="w-2/5 self-center"  alt="tutorial" />
            <h3 className="font-bold text-center text-3xl">
              Contact Operator
            </h3>
            <p className="text-center mx-auto px-10 w-4/5 mt-5">
              Our knowledgeable and friendly operators are always ready to help with any questions or concerns
            </p>
          </div>
          <div className="flex flex-col">
            <img src={tutorial3} className="w-2/5 self-center"  alt="tutorial" />
            <h3 className="font-bold text-center text-3xl">
              Let's Drive
            </h3>
            <p className="text-center mx-auto px-10 w-4/5 mt-5">
              Whether you're hitting the open road, we've got you covered with our wide range of cars
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explanation
