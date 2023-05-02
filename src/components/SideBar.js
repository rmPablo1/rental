import React from 'react'
import Button from './Button'
function SideBar({cars, onChoose, carSelected}) {
  const handleClick = (car) =>{
    onChoose(car)
  }

  const renderedCars = cars.map((car) => {
    if (carSelected === car) {
      return <Button onClick={()=>handleClick(car)} key={car.name} className="bg-orange-500 text-white font-bold text-xl mb-2 ">{car.name}</Button>
    }
    return <Button onClick={()=>handleClick(car)} key={car.name} className="bg-gray-200 hover:bg-orange-500 mb-2 font-bold text-xl hover:text-white">{car.name}</Button>
  })
  return (
    <div className="flex flex-col w-1/4">{renderedCars}</div>
  )
}

export default SideBar
