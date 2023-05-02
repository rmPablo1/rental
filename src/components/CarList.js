import React from 'react'
import CarShow from './CarShow'
import {useState} from "react"
import SideBar from './SideBar'
import CarInfo from './CarInfo'
import car1 from "../assets/car1.jpg"
function CarList({cars}) {
  const [car, setCar] = useState({img: car1,price: 45, name: "Audi A1 S-Line", model: "Audi", mark: "A1", year:2012, doors: "4/5", ac: "Yes", transmission: "Manual", fuel:"Gasoline"})
  console.log(cars.first)
  const handleClick = (car) =>{
    console.log(car)
    setCar(car)
  }

  return (
    <div className="container mx-auto mt-60 flex justify-between">
      <SideBar onChoose={handleClick} cars={cars} carSelected={car}/>
      <img src={car.img} alt="specific car"/>
      <CarInfo car={car} />
    </div>
  )
}

export default CarList
