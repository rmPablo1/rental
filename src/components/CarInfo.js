import React from 'react'
import Button from './Button'
function CarInfo({car}) {
  console.log(car)
  return (
    <div>
      <table className="">
        <thead>
          <th className="bg-orange-500 self-center text-white w-full p-3 border">
          €{car.price} /rent per day
          </th>
        </thead>
        <tbody>
          <tr className="border border-black h-10">
            <td className="pl-5">Model</td>
            <td className="pr-5">{car.model}</td>
          </tr>
          <tr className="border border-black h-10">
            <td className="pl-5">
              Brand
            </td>
            <td className="pr-5">
              {car.mark}
            </td>
          </tr>
          <tr className="border border-black h-10">
            <td className="pl-5">
              Year
            </td>
            <td className="pr-5">
              {car.year}
            </td>
          </tr>
          <tr className="border border-black h-10">
            <td className="pl-5">
              Doors
            </td>
            <td className="pr-5">
              {car.doors}
            </td>
          </tr>
          <tr className="border border-black h-10">
            <td className="pl-5">
              AC
            </td>
            <td className="pr-5">
              {car.ac}
            </td>
          </tr>
          <tr className="border border-black h-10">
            <td className="pl-5">
              Transmission
            </td>
            <td className="pr-5">
              {car.transmission}
            </td>
          </tr>
          <tr className="border border-black h-10">
            <td className="pl-5">
              Fuel
            </td>
            <td className="pr-5">
              {car.fuel}
            </td>
          </tr>
        </tbody>
      </table>
      <Button primary className="w-full mt-3">RESERVE NOW</Button>
    </div>
  )
}

export default CarInfo
